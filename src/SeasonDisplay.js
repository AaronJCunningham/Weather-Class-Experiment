import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'winter' : 'summer';
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());

  return <div>{season}</div>;
};

export default SeasonDisplay;
