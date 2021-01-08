import React from 'react';
import css from './Repos.module.css';

const repos = (props) => (
    <div className={css.Repos}>
        <div className={css.Avatar} style={{backgroundImage:'url('+props.url+')'}} ></div>
        <div className={css.Infos}>
            <h2 className={css.Name}> {props.name} </h2>
            <p className={css.Desc}> {props.desc} </p>
            <div className={css.Rating}>
                <span className={css.Stars}>Stars: {props.stars}</span>
                <span className={css.Issues}>Issues: {props.issues}</span>
                <span className={css.Time}> Submited {props.time} days ago by {props.name} </span>
            </div>
        </div>
    </div>
)
export default repos;