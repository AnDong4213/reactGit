import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux'

import Nav from '../components/nav'
import { Button } from 'antd'
import { add } from '../store/store'

/* const events = [
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
  // 如果您不想再听该事件，则可以使用以下off方法退订
  // Router.events.off('routeChangeStart', handleRouteChange)
}) */

const Home = props => {
  // console.log(props)
  const gotoB = () => {
    Router.push({
      pathname: '/b',
      query: {
        age: 77
      }
    }, '/b/77')
  }

  return (
    <div style={{margin: 20}}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Link href="/a?id=998" as="/a/998">
        <Button type='primary'>Index</Button>
      </Link>
      <p style={{margin: 20}} onClick={gotoB}>跳转B</p>
      <h3>{props.counter}</h3>
      <h3>{props.username}</h3>
      <input value={props.username} onChange={(e) => props.rename(e.target.value)} />
      <button onClick={() => props.add(props.counter)}>Add count</button>
      <style jsx>{`
        p {
          color: blue
        }
      `}</style>
      <style jsx global>{`
        .ic {
          color: red
        }
      `}</style>
    </div>
  )
}
Home.getInitialProps = async ctx => {
  ctx.reduxStore.dispatch(add(3))
  return {}
}

const mapStateToProps = state => {
  return {
    counter: state.counter.count,
    username: state.user.username
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add(num) {
      dispatch({
        type: 'ADD',
        num
      })
    },
    rename(name) {
      dispatch({
        type: 'UPDATE_USERNAME',
        name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
