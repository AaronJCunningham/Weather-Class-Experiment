import React from 'react';

const Spinner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        <h1>{message}</h1>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading Now...',
};

export default Spinner;
