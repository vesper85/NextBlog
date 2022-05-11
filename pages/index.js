import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import IntroModule from '../components/IntroModule'
import Loader from '../components/Loader'
import RecentPosts from '../components/RecentPosts'
import getBlogs from '../lib/getBlogs'
import styles from '../styles/Home.module.css'
//import Head from 'next/head'

export default function Home(props) {
  const {blogsFrontMatter} = props;
  //console.log(blogsFrontMatter);
  
  
  
  return (
    <main className={styles.outside_wrapper}>
      <Head>
        <title>
          Parikshit Deshmukh
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={styles.inside_wrapper}>
        <IntroModule/>
        {/*<Loader show={true} />*/}
        <RecentPosts blogsFrontMatter={blogsFrontMatter} />
      </div>
    </main>
  )
}


export function getStaticProps()
{
  const blogsFrontMatter = getBlogs();
  return{
    props:{
      blogsFrontMatter
    }
  }
}