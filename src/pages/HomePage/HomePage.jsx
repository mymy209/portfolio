import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
    return (
        <div>
            <h1 className={styles.title}>
                Hello, my name is Myra Yamazaki.<br/>
                I'm a full-stack software engineer based in Palmdale, CA. 
            </h1>
            <div className={styles.body}>
                <div className={styles.imageContainer}>
                    <img className={styles.pfp} src="https://i.imgur.com/le0f3IR.jpg" width="200px" alt="profile"/>
                    <div className={styles.box}/>
                    <div className={styles.contact}>
                        <img className={styles.emailIcon} src="https://i.imgur.com/xMwUsuL.png" width="80px" alt="emailIcon"></img>
                        <span className={styles.email}><p>myramaronhime@gmail.com</p></span>
                    </div>
                </div>
                <div className={styles.about}>
                    <h3>About</h3>
                    <hr/>
                    <p>I am a software developer eager to share her passion for technology-based entertainment such as games and animation. Sharing my unique perspective and ideas with others drives me to bring innovation to digital products. It’s this satisfying and rewarding process that makes me want to challenge myself and enables me to push my limits as a software developer to fill this world with joy!</p>
                </div>
                <div className={styles.skillsContainer}>
                    <h3>Skills</h3>
                    <hr/>
                    <ul>
                        <div className={styles.skills}>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>NodeJS</li>
                            <li>ReactJS</li>
                            <li>Materialize</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>PostgreSQL</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;