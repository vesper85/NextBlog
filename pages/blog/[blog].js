import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import fs from 'fs';
import path from 'path';

//import Test from '../components/test'

//const components = { Test }

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} />
    </div>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await serialize(source)
  return { 
    props: { source: mdxSource } 
  }
}

export const getStaticPaths =  () => {
    
    const posts = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");
    return {
      paths: posts.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, '')
        }
      })),
      fallback: false
    };

    
  };