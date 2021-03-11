import React from 'react';
import styles from './ResumePage.module.css';
import resume from '../../resume/Resume(2).pdf';

function ResumePage() {
    return (
        <div>
            <h1 className={styles.title}>Resume</h1>
            <div className={styles.container}>
                <img src="https://i.imgur.com/1FdDlTh.png" width="21%" />
                <div className={styles.download}>
                    <a href={resume} download="myamazaki-resume" >Download resume here</a>
                </div>
            </div>
        </div>
    );
}

export default ResumePage;