import React from "react";
import styles from '../../styles/Forms/formCard.module.scss';

export default function FormCard(props){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                <a href="form" className={styles.link}>{props.title}</a>
            </h1>

            <div>
                {props.subTitle}
            </div>
        </div>
    )
}