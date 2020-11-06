import React from 'react';
import styles from './Work.module.css';

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    next = () => {
        if (this.state.index === this.props.work.image.length-1) {
            this.setState({index: 0});
        } else {
            this.setState({index: this.state.index + 1});
        }
    }

    previous = () => {
        if (this.state.index === 0) {
            this.setState({index: this.props.work.image.length-1});
        } else {
            this.setState({index: this.state.index - 1});
        }
    }

    render () {
        console.log(this.props.work.image);
        return (
            <div className={styles.container}>
                <button onClick={this.previous}><img src="https://i.imgur.com/9qRD2PJ.png" width="100%"/></button>
                <img src={this.props.work.image[this.state.index]} width="30%" alt="screenshot"/>
                <button onClick={this.next}><img src="https://i.imgur.com/ry6ttGZ.png" width="100%"/></button>
                <div className={styles.text}>
                    <h3>{this.props.work.title}</h3>
                    <hr/>
                    <p>{this.props.work.description}</p>
                    <a className={`${styles.link} ${styles.linkLtr}`} href={this.props.work.link} target="_blank">{`Link to ${this.props.work.title}`}</a><br/>
                    <a className={`${styles.link} ${styles.linkLtr}`} href={this.props.work.github} target="_blank">More Info</a>
                </div>
            </div>
        );
    }
}

export default Work;