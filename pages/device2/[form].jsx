import React from "react";
import ControlCard from "../../components/formBuilder/card";
import styles from '../../styles/formBuilder/form.module.scss';


export default function Form(){

    const data = {
        "name": "Lightbulb 1",
        "controls": [
            {
                "name": "Drop Down Selector",
                "type": "select",
                "options": [
                    {
                        "option": "option 1"
                    },
                    {
                        "option": "option 2"
                    },
                    {
                        "option": "option 3"
                    },
                    {
                        "option": "option 4"
                    },
                ]
            },
            {
                "name": "Radio Buttons",
                "type": "radio",
                "options": [
                    {
                        "option": "option 1"
                    },
                    {
                        "option": "option 2"
                    },
                    {
                        "option": "option 3"
                    },
                    {
                        "option": "option 4"
                    },
                ]
            },
            {
                "name": "Brightness",
                "type": "slider"
            },
            {
                "name": "Radio Buttons",
                "type": "radio",
                "options": [
                    {
                        "option": "option 1"
                    },
                    {
                        "option": "option 2"
                    },
                    {
                        "option": "option 3"
                    },
                    {
                        "option": "option 4"
                    },
                ]
            },
            {
                "name": "Brightness",
                "type": "slider"
            },
            {
                "name": "On/Off Switch",
                "type": "switch"
            } ,
            {
                "name": "Switch",
                "type": "switch"
            },
            {
                "name": "Brightness",
                "type": "slider"
            },
            {
                "name": "On/Off Switch",
                "type": "switch"
            } ,
            {
                "name": "Brightness",
                "type": "slider"
            },
            {
                "name": "Switch",
                "type": "switch"
            },
            {
                "name": "Brightness",
                "type": "slider"
            },
        ]
    }

    // console.log(data.controls)

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                {data.name} Controls
            </h1>

            <div className={styles.controlBox}>
                {data.controls.map((p) => (
                    <ControlCard control={p.type} name={p.name} options={p.options}></ControlCard>
                ))}
            </div>
        </div>
    )
}
