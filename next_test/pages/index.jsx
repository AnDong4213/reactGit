import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {

  const pids = ['id1', 'id2', 'id3']

  useEffect(() => {
    // console.log(Router.asPath);
    // Router.events.on('routeChangeStart', handleRouteChange);

  }, [])

  const handleRouteChange = url => {
    if (url !== "/" && url !== "login") {
       // Router.push("/login");
       window.location.href = '/login'
    }
  }

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="热云,热云数据,大数据" />
        <meta name="description" content="热云数据,第三方大数据服务提供商." />
      </Head>

      <div className='row'>
        {
          pids.map(pid => (
            <Link href="/post/[pid]" as={`/post/${pid}`} key={pid}>
              <a className='card'>
                <h3>Post--{pid}</h3>
              </a>
            </Link>
          ))
        }
        {/* <Link href='/post'> */}
        <Link href={{ pathname: '/post', query: { pid: 'React' } }}>
          <a className='card'>
            <h3>Post</h3>
          </a>
        </Link>
        <Link href='/login'>
          <a className='card'>
            <h3>Login</h3>
          </a>
        </Link>
        <Link href='/register'>
          <a className='card'>
            <h3>Register</h3>
          </a>
        </Link>
        <Link href='/product'>
          <a className='card'>
            <h3>Product</h3>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default Home
