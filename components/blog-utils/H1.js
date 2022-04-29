import styles from '../../styles/components.module.css'

const Blog_h1 = (props) => {
  return (
    <div className={styles.heading}>{props.text} </div>
  )
}

export default Blog_h1