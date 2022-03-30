import React from "react";
import styles from '../../styles/device/devicePreview.module.scss';

export default function DevicePreview(props){
    const device = props.props;

    return(
        <div className={styles.container}>
            <div className={styles.name}>{device.name}</div>
            <div className={styles.description}>{device.description}</div>
        </div>
    )
}