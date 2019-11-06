import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Nav from '../components/nav'

import { Button } from 'antd'
const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete',
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  }
}
events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

const Home = () => {

  const gotoB = () => {
    Router.push({
      pathname: '/b',
      query: {
        age: 77
      }
    }, '/b/77')
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Link href="/a?id=99" as="/a/99">
        <Button type='primary'>Index</Button>
      </Link>
      <p onClick={gotoB}>跳转B</p>
    </div>
  )
}
export default Home
