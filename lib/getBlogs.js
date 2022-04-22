
//const fs = require('fs')
//import { serialize } from 'next-mdx-remote/serialize'

//const getBlogs = async(blog)=>{
//    const path = `${process.cwd()}/posts/${blog}`;
//    const content = fs.readFileSync(path, 'utf-8');
//    const mdxSource =  await serialize(content,{ parseFrontmatter: true });
//    return mdxSource
//}

//export default getBlogs;

const fs = require("fs");
const path = require("path");
import matter from "gray-matter";

const getBlogs = () => {
  let blogs = [];
  const files = fs.readdirSync(`${process.cwd()}/posts`);

  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == ".mdx") {
        const source = fs.readFileSync(`${process.cwd()}/posts/${file}`, {
          encoding: "utf-8",
        });
        const { content, data } = matter(source);
        blogs.push(data);
      }
    });
    return blogs;
  } else {
    return null;
  }
};

export default getBlogs;