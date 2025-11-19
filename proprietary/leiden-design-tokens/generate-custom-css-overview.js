const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src', 'index.scss');
const outputFile = path.join(__dirname, 'dist', 'custom-css-overview.json');

const fileContent = fs.readFileSync(inputFile, 'utf-8');
const lines = fileContent.split(/\r?\n/);

const overrides = [];

let insideComment = false;
let isCustomOverride = false;
let currentComment = null;
let selectorBuffer = [];
let collectingSelector = false;
let collectingRules = false;
let ruleBuffer = [];
let openBraces = 0;

for (let line of lines) {
    const trimmed = line.trim();

    // Start van een comment
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
            css: [] // hier als array
        };
        continue;
    }

    // Binnen een comment
    if (insideComment) {
        if (trimmed.includes('CUSTOM OVERRIDE')) {
            isCustomOverride = true;
        }

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
                collectingSelector = true;
                selectorBuffer = [];
            }
        }

        continue;
    }

    // Collect selectors na comment
    if (collectingSelector) {
        if (trimmed.length === 0 || trimmed.startsWith('//')) continue;

        selectorBuffer.push(trimmed.replace('{', '').trim());

        if (trimmed.endsWith('{')) {
            const fullSelector = selectorBuffer.join(' ').split(',').map(s => s.trim()).filter(Boolean);
            currentComment.selectors = fullSelector;

            collectingSelector = false;
            collectingRules = true;
            ruleBuffer = [];
            openBraces = 1; // eerste '{' geteld
            continue;
        }
    }

    // Collect CSS regels
    if (collectingRules) {
        openBraces += (trimmed.match(/{/g) || []).length;
        openBraces -= (trimmed.match(/}/g) || []).length;

        // Voeg niet lege regels toe aan de array, sluit-accolades negeren
        if (trimmed.length > 0 && trimmed !== '}') {
            currentComment.css.push(trimmed);
        }

        if (openBraces === 0) {
            overrides.push(currentComment);

            currentComment = null;
            ruleBuffer = [];
            collectingRules = false;
        }
    }
}

// Schrijf JSON bestand
fs.writeFileSync(outputFile, JSON.stringify(overrides, null, 4));
console.log(`JSON overzicht gemaakt: ${outputFile}`);
