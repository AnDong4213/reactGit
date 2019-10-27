import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {

  const pids = ['id1', 'id2', 'id3']

  useEffect(() => {
    // console.log(Router.asPath);
    Router.events.on('routeChangeComplete', handleRouteChange);

    /* Router.beforePopState(({ url, as, options }) => {
      console.log(url)
      console.log(as)
      console.log(options)
      return true
    }) */
  }, [])

  const handleRouteChange = url => {
    // console.log(url)
    if (url !== "/" && url !== "login") {
      // Router.push("/login");
      // window.location.href = '/login'
    }
  }
  const login = id => {
    console.log(id)
    Router.push('/login')
  }
  const post = () => {
    Router.push({pathname: '/post', query: { pid: 'ReactDom--' }, shallow: true})
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
        <Link href={{ pathname: '/post', query: { pid: 'ReactDom' } }}>
          <a className='card'>
            <h3>Post</h3>
          </a>
        </Link>
        <h3 onClick={post}>Post-click</h3>
        {/* <Link>支持任何有onClick事件的组件。 如果你不包含<a>标签，它仅给组件添加onClick事件，而不会添加href属性。 */}
        <Link href='/login'>
          <h3>Login</h3>
        </Link>
        <h3 onClick={() => login('123')}>Login-click</h3>
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
