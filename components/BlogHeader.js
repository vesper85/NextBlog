import blogStyles from '../styles/Blog.module.css'


function BlogHeader() {
  return (
    <section className={blogStyles.BlogHeader}>
        <div className={blogStyles.header_title}>
            <span>Parikshit D.</span> Post&apos;s
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed architecto eius dolore excepturi! Quod cum in ipsam autem inventore. Tempore laborum aliquid cum dolores aspernatur deleniti labore hic fuga mollitia dignissimos cupiditate necessitatibus quia fugit sit, illum blanditiis rerum beatae magni ex eaque quae. Ea est ut officiis sint?
            </p>
        </div>
    </section>
  )
}

export default BlogHeader