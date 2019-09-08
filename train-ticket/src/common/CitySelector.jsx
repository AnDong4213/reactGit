import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './CitySelector.css';

export default function CitySelector(props) {
  const { show, cityData, isLoading } = props;

  return (
    /* <div className={['city-selector', (!show) && 'hidden'].filter(Boolean).join(' ')}> */
    <div className={classnames('city-selector', {hidden: !show})}>
      CitySelector
    </div>
  )
}

CitySelector.propTypes = {
  isLoading: PropTypes.bool.isRequired
}
