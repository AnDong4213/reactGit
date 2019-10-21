import { useRouter } from 'next/router'
import Link from 'next/link'

const Post = () => {
  const router = useRouter()
  console.log(router)
  const { pid } = router.query

  return <div>
    <p>Post: {pid}</p>
    <Link href='/'>
      <a className='card'>
        <h3>Home</h3>
      </a>
    </Link>
  </div>
}

export default Post