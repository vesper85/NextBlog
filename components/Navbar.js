import Link from "next/link";
import styles from '../styles/Home.module.css'
import DarkModeSwitch from "./DarkModeSwitch";

 
export default function Navbar(){
    return(
    
        <nav className={styles.navbar} >
            <div className="grow min-w-[12rem] z-50">
                    {/* no space allowed between 'link' and 'a' tag */}
                    <Link href="/"><a className={styles.nav_link}>Home</a></Link>
                    <Link href='/blog'><a className={styles.nav_link}> Blog</a></Link>
                    <Link href='/aboutme'><a className={styles.nav_link}> Me</a></Link>
                    <Link href='/three'><a className={styles.nav_link}> Three</a></Link>
            </div>
            <DarkModeSwitch/>
        </nav>

    );
}