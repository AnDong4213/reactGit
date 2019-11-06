import { useEffect } from 'react'
import { withRouter, useRouter } from 'next/router'
import Nav from '../components/nav0'

/* const A = (para) => {
  useEffect(() => {
    console.log(para);
  }, [])
  return (
    <div>
      <em>{para.router.query.id}</em>
      <Nav>
        <h1>{para.router.query.id}</h1>
      </Nav>
    </div>
  )
}
export default withRouter(A) */

const A = () => {
  const router = useRouter()
  console.log(router);
  const { id } = router.query

  return (
    <div>{id}</div>
  )
}
export default A
