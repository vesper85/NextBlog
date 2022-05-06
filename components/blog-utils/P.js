

import styles from '../../styles/components.module.css'


const P = ({children}) => {
  return (
    <p className={styles.paragraph}>{children}</p>
  )
}

export default P