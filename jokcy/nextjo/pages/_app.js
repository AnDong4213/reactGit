import App, { Container } from 'next/app'  // Container新版本已废弃
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'

import MyContext from './../lib/my-context'
import testHoc from './../lib/with-redux'
// import store from '../store/store'

class MyApp extends App {
  state = {
    count: 1,
    context: '我是useContext'
  }
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext)
    console.log(appProps); // {pageProps: Object}
    return {
      ...appProps
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    // console.log(this.props)
    return (
      <div>
        <Provider store={reduxStore}>
          <MyContext.Provider value={this.state.context}>
            <Component { ...pageProps } count2={this.state.count} />
            <button onClick={() => this.setState({context: this.state.context+'111'})}>useContext测试</button>
          </MyContext.Provider>
        </Provider>
      </div>
    )
  }
}

export default testHoc(MyApp)
