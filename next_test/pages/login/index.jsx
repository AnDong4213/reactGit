import { useState, useEffect, lazy, Suspense } from 'react'
import Router from 'next/router'
import { useRouter } from 'next/router'
import Nav from '../../components/nav'
// const Nav = lazy(() => import(/* webpackChunkName: 'nav' */'../../components/nav'));

const Login = () => {
  const router = useRouter()
  // const { pid } = router.query

  useEffect(() => {
    // console.log(Router.asPath);
  })

  return (
    <div>
      <Nav />
    </div>
  )
}

export default Login
