import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import { Button } from 'antd'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <Button type='primary'>惊魂甫定</Button>
  </div>
)

export default Home
