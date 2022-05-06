import blogStyles from '../styles/Blog.module.css'


function BlogHeader() {
  return (
    <section className={blogStyles.BlogHeader}>
        <div className={blogStyles.header_title}>
            <span className="text-color-primary">Parikshit D.</span> Post&apos;s
        </div>
        <div>
            <p className="text-[1.05rem] leading-5">
            I am a Web Developer in Pune, Maharashtra. I have a strong interest in development and engineering.
          I enjoy coding products, creating, writing, and reading.
          Find out more about me!!
            </p>
        </div>
    </section>
  )
}

export default BlogHeader