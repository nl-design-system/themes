const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src', 'index.scss');
const outputFile = path.join(__dirname, 'dist', 'custom-css-overview.json');

const lines = fs.readFileSync(inputFile, 'utf-8').split(/\r?\n/);
const overrides = [];

// Parser state
let insideComment = false;
let isCustomOverride = false;
let currentComment = null;
let collectingRules = false;
let selectorBuffer = [];
let openBraces = 0;
let blockStack = [];

for (let line of lines) {
    const trimmed = line.trim();

    // Detect opening of a CSS block
    if (trimmed.endsWith('{')) {
        const selectorLine = selectorBuffer.join(' ') + ' ' + trimmed.replace('{','').trim();
        selectorBuffer = []; // reset buffer
        blockStack.push(selectorLine.trim());
    }

    // Detect closing of a CSS block
    if (trimmed.endsWith('}')) {
        blockStack.pop();
        if (collectingRules) {
            openBraces -= 1;
            if (openBraces <= 0) {
                overrides.push(currentComment);
                currentComment = null;
                collectingRules = false;
                openBraces = 0;
            }
        }
    }

    processLine(trimmed, blockStack.join(' > '));
}

// Write JSON
fs.writeFileSync(outputFile, JSON.stringify(overrides, null, 4));
console.log(`JSON overzicht gemaakt: ${outputFile}`);

function processLine(trimmed, context) {
    // Start comment
    if (trimmed.startsWith('/*')) {
        insideComment = true;
        isCustomOverride = false;
        currentComment = {
            reason: '',
            relatedComponent: '',
            upstreamIssue: '',
            safeToRemove: '',
            lastVerified: '',
            selectors: [],
            css: [],
            context: context
        };
        selectorBuffer = [];
        return;
    }

    // Inside comment
    if (insideComment) {
        if (trimmed.includes('CUSTOM OVERRIDE')) isCustomOverride = true;

        if (isCustomOverride) {
            const reasonMatch = trimmed.match(/\* Reason:\s*(.*)/);
            const componentMatch = trimmed.match(/\* Related Component:\s*(.*)/);
            const issueMatch = trimmed.match(/\* Upstream Issue:\s*(.*)/);
            const safeMatch = trimmed.match(/\* Safe to remove when:\s*(.*)/);
            const verifiedMatch = trimmed.match(/\* Last verified:\s*(.*)/);

            if (reasonMatch) currentComment.reason = reasonMatch[1].trim();
            if (componentMatch) currentComment.relatedComponent = componentMatch[1].trim();
            if (issueMatch) currentComment.upstreamIssue = issueMatch[1].trim();
            if (safeMatch) currentComment.safeToRemove = safeMatch[1].trim();
            if (verifiedMatch) currentComment.lastVerified = verifiedMatch[1].trim();
        }

        if (trimmed.endsWith('*/')) {
            insideComment = false;
            if (isCustomOverride) {
                collectingRules = true;
                openBraces = 0; // reset voor de eerste CSS block
            }
        }
        return;
    }

    // Collect selector regels over meerdere lijnen
    if (collectingRules && trimmed.length > 0) {
        if (trimmed.endsWith('{')) {
            const selectorLine = selectorBuffer.join(' ') + ' ' + trimmed.replace('{','').trim();
            selectorBuffer = [];
            const selectors = selectorLine.split(',').map(s => s.trim()).filter(Boolean);
            currentComment.selectors = currentComment.selectors.concat(selectors);
            openBraces += 1;
        } else if (!trimmed.endsWith('}') && !trimmed.startsWith('//')) {
            // verzamel selector regels totdat '{' verschijnt
            selectorBuffer.push(trimmed);
        }

        // Voeg CSS regels toe (niet de selectors zelf)
        if (trimmed.includes(':') || trimmed.startsWith('--')) {
            currentComment.css.push(trimmed);
        }
    }
}
