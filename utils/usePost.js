import { useRouter } from 'next/router'
import posts from 'utils/posts'

const usePost = () => {
  const router = useRouter()
  const currentPost = Object.values(posts)
    .flat()
    .find((post) => {
      return post.link === router.pathname.split('/')[2]
    })
  return currentPost
}

export default usePost
