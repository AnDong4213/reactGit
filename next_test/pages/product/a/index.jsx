import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Router from 'next/router'

// 简单说Router包含router
function ActiveLink({ children, href, kk }) {
  const router = useRouter()

  useEffect(() => {
    console.log(href)
  }, [])

  const style = {
    marginLeft: Number(kk),
    color: router.pathname === href ? 'red' : 'blue',
  }

  const handleClick = e => {
    e.preventDefault()
    // router.push(href)
    // router.back()
    router.push('/product/a?id=10', '/product/a?id=10', { shallow: true })
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}
const App = () => <ActiveLink href='/product' kk='20'>shallow: true</ActiveLink>
export default App 
