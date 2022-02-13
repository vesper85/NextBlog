import blogStyles from '../styles/Blog.module.css'


function AllPosts() {
  return (
    <div className='m-5'>     
      <div className={blogStyles.blog_wrapper}>
        <p className={blogStyles.timestamp}>
          Feb 28, 2022
        </p>
        <h2 className={blogStyles.blog_title}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex excepturi voluptatum iusto esse, accusamus quasi!
        </h2>
      </div>
    </div>
  )
}

export default AllPosts