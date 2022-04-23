import { serialize } from 'next-mdx-remote/serialize'
import getFileData from '../../lib/getFileData';
import matter from 'gray-matter';
import getPaths from '../../lib/getPaths';
import { MDXRemote } from 'next-mdx-remote';
import blogStyles from '../../styles/BlogPage.module.css'

import Codeblock from '../../components/Codeblock';
import "highlight.js/styles/mono-blue.css";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import Image from 'next/image';
import Blog_h1 from '../../components/blog_h1';


export default function TestPage(props) {
  const {mdxSource, matter} = props

 const components = {Codeblock, Image, Blog_h1}
  return (
    <div className={blogStyles.wrapper}>
      <div className={blogStyles.innerWrapper}>

          <div className={blogStyles.heading_wrapper}>
            <h1 className="uppercase">heading goes here</h1>
          </div>

          <div className={blogStyles.blog_info}>

              <div className={blogStyles.timestamp}>
                {matter.date}
              </div>

              <div className={blogStyles.other_info}>
                6 min to read
              </div>
          </div>
          <div className={blogStyles.blog_content}>
            <MDXRemote {...mdxSource} components={components} />
            
          </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const {blog} = context.params;
  const fileData = getFileData(blog);
  const {content, data} = matter(fileData);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { 
    props: { 
      mdxSource,
      matter:data
     } 
  }
}

export const getStaticPaths =  () => { 
    const paths = getPaths();
    //console.log(paths);
    return {
      paths,
      fallback: false
    };
  };