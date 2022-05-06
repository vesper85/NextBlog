import blogStyles from '../styles/Blog.module.css'


function BlogHeader() {
  return (
    <section className={blogStyles.BlogHeader}>
        <div className={blogStyles.header_title}>
            <span className="text-color-primary">Parikshit D.</span> Post&apos;s
        </div>
        <div>
            <p className="text-[1.05rem] leading-5">
              WebDevelopment is my passion. I have been working on it for the last few years.
              Here are all my lastest posts. I will be adding more posts soon. I hope you like them.
            </p>
        </div>
    </section>
  )
}

export default BlogHeader