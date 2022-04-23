
const fs = require('fs');

const getFileData  = (fileName)=>{
    const filePath = `${process.cwd()}/posts/${fileName}.mdx`;
    const fileData = fs.readFileSync(filePath, 'utf-8');
    if(fileData)
    {
        return fileData;
    }else{
        return null;
    }

};

export default getFileData;