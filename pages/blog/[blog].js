import { serialize } from 'next-mdx-remote/serialize'
import getFileData from '../../lib/getFileData';
import matter from 'gray-matter';
import getPaths from '../../lib/getPaths';
import { MDXRemote } from 'next-mdx-remote';
import blogStyles from '../../styles/slug.module.css'

import "highlight.js/styles/base16/dracula.css";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import allUtils from '../../components/allUtils';
import { useTheme } from 'next-themes';
import ViewCount from '../../components/ViewCount';
//import CommentBox from '../../components/CommentBox';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import readingTime from 'reading-time';

const CommentBox = dynamic(
  ()=>import('../../components/CommentBox'),{
    loading:()=>(<p>......</p>)
  }

)




export default function TestPage(props) {
  const {mdxSource, matter} = props
  //console.log(props);
 const stats = readingTime(mdxSource);

 const components = allUtils;
  return (
    <div className={blogStyles.wrapper}>

      <div className={blogStyles.innerWrapper}>

          <div className={blogStyles.heading_wrapper}>
            <h1 className="uppercase"> {matter.title} </h1>
          </div>

          <div className={blogStyles.blog_info}>

              <div className={blogStyles.timestamp}>
                {matter.date}
              </div>

              <div className={blogStyles.other_info}>
                <ViewCount slug={matter.slug} isblog={true} />
                {stats.text === '0 min read' ? '. 1 min read' : <span>{stats.text}</span>}
              </div>
          </div>
          <div className={blogStyles.blog_content}>
            <MDXRemote {...mdxSource} components={components} />  
          </div>
         
          <CommentBox/>
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

