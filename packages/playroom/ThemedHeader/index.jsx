import React from 'react';
import PropTypes from 'prop-types';
import AmsterdamLogo from './AmsterdamLogo';
import UtrechtLogo from './UtrechtLogo';
import DenHaagLogo from './DenHaagLogo';
import { UtrechtPageHeader } from '../components';

const AmsterdamHeader = () => (
  <UtrechtPageHeader>
    <div className="utrecht-page">
      <AmsterdamLogo />
    </div>
    <div className="rvo-topnav__background">
      <div className="utrecht-page">
        <nav className="rvo-topnav rvo-topnav--md">
          <ul className="utrecht-topnav__list">
            <li className="utrecht-topnav__item">
              <a className="utrecht-topnav__link" href="https://example.com/">
                Onderwerpen
              </a>
            </li>
            <li className="utrecht-topnav__item">
              <a className="utrecht-topnav__link" href="https://example.com/">
                Nieuws
              </a>
            </li>
            <li className="utrecht-topnav__item">
              <a className="utrecht-topnav__link" href="https://example.com/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </UtrechtPageHeader>
);

const UtrechtHeader = () => (
  <UtrechtPageHeader>
    <div>
      <UtrechtLogo />
    </div>
    <div className="utrecht-navhtml">
      <nav className="topnav">
        <ul className="utrecht-topnav__list">
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="https://example.com/">
              Wonen en leven
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="https://example.com/">
              Zorg en onderwijs
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="https://example.com/">
              Werk en inkomen
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="https://example.com">
              Ondernemen
            </a>
          </li>
          <li className="utrecht-topnav__item">
            <a className="utrecht-topnav__link" href="https://example.com">
              Bestuur en organisatie
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </UtrechtPageHeader>
);

const DenHaagHeader = () => (
  <header id="site-header" className="denhaag-header">
    <div className="denhaag-responsive-content">
      <div className="denhaag-header__content">
        <div className="denhaag-header__logo">
          <a className="denhaag-logo denhaag-header__link" href="#" aria-label="Gemeente Den Haag">
            <DenHaagLogo />
          </a>
        </div>
        <div className="denhaag-header__navigation rvo-topnav__background">
          <nav className="rvo-topnav rvo-topnav--md">
            <ul className="utrecht-topnav__list">
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="https://example.com/">
                  Onderwerpen
                </a>
              </li>
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="https://example.com/">
                  Ondernemen
                </a>
              </li>
              <li className="utrecht-topnav__item">
                <a className="utrecht-topnav__link" href="https://example.com/">
                  De gemeente
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="denhaag-header__actions"></div>
      </div>
    </div>
  </header>
);

export const ThemedHeader = ({ theme }) => {
    if(theme.includes('amsterdam-theme')) {
      return <AmsterdamHeader />;
    }

    if(theme.includes('utrecht-theme')) {
      return <UtrechtHeader />;
    }

    if(theme.includes('denhaag-theme')) {
      return <DenHaagHeader />;
    }

    return <></>;
};

ThemedHeader.propTypes = {
  theme: PropTypes.any,
};
