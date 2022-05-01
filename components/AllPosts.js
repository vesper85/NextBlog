import blogStyles from '../styles/Blog.module.css'
import { MDXRemote } from 'next-mdx-remote'
import Link from "next/link";
 

function AllPosts(props) {
  const {title, date, link} = props.post;
  //console.log(props.post);
  return (
    <div className='m-5 h-12'>     
      <div className={blogStyles.blog_wrapper}>
        <p className={blogStyles.timestamp}> 
          {/*Feb 28, 2022*/}
          {date}
        </p>
        <div className={blogStyles.blog_title}>
          {/*<MDXRemote {...title}/>*/}
          <Link href={`/blog/${link}`} ><a >{title}</a></Link>
        </div>
      </div>
    </div>
  )
}

export default AllPosts