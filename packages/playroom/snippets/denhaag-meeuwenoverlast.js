export const MeeuwenOverlast = {
  group: 'Den Haag',
  name: 'Form: Meeuwenoverlast',
  code: `<div className='denhaag-responsive-content denhaag-responsive-content--narrow'>
  <UtrechtPageContent>
    <UtrechtHeading1>Meeuwenoverlast melden</UtrechtHeading1>
    <form>
      <UtrechtFieldset>
        <UtrechtFieldsetLegend>
          <UtrechtHeading2>Locatie van de melder</UtrechtHeading2>
        </UtrechtFieldsetLegend>
        <p>Type de straatnaam en het dichtstbijzijnde huisnummer in</p>
        <UtrechtFormField type="text">
          <UtrechtParagraph className="utrecht-form-field__label">
            <UtrechtFormLabel htmlFor='straatnaam'>Straatnaam</UtrechtFormLabel>
          </UtrechtParagraph>
          <UtrechtParagraph className="utrecht-form-field__input">
            <UtrechtTextbox id='straatnaam' required></UtrechtTextbox>
          </UtrechtParagraph>
        </UtrechtFormField>
        <UtrechtFormField type="text">
          <UtrechtParagraph className="utrecht-form-field__label">
            <UtrechtFormLabel htmlFor='huisnummer'>Huisnummer (optioneel)</UtrechtFormLabel>
          </UtrechtParagraph>
          <UtrechtParagraph className="utrecht-form-field__input">
            <UtrechtTextbox id='huisnummer' />
          </UtrechtParagraph>
        </UtrechtFormField>
      </UtrechtFieldset>
      <UtrechtFieldset>
        <UtrechtFieldsetLegend>
          <UtrechtHeading2>Melding</UtrechtHeading2>
        </UtrechtFieldsetLegend>

        <UtrechtFieldset id='df861ef1-844a-42df-8365-b54f59474fb8' role='radiogroup'>
          <UtrechtFieldsetLegend>Is er een meeuwennest op uw dak of het dak van uw buren?</UtrechtFieldsetLegend>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='wel-meeuwennest' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='wel-meeuwennest'
                  name='meeuwennest'
                  value='true'
                />
                Ja er is een nest
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='geen-meeuwennest' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='geen-meeuwennest'
                  name='meeuwennest'
                  value='false'
                />
                Nee geen nest bij mij of de buren
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
        </UtrechtFieldset>

        <UtrechtFieldset aria-describedby='' id='7adc261b-20ea-41b8-bc5d-8bdcad6feb91'>
          <UtrechtFieldsetLegend>Welke overlast ervaart u?</UtrechtFieldsetLegend>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='4e054ee1-799e-4608-9055-19d3fc0b88e9' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='4e054ee1-799e-4608-9055-19d3fc0b88e9-description'
                  className='utrecht-form-field__input'
                  defaultChecked
                  id='4e054ee1-799e-4608-9055-19d3fc0b88e9'
                  name='rommel'
                  value='true'
                />
                Rommel: kapotte vuilniszakken en dergelijke
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='1928378j' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='1928378j-description'
                  className='utrecht-form-field__input'
                  id='1928378j'
                  name='lawaai'
                  value='true'
                />
                Lawaai: krijsende meeuwen
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='038ej1827' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='038ej1827-description'
                  className='utrecht-form-field__input'
                  id='038ej1827'
                  name='poep'
                  value='true'
                />
                Poep: veel meeuwenpoep bij voorbeeld op uw balkon
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='421b86d8-f5d2-4852-9f95-as374bd' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='421b86d8-f5d2-4852-9f95-as374bd-description'
                  className='utrecht-form-field__input'
                  id='421b86d8-f5d2-4852-9f95-b6690ac3d0e2'
                  name='aanvallen'
                  value='true'
                />
                Meeuw valt mensen aan
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
        </UtrechtFieldset>

        <UtrechtFieldset aria-describedby='' id='378272'>
          <UtrechtFieldsetLegend>Welke overlast ervaart u?</UtrechtFieldsetLegend>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='f839182h' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='f839182h-description'
                  className='utrecht-form-field__input'
                  defaultChecked
                  id='f839182h'
                  name='ochtend'
                  value='true'
                />
                ochtend, 6.00 - 12.00
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='238b2692-2460-4bad-93b5-b6def8c3b820' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='238b2692-2460-4bad-93b5-b6def8c3b820-description'
                  className='utrecht-form-field__input'
                  id='238b2692-2460-4bad-93b5-b6def8c3b820'
                  name='middag'
                  value='true'
                />
                middag, 12.00 - 18.00
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2-description'
                  className='utrecht-form-field__input'
                  id='6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2'
                  name='avond'
                  value='true'
                />
                avond, 18.00 - 22.00
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='checkbox'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--checkbox'>
              <UtrechtFormLabel htmlFor='192837whj' type='checkbox'>
                <UtrechtCheckbox
                  aria-describedby='192837whj-description'
                  className='utrecht-form-field__input'
                  id='192837whj'
                  name='nacht'
                  value='true'
                />
                nacht, 22.00 - 18.00
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
        </UtrechtFieldset>

        <UtrechtFieldset id='df861ef1-844a-42df-8365-b54f59474fb8' role='radiogroup'>
          <UtrechtFieldsetLegend>Hoeveel dagen per week treedt de overlast op?</UtrechtFieldsetLegend>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='1dag' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='1dag'
                  name='dagen-overlast'
                  value='1'
                />
                1 dag per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='2dagen' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='2dagen'
                  name='dagen-overlast'
                  value='2'
                />
                2 dagen per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='3dagen' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='3dagen'
                  name='dagen-overlast'
                  value='3'
                />
                3 dagen per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='4dagen' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='4dagen'
                  name='dagen-overlast'
                  value='4'
                />
                4 dagen per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='5dagen' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='5dagen'
                  name='dagen-overlast'
                  value='5'
                />
                5 dagen per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='6dagen' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='6dagen'
                  name='dagen-overlast'
                  value='6'
                />
                6 dagen per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
          <UtrechtFormField type='radio'>
            <UtrechtParagraph className='utrecht-form-field__label utrecht-form-field__label--radio'>
              <UtrechtFormLabel htmlFor='7dagen' type='radio'>
                <UtrechtRadioButton
                  className='utrecht-form-field__input'
                  id='7dagen'
                  name='dagen-overlast'
                  value='7'
                />
                7 dagen per week
              </UtrechtFormLabel>
            </UtrechtParagraph>
          </UtrechtFormField>
        </UtrechtFieldset>

        <UtrechtFormField type="text">
          <UtrechtParagraph className="utrecht-form-field__label">
            <UtrechtFormLabel htmlFor='opmerkingen'>Opmerkingen (optioneel)</UtrechtFormLabel>
          </UtrechtParagraph>
          <UtrechtParagraph className="utrecht-form-field__input">
            <UtrechtTextarea id='opmerkingen' />
          </UtrechtParagraph>
        </UtrechtFormField>
        <UtrechtFormField type="text">
          <UtrechtParagraph className="utrecht-form-field__label">
            <UtrechtFormLabel htmlFor='email'>E-mailadres</UtrechtFormLabel>
          </UtrechtParagraph>
          <UtrechtParagraph className="utrecht-form-field__input">
            <UtrechtTextbox id='email' />
          </UtrechtParagraph>
        </UtrechtFormField>
      </UtrechtFieldset>
      <UtrechtButtonGroup>
        <UtrechtPrimaryActionButton type='submit'>Verstuur</UtrechtPrimaryActionButton>
      </UtrechtButtonGroup>
    </form>
  </UtrechtPageContent>
</div>`,
}
