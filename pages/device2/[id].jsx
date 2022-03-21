import React from "react";
import ControlCard from "../../components/formBuilder/card";
import styles from '../../styles/formBuilder/form.module.scss';
import Button from '@mui/material/Button';
import Link  from 'next/link';

export const getStaticPaths = async () => {
    const result = await fetch('http://localhost:3000/api/data')
    const res = await result.json()

    const paths = res.map(i => ({
        params: { id: i.box.id.toString() }
    }))

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps(params) {
    const id = params.params.id

    const result = await fetch('http://localhost:3000/api/data', {
        credentials: 'include'
    })

    const res = await result.json()

    for(let i = 0; i < res.length; i++){
        if(id == res[i].box.id){
            return {
                props: res[i]
            }
        }
    }

    return {
        props: { res },
    }
}

export default function Form(props){

    const data = props.box
    const device =  props.box.device;

    return(
        <div className={styles.container}>
            <Link href={'/device2/'}>
                <Button className={styles.btn} variant="outlined">Back to IoT Box Galary</Button>
            </Link>
            <h1 className={styles.title}>
                {data.name} Controls
            </h1>

            {device.map((p) => (
                <div className={styles.deviceContainer}>
                    <h1 className={styles.deviceHeader}>{p.name}:</h1>
                    <div className={styles.controlBox}>
                        {p.controls.map((p) => (
                            <ControlCard control={p.type} name={p.name} options={p.options}></ControlCard>
                        ))}
                    </div>
                </div>
            ))}            
        </div>
    )
}
