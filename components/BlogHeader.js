import blogStyles from '../styles/Blog.module.css'
import Highlight from './blog-utils/Highlight'



function BlogHeader() {
  return (
    <section className={blogStyles.BlogHeader}>
        <div className={blogStyles.header_title}>
            <span className="text-color-primary">Parikshit D.</span> Post&apos;s
        </div>
        <div>
            <p className="text-[1.05rem] leading-5">
            My interest is web development. I&apos;ve been working on it for several years now.
            Here are all of my most recent entries. More posts will be added shortly. I really hope you enjoy these.
          
            </p>
        </div>
    </section>
  )
}

export default BlogHeader