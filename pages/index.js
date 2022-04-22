import Head from 'next/head'
import Image from 'next/image'
import IntroModule from '../components/IntroModule'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.outside_wrapper}>
      <div className={styles.inside_wrapper}>
        <IntroModule/>
        <Loader false/>
        
      </div>
    </main>
  )
}
