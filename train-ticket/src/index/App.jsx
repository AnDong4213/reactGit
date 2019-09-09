import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header'
import CitySelector from '../common/CitySelector'

import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Journey from './Journey'
import Submit from './Submit'

import { exchangeFromTo, showCitySelector, hideCitySelector, setSelectedCity, fetchCityData } from './actions'

function App(props) {
  const { from, to, dispatch, isCitySelectorVisible, cityData, isLoadingCityData } = props;
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

  return (
    <div>
      <div className="header-wrapper">
        <Header title="票票票" onBack={onBack} />
      </div>
      <form className="form">
        {/* <Journey from={from} to={to} exchangeFromTo={doExchangeFromTo} showCitySelector={doShowCitySelector} /> */}
        <Journey from={from} to={to} {...dbs} />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
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
