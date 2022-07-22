import Head from 'next/head'
import React from 'react'
import Header from '../components/header'
import Posts from '../components/posts'
import Footer from '../components/footer'



const getPosts = async () => {
  const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts?key=${process.env.KEY}`).then((res) => res.json() )

  const posts = res.items.map(post => post)
  return {posts}
}

export const getStaticProps = async({ params }) => {
  const posts = await getPosts()
  
  return {
    props: posts
  } 
}



const Home = (props) =>  {
  
  return (
    <div>
      <Head>
        <title>Kayla Alewine&apos;s Blog</title>
        <meta name="description" content="a blog detailing a coding apprentice's journey through the Develop Carolina Program" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;1,300&family=Ribeye+Marrow&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
       
      <main>
        {props.posts.map(post => {
         return (<Posts key={post.id} title={post.title} date={post.published} content={post.content} />) 
        })}

      </main>

      <Footer />
    </div>
  )
}

export default Home;

