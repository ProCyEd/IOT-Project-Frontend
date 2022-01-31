import React from "react";
import styles from '../../styles/device/box.module.scss';
import Image from 'next/image';
import {AiFillSlackSquare} from 'react-icons/ai';
import DevicePreview from "./devicePreview";

export default function IoTBox(props){
    const box = props.props.box;
    const devices = box.device;

    return(
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <AiFillSlackSquare className={styles.icon}></AiFillSlackSquare>
                <h1 className={styles.title}>{box.name}</h1>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.descriptionTitle}>Description</h1>
                    <p className={styles.description}>
                        {box.description}
                    </p>
                </div>
                <div className={styles.deviceContainer}>
                    <h1 className={styles.deviceTitle}>Devices</h1>
                    <div className={styles.nestedDevice}>
                        {devices.map((p) => (
                            <DevicePreview props={p}></DevicePreview>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
