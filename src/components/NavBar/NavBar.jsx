import React from 'react';
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

function NavBar() {
    return(
        <div className={styles.navWrapper}>
            <Link to='/' className={`${styles.nav} ${styles.navLtr}`}>Home</Link>
            <Link to='/resume' className={`${styles.nav} ${styles.navLtr}`}>Resume</Link>
            <Link to='/works' className={`${styles.nav} ${styles.navLtr}`}>Works</Link>
            <Link onClick={() => window.open('https://github.com/mymy209', '_blank')} className={`${styles.nav} ${styles.navLtr}`}>GitHub</Link>
            <Link onClick={() => window.open('https://www.linkedin.com/in/myra-yamazaki-17814b161/', '_blank')} className={`${styles.nav} ${styles.navLtr}`}>LinkedIn</Link>
        </div>
    )
}

export default NavBar;