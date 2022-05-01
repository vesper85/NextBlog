import blogStyles from '../../styles/Blog.module.css'
import BlogHeader from '../../components/BlogHeader'
import SearchBlog from '../../components/SearchBlog'
import AllPosts from '../../components/AllPosts'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import getBlogs from '../../lib/getBlogs'

export default function blog(props){
    //console.log(props.blogs);
    return(
        <main className='h-screen flex flex-col items-center sm:px-4 md:px-[2rem] dark:text-white'>
           <div className={blogStyles.inside_wrapper}>
               <BlogHeader/>
               <SearchBlog/>
               <p className=" text-2xl md:text-[2rem] m-5 leading-6 mt-10 text-theme-page-text-heading mb-10">All Posts</p>
               {
                   props.blogs.map((post)=>{
                       return (
                           <AllPosts key={post.date} post={post} />
                       )
                   })
               }{' '}
               
           </div>
        </main>
    )
}



export async function getStaticProps() {
    const blogs = getBlogs();
    return { props: {blogs } }
  }