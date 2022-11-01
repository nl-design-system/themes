export default [
  {
    group: 'Button',
    name: 'PrimaryActionButton',
    code: `
      <UtrechtButton appearance="primary-action-button">
        Send form
      </UtrechtButton>
    `,
  },
  {
    group: 'Form',
    name: 'Meeuwenoverlast melden',
    code: `<UtrechtPageContent>
  <UtrechtHeading1>Meeuwenoverlast melden</UtrechtHeading1>
  <form>
    <UtrechtFieldset>
      <UtrechtFieldsetLegend>
        <h2>Locatie van de melder</h2>
      </UtrechtFieldsetLegend>
      <p>Type de straatnaam en het dichtstbijzijnde huisnummer in</p>
      <UtrechtFormField>
        <UtrechtFormLabel htmlFor='straatnaam'>Straatnaam</UtrechtFormLabel>
        <UtrechtTextbox id='straatnaam' required></UtrechtTextbox>
      </UtrechtFormField>
      <UtrechtFormField>
        <UtrechtFormLabel htmlFor='huisnummer'>Huisnummer (optioneel)</UtrechtFormLabel>
        <br />
        <UtrechtTextbox id='huisnummer' />
      </UtrechtFormField>
    </UtrechtFieldset>
    <UtrechtFieldset>
      <UtrechtFieldsetLegend>
        <h2>Melding</h2>
      </UtrechtFieldsetLegend>
      <UtrechtFieldset>
        <UtrechtFieldsetLegend>Is er een meeuwennest op uw dak of het dak van uw buren? </UtrechtFieldsetLegend>
        <UtrechtFormField>
          <UtrechtRadioButton name='dak' value='true' id='dak-true' />
          <UtrechtFormLabel htmlFor='dak-true'>Ja</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton name='dak' value='false' id='dak-false' />
          <UtrechtFormLabel htmlFor='dak-false'>Nee</UtrechtFormLabel>
        </UtrechtFormField>
      </UtrechtFieldset>
      <UtrechtFieldset>
        <UtrechtFieldsetLegend>Welke overlast ervaart u?</UtrechtFieldsetLegend>
        <p>Meerdere antwoorden mogelijk</p>
        <UtrechtFormField>
          <UtrechtCheckbox id='rommel' />
          <UtrechtFormLabel htmlFor='rommel'>Rommel: kapotte vuilniszakken en dergelijke</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtCheckbox id='lawaai' />
          <UtrechtFormLabel htmlFor='lawaai'>Lawaai: krijsende meeuwen</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtCheckbox id='poep' />
          <UtrechtFormLabel htmlFor='poep'>Poep: veel meeuwenpoep bij voorbeeld op uw balkon</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtCheckbox id='aanvallen' />
          <UtrechtFormLabel htmlFor='aanvallen'>Meeuw valt mensen aan</UtrechtFormLabel>
        </UtrechtFormField>
      </UtrechtFieldset>
      <UtrechtFieldset>
        <UtrechtFieldsetLegend>Wanneer heeft u last van de meeuwen?</UtrechtFieldsetLegend>
        <p>Meerdere antwoorden mogelijk</p>
        <UtrechtFormField>
          <UtrechtCheckbox id='ochtend' />
          <UtrechtFormLabel htmlFor='ochtend'>ochtend, 6.00 - 12.00</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtCheckbox id='middag' />
          <UtrechtFormLabel htmlFor='middag'>middag, 12.00 - 18.00</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtCheckbox id='avond' />
          <UtrechtFormLabel htmlFor='avond'>avond, 18.00 - 22.00</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtCheckbox id='nacht' />
          <UtrechtFormLabel htmlFor='nacht'>nacht, 22.00 - 6.00</UtrechtFormLabel>
        </UtrechtFormField>
      </UtrechtFieldset>
      <UtrechtFieldset>
        <UtrechtFieldsetLegend>Hoeveel dagen per week treedt de overlast op?</UtrechtFieldsetLegend>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen1' name='dagenOverlast' value='1' />
          <UtrechtFormLabel htmlFor='dagen1'>1</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen2' name='dagenOverlast' value='2' />
          <UtrechtFormLabel htmlFor='dagen2'>2</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen3' name='dagenOverlast' value='3' />
          <UtrechtFormLabel htmlFor='dagen3'>3</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen4' name='dagenOverlast' value='4' />
          <UtrechtFormLabel htmlFor='dagen4'>4</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen5' name='dagenOverlast' value='5' />
          <UtrechtFormLabel htmlFor='dagen5'>5</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen6' name='dagenOverlast' value='6' />
          <UtrechtFormLabel htmlFor='dagen6'>6</UtrechtFormLabel>
        </UtrechtFormField>
        <UtrechtFormField>
          <UtrechtRadioButton id='dagen7' name='dagenOverlast' value='7' />
          <UtrechtFormLabel htmlFor='dagen7'>7</UtrechtFormLabel>
        </UtrechtFormField>
      </UtrechtFieldset>
      <UtrechtFormField>
        <UtrechtFormLabel htmlFor='opmerkingen'>Opmerkingen (optioneel)</UtrechtFormLabel>
        <UtrechtTextarea id='opmerkingen' />
      </UtrechtFormField>
      <UtrechtFormField>
        <UtrechtFormLabel htmlFor='email'>E-mailadres</UtrechtFormLabel>
        <UtrechtTextbox id='email' />
      </UtrechtFormField>
    </UtrechtFieldset>
    <UtrechtButtonGroup>
      <UtrechtPrimaryActionButton type='submit'>Verstuur</UtrechtPrimaryActionButton>
    </UtrechtButtonGroup>
  </form>
</UtrechtPageContent>
    `,
  },
  // etc...
];
