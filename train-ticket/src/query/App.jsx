import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import URI from 'urijs'
import dayjs from 'dayjs'
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { h0 } from '../common/fp'
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
  const { trainList, from, to, departDate, highSpeed, searchParsed, dispatch, orderType, onlyTickets,
    isFiltersVisible, ticketTypes, trainTypes, departStations, arriveStations, checkedTicketTypes, checkedTrainTypes, checkedDepartStations, checkedArriveStations, departTimeStart, departTimeEnd, arriveTimeStart, arriveTimeEnd } = props

  useEffect(() => {
    const queries = URI.parseQuery(window.location.search)
    const { from, to, date, highSpeed } = queries
    // console.log(dayjs(date).valueOf())
    // console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'))
    // console.log(moment(date).valueOf())
    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDepartDate(moment(date).valueOf()))
    dispatch(setHighSpeed(highSpeed === 'true'))

    dispatch(setSearchParsed(true))
  }, [dispatch])
  useEffect(() => {
    if (!searchParsed) {
      return
    }
    console.log(from)
    const url = new URI('/rest/query')
      .setSearch('from', from)
      .setSearch('to', to)
      .setSearch('highSpeed', highSpeed)
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .setSearch('orderType', orderType)
      .setSearch('onlyTickets', onlyTickets)
      .setSearch('checkedTicketTypes', Object.keys(checkedTicketTypes).join())
      .setSearch('checkedTrainTypes', Object.keys(checkedTrainTypes).join())
      .setSearch('checkedDepartStations', Object.keys(checkedDepartStations).join())
      .setSearch('checkedArriveStations', Object.keys(checkedArriveStations).join())
      .setSearch('departTimeStart', departTimeStart)
      .setSearch('departTimeEnd', departTimeEnd)
      .setSearch('arriveTimeStart', arriveTimeStart)
      .setSearch('arriveTimeEnd', arriveTimeEnd)
      .toString()
    console.log(url)
  }, [arriveTimeEnd, arriveTimeStart, checkedArriveStations, checkedDepartStations, checkedTicketTypes, checkedTrainTypes, departDate, departTimeEnd, departTimeStart, from, highSpeed, onlyTickets, orderType, searchParsed, to])

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
