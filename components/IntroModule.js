import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function IntroModule(){
    return(
        <section>
            
        {/* home page main title */}
        <div className={styles.main_title}>Hey  <span className={styles.waving_hand}>👋</span>, I&apos;m 
          <p className="text-theme-page-text-heading">Parikshit Deshmukh
          </p>
        </div>
        {/* animation */}

        {/* about me!! */}
        <div>
            <p>
                I&apos;m a Web Developer based in Jaipur, Rajasthan. I&apos;ve a deep passion for development, design, and engineering.
            </p>

            <p>
                I enjoy building products with code, designing, writing, and reading.
            </p>
        </div>
        <Link href='/aboutme'><a>Learn more about me!!</a></Link>
        <hr/>
        </section>
    )
}