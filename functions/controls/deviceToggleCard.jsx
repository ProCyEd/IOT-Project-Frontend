import React from "react";
import styles from '../../styles/functions/controlCard.module.scss';
import Toggle from "./toggle";

export default function ControlToggleCard(props){

    // console.log(props)

    return(
        <div className={styles.container}>
            <Toggle name={props.name}></Toggle>
        </div>
    )
}
