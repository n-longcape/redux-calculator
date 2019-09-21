import React from 'react';
import PropTypes from 'prop-types';


const DevideBtn = ({ onClick }) => (
  <button onClick={ onClick }>÷</button>
);

DevideBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DevideBtn;