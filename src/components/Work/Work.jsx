import React from 'react';
import styles from './Work.module.css';

function Work(props) {
    return (
        <div className={styles.container}>
            <img src={props.work.image} width="30%" alt="screenshot"/>
            <div className={styles.text}>
                <h3>{props.work.title}</h3>
                <hr/>
                <p>{props.work.description}</p>
                <a className={`${styles.link} ${styles.linkLtr}`} href={props.work.link} target="_blank">{`Link to ${props.work.title}`}</a><br/>
                <a className={`${styles.link} ${styles.linkLtr}`} href={props.work.github} target="_blank">More Info</a>
            </div>
        </div>
    );
}

export default Work;