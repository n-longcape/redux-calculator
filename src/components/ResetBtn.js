import React from 'react';
import PropTypes from 'prop-types';


const ResetBtn = ({ onClick }) => (
  <button onClick={ onClick }>REC</button>
);

ResetBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetBtn;