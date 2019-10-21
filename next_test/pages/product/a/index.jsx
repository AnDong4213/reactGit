import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Aa = () => {
  const router = useRouter()

  useEffect(() => {
    console.log(router.query)
  }, [])

  return <div>
    <h1>我是A页面</h1>
  </div>
}

export default Aa
