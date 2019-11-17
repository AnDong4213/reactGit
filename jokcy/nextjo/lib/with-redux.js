import React from 'react'
import createStore from '../stote/store'

export default Comp => {
  function TestHocComp({ Component, pageProps, ...rest }) {
    // console.log(Component)
    // console.log(pageProps)
    if (pageProps) {
      pageProps.testa = '123'
    }
    return <Comp Component={Component} pageProps={pageProps} {...rest} />
  }
  TestHocComp.getInitialProps = Comp.getInitialProps
  return TestHocComp
}
