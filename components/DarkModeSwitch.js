
import styles from '../styles/components.module.css'

const DarkModeSwitch = () => {
  return (
    <div className="dark_toggle_switch">
        <label className={styles.switch_dark}>
        <input type="checkbox" />
        <span className={styles.slider_dark}></span>
        </label>
    </div>
  )
}

export default DarkModeSwitch 