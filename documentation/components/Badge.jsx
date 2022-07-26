import React from 'react';
import PropTypes from 'prop-types';

export const LinkBadge = ({ href, label, message, color = 'informational', logo }) => {
  const badge = `https://img.shields.io/static/v1?label=${label}&color=${color}&logo=${logo}&style=flat&message=${message}&labelColor=black`;

  return (
    <a href={href} style={{ marginInlineEnd: '10px' }}>
      <img src={badge} alt={`${label} - ${message}`} />
    </a>
  );
};

LinkBadge.propTypes = {
  href: PropTypes.string,
  logo: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string,
};
