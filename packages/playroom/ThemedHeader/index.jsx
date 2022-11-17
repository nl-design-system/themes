import React from 'react';
import PropTypes from 'prop-types';
import AmsterdamLogo from './AmsterdamLogo';
import UtrechtLogo from './UtrechtLogo';
import DenHaagLogo from './DenHaagLogo';
import { UtrechtPageHeader } from '../components';
import { RvoLogo } from './RvoLogo';
import clsx from 'clsx';

const TopNav = ({ brand }) => {
  const getTopnavItems = {
    amsterdam: ['Onderwerpen', 'Nieuws', 'Contact'],
    utrecht: ['Wonen en leven', 'Zorg en onderwijs', 'Werk en inkomen', 'Ondernemen', 'Bestuur en organsiatie'],
    denhaag: ['Onderwerpen', 'Ondernemen', 'De gemeente'],
    rvo: ['Home', 'Mijn aanvragen', 'Nieuwe aanvraag'],
  };

  return (
    getTopnavItems[brand].length && (
      <nav
        className={clsx('denhaag-header__navigation', 'utrecht-topnav', 'utrecht-navhtml', 'rvo-topnav__background')}
      >
        <ul className={clsx('utrecht-topnav__list', { 'denhaag-responsive-content': brand !== 'denhaag' })}>
          {getTopnavItems[brand].map((item) => (
            <li className="utrecht-topnav__item" key={item}>
              <a className="utrecht-topnav__link" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

TopNav.propTypes = {
  brand: PropTypes.any,
};

export const ThemedHeader = ({ theme }) => {
  const brand = theme.includes('amsterdam')
    ? 'amsterdam'
    : theme.includes('utrecht')
    ? 'utrecht'
    : theme.includes('denhaag')
    ? 'denhaag'
    : theme.includes('rvo')
    ? 'rvo'
    : '';

  console.log(brand);

  const getLogo = {
    amsterdam: AmsterdamLogo,
    utrecht: UtrechtLogo,
    denhaag: DenHaagLogo,
    rvo: RvoLogo,
  };

  const Logo = getLogo[brand] || <></>;

  const fullWidthTopnav = !theme.includes('denhaag');

  return (
    brand && (
      <UtrechtPageHeader>
        <div className="denhaag-responsive-content utrecht-page-header__banner">
          {fullWidthTopnav ? (
            <div className="denhaag-header__logo">
              <Logo />
            </div>
          ) : (
            <div className="denhaag-header__content">
              <div className="denhaag-header__logo">
                <Logo />
              </div>
              <TopNav brand={brand} />
            </div>
          )}
        </div>
        {fullWidthTopnav && <TopNav brand={brand} />}
      </UtrechtPageHeader>
    )
  );
};

ThemedHeader.propTypes = {
  theme: PropTypes.any,
};
