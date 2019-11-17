import { useEffect } from 'react'
import { withRouter, useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
// import moment from 'moment'
// import Nav from '../components/nav0'
const Nav = dynamic(import('../components/nav0'))

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`

const A = (para) => {
  useEffect(() => {
    console.log(para);
  }, [])
  return (
    <div>
      <h3>{para.name}</h3>
      <Title>{para.time}</Title>
      <i className="ic">我是i标签</i>
      <Nav>
        <h1>{para.router.query.id}</h1>
      </Nav>
    </div>
  )
}

A.getInitialProps = async (ctx) => {
  // console.log('------------'); // 先执行，在useEffect
  const moment = await import('moment')

  console.log(ctx);
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'QQ',
        time: moment.default(Date.now() - 60 * 1000).fromNow()
      })
    }, 1000)
  })
  return await promise
}
export default withRouter(A)

/* const A = () => {
  const router = useRouter()
  console.log(router);
  const { id } = router.query

  return (
    <div>{id}</div>
  )
}
export default A */
