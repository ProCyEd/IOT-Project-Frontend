import React from "react";
import styles from '../../styles/functions/controlCard.module.scss';
import Mover from "./slider";

export default function ControlSliderCard(props){

    // console.log(props)

    return(
        <div className={styles.container}>
            <Mover name={control.name} key={index}></Mover>
        </div>
    )
}
