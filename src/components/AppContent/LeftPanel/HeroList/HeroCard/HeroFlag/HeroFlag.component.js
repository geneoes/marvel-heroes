import React from 'react';
import PropTypes from 'prop-types';

function HeroFlag({children, checked}) {

  const style = {
    backgroundColor: checked ? 'green' : 'gray',
    borderRadius: '20px',
    padding: '4px',
    fontSize: '14px',
    border: '1px solid black',
    width: '24px',
    height: '24px',
    lineHeight: '24px',
  }

  return <span style={style}>{children}</span>
}


HeroFlag.propTypes = {
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
}

export default HeroFlag;