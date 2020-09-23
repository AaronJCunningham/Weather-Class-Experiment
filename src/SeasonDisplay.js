import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach brah!!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's cold",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat < 0 ? 'winter' : 'summer';
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
