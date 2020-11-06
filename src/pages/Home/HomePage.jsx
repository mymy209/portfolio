import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div >
            <h1 className={styles.title}>
            Hello, my name is Myra Yamazaki.<br/>
            I'm a full-stack software engineer based on Palmdale, CA. 
            </h1>
            <div className={styles.body}>
                <img src="https://i.imgur.com/VTk76ea.jpg" width="200px"/>
                <p>I am a software developer eager to share her passion for technology-based entertainment such as games and animation. Sharing my unique perspective and ideas with others drives me to bring innovation to digital products. It’s this satisfying and rewarding process that makes me want to challenge myself and enables me to push my limits as a software developer to fill this world with joy!</p>
            </div>
        </div>
    );
}

export default HomePage;