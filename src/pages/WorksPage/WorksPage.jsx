import React from 'react';
import styles from './WorksPage.module.css';
import Work from '../../components/Work/Work';

function WorksPage(props) {
    return (
        <>
            <h1 className={styles.title}>Works</h1>
            <div >
                {props.WORKS.map(work => (
                    <Work key={work.title} work={work}/>
                ))}
            </div>
        </>
    );
}

export default WorksPage;