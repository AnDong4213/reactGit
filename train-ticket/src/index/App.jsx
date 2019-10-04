import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'

import { h0 } from '../common/fp'

import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Journey from './Journey'
import Submit from './Submit'

import { exchangeFromTo, showCitySelector, hideCitySelector, setSelectedCity, fetchCityData, showDateSelector, hideDateSelector, setDepartDate, toggleHighSpeed } from './actions'

function App(props) {
  const { from, to, dispatch, isCitySelectorVisible, isDateSelectorVisible, cityData, isLoadingCityData, departDate, highSpeed } = props;
  const onBack = useCallback(() => {
    window.history.back()
  }, [])
  /* const doExchangeFromTo = useCallback(() => {
    dispatch(exchangeFromTo())
  }, [dispatch])
  const doShowCitySelector = useCallback(m => {
    dispatch(showCitySelector(m))
  }, [dispatch]) */
  const dbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo,
      showCitySelector
    }, dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const citySelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideCitySelector,
      fetchCityData,
      onSelect: setSelectedCity
    }, dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      onClick: showDateSelector
    }, dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: toggleHighSpeed
      },
      dispatch
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const onSelectDate = useCallback(day => {
    if (!day) {
      return
    }
    if (day < h0()) {
      return
    }
    dispatch(setDepartDate(day))
    dispatch(hideDateSelector())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="票票票" onBack={onBack} />
      </div>
      <form action='./query.html' className="form">
        {/* <Journey from={from} to={to} exchangeFromTo={doExchangeFromTo} showCitySelector={doShowCitySelector} /> */}
        <Journey from={from} to={to} {...dbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
      <DateSelector 
        show={isDateSelectorVisible}
        onSelect={onSelectDate}
        {...dateSelectorCbs}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
