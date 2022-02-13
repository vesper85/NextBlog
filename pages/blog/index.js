import blogStyles from '../../styles/Blog.module.css'
import BlogHeader from '../../components/BlogHeader'
import SearchBlog from '../../components/SearchBlog'
import AllPosts from '../../components/AllPosts'

export default function blog(){
    return(
        <main className='h-screen flex flex-col items-center px-[2em] text-white'>
           <div className={blogStyles.inside_wrapper}>
               <BlogHeader/>
               <SearchBlog/>
               <p className="text-[2rem] m-5 leading-6 mt-10 text-theme-page-text-heading">All Posts</p>

               <AllPosts/>
               <AllPosts/>
               <AllPosts/>
               <AllPosts/>
           </div>
        </main>
    )
}