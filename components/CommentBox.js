import { useTheme } from 'next-themes';
import {createRef, useRef, useEffect} from 'react'


const CommentBox = () => {
    const commentB = createRef();
    const {theme}  = useTheme();
    
    useEffect(() => {
        let utteranceTheme = theme == 'dark' ? 'github-dark':"github-light"
       
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin","anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("repo", "vincentntang/vincentntang.com-comments");
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute('theme',utteranceTheme)
        //console.log(scriptEl);
        commentB.current.replaceChildren(scriptEl);
        //commentB.current.appendChild(scriptEl)
    }, [theme])


 
    
  return (
    <div className="w-full">
        {
            <div ref={commentB}>

            </div>
        }
    </div>
  )
}

export default CommentBox

{/*<script src="https://utteranc.es/client.js"
        repo="vesper85/Blog_comments"
        issue-term="title"
        label="✌️"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>*/}