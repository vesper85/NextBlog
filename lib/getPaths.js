
const fs = require('fs');
const path = require('path')

//const getPaths = ()=>{
//    let paths= [];
//    const filesPath = `${process.cwd()}/posts`
//    const dir = fs.readdirSync(filesPath,'utf-8');
//    if(dir)
//    {
//        dir.forEach((file)=>{
//            if(path.extname(file) == ".mdx")
//            {
//                paths.push({
//                    params:{
//                        blog:file.replace("/\.mdx/","")
//                    }
//                });
//            }
//        })
//        return paths;
//    }
    
//    return null;
//}


const getPaths = () => {
    let paths = [];
  
    const files = fs.readdirSync(`${process.cwd()}/posts/`);
    if (files) {
      files.forEach((file) => {
        if (path.extname(file) == ".mdx") {
          paths.push({ params: { blog: file.replace(".mdx", "") } });
        }
      });
      return paths;
    } else {
      return null;
    }
  };

export default getPaths;