import React from "react";
import styles from '../../styles/device/box.module.scss';
import Image from 'next/image';
import {AiFillSlackSquare, AiFillDropboxSquare, AiFillFire} from 'react-icons/ai';
import DevicePreview from "./devicePreview";


function Icon(props){
    const type = props.props;

    if(type == 1){
        return(
            <AiFillSlackSquare className={styles.icon}></AiFillSlackSquare>
        )
    }else if(type == 2){
        return(
            <AiFillDropboxSquare className={styles.icon}></AiFillDropboxSquare>
        )
    }else{
        return(
            <AiFillFire className={styles.icon}></AiFillFire>
        )
    }
}


export default function IoTBox(props){
    const box = props.props.box;
    const devices = box.device;
    // console.log(box.type);

    return(
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <Icon props={box.type}></Icon>
                <h1 className={styles.title}>{box.name}</h1>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.descriptionContainer}>
                    <h1 className={styles.descriptionTitle}>Description</h1>
                    <p className={styles.description}>
                        {box.description}
                    </p>
                </div>
                <div className={styles.split}>

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
