import styles from '../../styles/components.module.css'

const Blog_h1 = ({children}) => {
  return (
    <div className={styles.heading}>{children} </div>
  )
}

export default Blog_h1