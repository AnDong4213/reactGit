import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import URI from 'urijs'
//  import dayjs from 'dayjs';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { h0 } from '../common/fp';
import './App.css'

import Header from '../common/Header'
import Nav from '../common/Nav'
import List from './List'
import Bottom from './Bottom'

import {
  setFrom,
  setTo,
  setDepartDate,
  setHighSpeed,
  setSearchParsed,
  setTrainList,
  setTicketTypes,
  setTrainTypes,
  setDepartStations,
  setArriveStations,
  prevDate,
  nextDate,
  toggleOrderType,
  toggleHighSpeed,
  toggleOnlyTickets,
  toggleIsFiltersVisible,
  setCheckedTicketTypes,
  setCheckedTrainTypes,
  setCheckedDepartStations,
  setCheckedArriveStations,
  setDepartTimeStart,
  setDepartTimeEnd,
  setArriveTimeStart,
  setArriveTimeEnd,
} from './actions';

function App(props) {
  const { from , to, dispatch, searchParsed } = props

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search)
    const { from, to, date, highSpeed } = queries
    // console.log(dayjs(date).valueOf())
    // console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'))
    // console.log(moment(date).valueOf())
    dispatch(setFrom(decodeURIComponent(from)));
    dispatch(setTo(to));
    dispatch(setDepartDate(moment(date).valueOf()))
    dispatch(setHighSpeed(highSpeed === 'true'))

    dispatch(setSearchParsed(true))
  }, [])
  useEffect(() => {
    if (!searchParsed) {
      return
    }
    console.log(from)
    const url = new URI('/rest/query')
      .addQuery('from', encodeURIComponent(from))
      .setSearch('to', to)
      .toString()
    console.log(url)
  }, [searchParsed])

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  return (
    <>
      <div className='header-wrapper'>
        <Header title={`${from} - ${to}`} onBack={onBack} />
      </div>
      <Nav />
      <List />
      <Bottom />
    </>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
