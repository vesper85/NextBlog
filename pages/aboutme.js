import Image from "next/image";
import profileImg from '../public/1.png'
import styles from '../styles/Home.module.css'
import Highlight from "../components/blog-utils/Highlight";

export default function aboutme(){
  return (
    <main className="h-screen flex flex-col items-center sm:px-4 md:px-[2rem] dark:text-white mt-10 sm:mt-20">
        <div className="flex flex-col-reverse sm:flex-row justify-between md:w-4/5 text-[1rem] ">
            {/* flex-1 grow */}
            <div className="flex-1 grow self-center mt-10 text-[1.05rem] sm:mt-0">
                <div className="text-center sm:text-left text-[3rem]  lg:text-[10rem] dark:text-color-tertiary text-color-primary stroke ">ME !!</div>
                I&apos;m  <Highlight>Parikshit Deshmukh</Highlight>, a full stack JavaScript developer from  Pune, Maharashtra. 
                I am currently a student at VIT pune, pursuing my Bachelors in Computer Science.
                I am a self-taught programmer, always looking for new challenges to learn from.
                I love to learn new things and I am always trying to improve my skills.

             </div>
             
             {/* flex-1 */}
            <div className="flex-1 max-w-[500px]"> 
            {/* height and widht with response */}
                <Image src={profileImg} quality={100} className="rounded-2xl overflow-hidden"  alt="my profile image" objectFit="cover" layout="responsive" priority /> 
            </div>
        </div>
        <div className="my-12 w-full md:w-4/5 text-[1.05rem]">
            I love creating things that make people&apos;s life easier. I got
            my start for web development in 2020.<br/> I have been learning and
            growing my skills everyday.  webdevelopment is my passion and I will keep on learning and growing.
        </div>
        <div className="my-12 w-full md:w-4/5">
            <div>
            {/*<svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" color="hsl(0, 0%, 7%)" data-testid="tech-icon" aria-label="Next.js logo"  height="32px" width="32px" xmlns="http://www.w3.org/2000/svg"><title>Next.js logo</title><title></title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path></svg>*/}
            </div>
        </div>
    </main>
  )
}
