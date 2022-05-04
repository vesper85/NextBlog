
import { useState, useEffect } from 'react'
import blogStyles from '../../styles/Blog.module.css'
import BlogHeader from '../../components/BlogHeader'
import SearchBlog from '../../components/SearchBlog'
import AllPosts from '../../components/AllPosts'
import getBlogs from '../../lib/getBlogs'

export default function BlogIndex(props){

    console.log(props.blogs);
    const [searchedString, setsearchedString] = useState("");
    const [blogsArray, setblogsArray] = useState(props.blogs)
    //const [newBlogsArray, setnewBlogsArray] = useState(props.blogs)

    useEffect(() => {
        
            let NewArray = props.blogs.filter((blog)=>{
                    const blogTitle = blog.title.toLowerCase();
                    return(
                        blogTitle.includes(searchedString.toLowerCase())
                    )
                })
            setblogsArray(NewArray)

    }, [searchedString])
    
    return(
        <main className='h-screen flex flex-col items-center sm:px-4 md:px-[2rem] dark:text-white'>
           <div className={blogStyles.inside_wrapper}>
               <BlogHeader/>
               <SearchBlog searchedString={searchedString} setsearchedString={setsearchedString} />
               <p className=" text-2xl md:text-[2rem] m-5 leading-6 mt-10 text-theme-page-text-heading mb-10">All Posts</p>
               {
                   blogsArray.map((post)=>{
                       return (
                           <AllPosts key={post.date} post={post} />
                       )
                   })
               }
               
           </div>
        </main>
    )
}



export async function getStaticProps() {
    const blogs = getBlogs();
    return { props: {blogs } }
  }