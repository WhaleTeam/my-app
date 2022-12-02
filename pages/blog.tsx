type Post = {
  title: string
}

export default function Blog(posts: Post[]) {
  return (
    <ul>
      {
        posts.map((post) => (
          <li>{post.title}</li>
        ))
      }
    </ul>
  )
}

export async function getStaticProps() {
  
}