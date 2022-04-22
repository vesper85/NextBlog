import blogStyles from '../../styles/Blog.module.css'
import BlogHeader from '../../components/BlogHeader'
import SearchBlog from '../../components/SearchBlog'
import AllPosts from '../../components/AllPosts'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import getBlogs from '../../lib/getBlogs'

export default function blog(props){
    console.log(props.blogs);
    return(
        <main className='h-screen flex flex-col items-center px-[2em] text-white'>
           <div className={blogStyles.inside_wrapper}>
               <BlogHeader/>
               <SearchBlog/>
               <p className="text-[2rem] m-5 leading-6 mt-10 text-theme-page-text-heading">All Posts</p>
               {
                   props.blogs.map((post)=>{
                       return (
                           <AllPosts key={post.date} title={post.title}/>
                       )
                   })
               }{' '}
               <h1></h1>
               
           </div>
        </main>
    )
}



export async function getStaticProps() {
    // MDX text - can be from a local file, database, anywhere
    //const fs = require('fs');
    //const path = `${process.cwd()}/posts`;

    //const posts = fs.readdirSync(path,'utf-8')
    //const Newposts = posts.map(path=>getBlogs(path))

    ////const source = 'Some **mdx** text, with a component'
    ////const mdxSource =  await serialize(source)
    const blogs = getBlogs();
    return { props: {blogs } }
  }