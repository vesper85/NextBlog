import { serialize } from 'next-mdx-remote/serialize'
import getFileData from '../../lib/getFileData';
import matter from 'gray-matter';
import getPaths from '../../lib/getPaths';
import { MDXRemote } from 'next-mdx-remote';
import blogStyles from '../../styles/slug.module.css'

import "highlight.js/styles/a11y-dark.css";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import allUtils from '../../components/allUtils';




export default function TestPage(props) {
  const {mdxSource, matter} = props

 const components = allUtils;
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