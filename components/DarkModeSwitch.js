
import { useTheme } from 'next-themes';
import { useRef, useEffect } from 'react';
import styles from '../styles/components.module.css'




const DarkModeSwitch = () => {

  let button  = useRef();
  const {theme , setTheme}  = useTheme();
  

  useEffect(() => {
    if(theme === 'dark')
    {
      button.current.checked = true;
    }
  }, [])
  
  const handleDarkMode = () => {
    //console.log(button.current.checked)
    console.log(theme);
    if (button.current.checked) {
      //dark mode is on
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }


  return (
    <div >
        <label className={styles.switch_dark}>
        <input ref={button} onClick={handleDarkMode} id="dark_toggle_switch" type="checkbox" />
        <span className={styles.slider_dark}></span>
        </label>
    </div>
  )
}

export default DarkModeSwitch 