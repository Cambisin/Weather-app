import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './ForecastSummary';

import '../styles/ForecastSummaries.css';

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature} />
      ))}
    </div>
  );
}

export default ForecastSummaries;