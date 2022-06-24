import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'



const getPosts = async () => {
  const res = await fetch(`https://${process.env.blogUrl}/ghost/api/content/posts?key=${process.env.contentApiKey}`).then((res) => res.json() )
  
  const titles =  res.posts.map(post => post.title)
 
  return titles
}

export const getStaticProps = async({ params }) => {
  const titles = await getPosts()
  
  return {
    props: {titles}
  } 
}

const Home = (props) =>  {
  const title = props.titles[0];
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Kayla Alewine&apos;s Blog</title>
        <meta name="description" content="a blog detailing a coding apprentice's journey through the Develop Carolina Program" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {title}
        </h1>
        <p>Choo choo</p>

        
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export default Home;

