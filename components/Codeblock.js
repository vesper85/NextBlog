import codeBlockStyles from '../styles/components.module.css'

const Codeblock = ()=>{
    return(
        <div>
            <code className={codeBlockStyles.codeBlock}>
                this is a code block
            </code>
        </div>
    )
}

export default Codeblock;