import blogStyles from '../styles/Blog.module.css'
import { MDXRemote } from 'next-mdx-remote'


function AllPosts(props) {
  const {title} = props;
  return (
    <div className='m-5'>     
      <div className={blogStyles.blog_wrapper}>
        <p className={blogStyles.timestamp}> 
          Feb 28, 2022
        </p>
        <h2 className={blogStyles.blog_title}>
          {/*<MDXRemote {...title}/>*/}
          {title}
        </h2>
      </div>
    </div>
  )
}

export default AllPosts