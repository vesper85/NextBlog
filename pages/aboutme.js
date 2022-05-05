import Image from "next/image";
import profileImg from '../public/1.png'
import styles from '../styles/Home.module.css'

export default function aboutme(){
  return (
    <main className="h-screen flex flex-col items-center sm:px-4 md:px-[2rem] dark:text-white mt-20">
        <div className="flex justify-between w-3/5 ">
            {/* flex-1 grow */}
            <div className="w-3/4 self-center">
                I&apos;m a Web Developer based in pune, Maharashtra. 
                I&apos;ve a deep passion for developmentand engineering. 
                I enjoy building products with code, designing, writing, and reading.
             </div>
             {/* flex-1 */}
            <div className=" w-2/5"> 
            {/* height and widht with response */}
                <Image src={profileImg} className={styles.test} quality={100} alt="my profile image" layout="responsive" /> 
            </div>
        </div>
        <div className="my-12">
            some more info about me!!! 
        </div>
        <div className="my-12">
            i work with -- technology
        </div>
    </main>
  )
}
