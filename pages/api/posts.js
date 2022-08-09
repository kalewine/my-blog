
export const getPosts = async () => {
    const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.KEY}`).then((res) => res.json() )
  
    const posts = res.items.map(post => post)
    return {posts}
  }