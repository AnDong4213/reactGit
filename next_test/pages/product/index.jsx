import { useRouter } from 'next/router'
import Link from 'next/link'

const Product = () => {
  const router = useRouter()
  const a = '99'
  // const { pid } = router.query

  return <div>
    <p>Product: </p>
    <Link href={ '/product/a?id=' + a }>
      <a className='card'>
        <h3>Product/a</h3>
      </a>
    </Link>
  </div>
}

export default Product
