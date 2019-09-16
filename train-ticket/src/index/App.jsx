import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header'
import CitySelector from '../common/CitySelector'
import DateSelector from '../common/DateSelector'

import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Journey from './Journey'
import Submit from './Submit'

import { exchangeFromTo, showCitySelector, hideCitySelector, setSelectedCity, fetchCityData, showDateSelector, hideDateSelector } from './actions'

function App(props) {
  const { from, to, dispatch, isCitySelectorVisible, isDateSelectorVisible, cityData, isLoadingCityData, departDate } = props;
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
  }, [])
  const citySelectorCbs = useMemo(() => {
    return bindActionCreators({
      onBack: hideCitySelector,
      fetchCityData,
      onSelect: setSelectedCity
    }, dispatch)
  }, [])
  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      onClick: showDateSelector
    }, dispatch)
  }, [])
  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector,
      },
      dispatch
    );
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="票票票" onBack={onBack} />
      </div>
      <form className="form">
        {/* <Journey from={from} to={to} exchangeFromTo={doExchangeFromTo} showCitySelector={doShowCitySelector} /> */}
        <Journey from={from} to={to} {...dbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed />
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
