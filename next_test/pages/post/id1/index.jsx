import { useRouter } from 'next/router'

const Id1 = () => {
  const router = useRouter()
  console.log(router)

  return <p>Id1: </p>
}

export default Id1