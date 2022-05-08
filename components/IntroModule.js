import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Highlight from './blog-utils/Highlight'

export default function IntroModule(){
    return(
        <div className={styles.IntroModuleWrapper}>
            <div className={styles.IntroModuleTitle}>
                {/* home page main title */}
                <div className={styles.main_title}>Hey  <span className={styles.waving_hand}>👋</span>, I&apos;m 
                <p className="text-color-primary">Parikshit D.
                </p> 
                </div>
        
                {/* about me!! */}
                <div>
                    <p>
                        I&apos;m a Web Developer based in pune, Maharashtra. I&apos;ve a deep passion for developmentand engineering.
                    </p>
        
                    <p>
                        I enjoy building products with code, designing, writing, and reading.
                    </p>
                </div>
                <Highlight>
                <Link href='/aboutme'><a>Learn more about me  <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg></a></Link>
                                    </Highlight>
            </div>
            <div className={styles.ImageContainer}>
                <Image src="/images/intro-module-illu.svg" width="100px" height="50px" layout='responsive' alt='an illustration' priority/>
            </div>
        </div>
       
    )
}