import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { h0 } from './fp';
import Header from './Header.jsx';

import './DateSelector.css';

export default function DateSelector(props) {
  const { show, onSelect, onBack } = props

  return (
    <div className={classnames('date-selector', {hidden: !show})}>
      <Header title="日期选择" onBack={onBack} />
      <div className="date-selector-tables">
        io
      </div>
    </div>
  )
}
DateSelector.propTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
}
