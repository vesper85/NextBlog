import Head from 'next/head'
import Image from 'next/image'
import IntroModule from '../components/IntroModule'
import Loader from '../components/Loader'
import RecentPosts from '../components/RecentPosts'
import getBlogs from '../lib/getBlogs'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const {blogsFrontMatter} = props;
  //console.log(blogsFrontMatter);
  return (
    <main className={styles.outside_wrapper}>
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