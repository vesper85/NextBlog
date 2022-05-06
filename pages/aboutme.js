import Image from "next/image";
import profileImg from '../public/1.png'
import styles from '../styles/Home.module.css'

export default function aboutme(){
  return (
    <main className="h-screen flex flex-col items-center sm:px-4 md:px-[2rem] dark:text-white mt-20">
        <div className="flex flex-col-reverse sm:flex-row justify-between md:w-3/5 text-[1rem] ">
            {/* flex-1 grow */}
            <div className="flex-1 grow self-center mt-10 sm:mt-0">
                I&apos;m a Web Developer based in pune, Maharashtra. 
                I&apos;ve a deep passion for developmentand engineering. 
                I enjoy building products with code, designing, writing, and reading.
             </div>
             {/* flex-1 */}
            <div className=" flex-1"> 
            {/* height and widht with response */}
                <Image src={profileImg} quality={100} className={styles.test}  alt="my profile image" layout="responsive" priority /> 
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
