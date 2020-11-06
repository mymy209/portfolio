import React from 'react';
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';

function NavBar() {
    return(
        <div className={styles.navWrapper}>
            <Link to='/' className={styles.nav}>Home</Link>
            <Link className={styles.nav}>Resume</Link>
            <Link className={styles.nav}>Works</Link>
            <Link className={styles.nav}>GitHub</Link>
            <Link className={styles.nav}>LinkedIn</Link>
        </div>
    )
}

export default NavBar;