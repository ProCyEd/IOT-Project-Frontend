import React from "react";
import ControlCard from "../../components/formBuilder/card";
import styles from '../../styles/formBuilder/form.module.scss';


export default function Form(){

    const data = [
        {
            "box": 
                {
                    "name": "Box 1",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor. Donec malesuada tempor faucibus. Curabitur eget mattis turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor. Donec malesuada tempor faucibus. Curabitur eget mattis turpis.",
                    "type": "1",
                    "id": "1",
                    "device": [
                        {
                            "name": "device1",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
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
                            ]
                        },
                        {
                            "name": "device2",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "Brightness",
                                    "type": "slider"
                                },
                                {
                                    "name": "Brightness",
                                    "type": "slider"
                                },
                            ]
                        },
                        {
                            "name": "device3",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "Brightness",
                                    "type": "slider"
                                },
                                {
                                    "name": "Brightness",
                                    "type": "slider"
                                },
                                {
                                    "name": "Brightness",
                                    "type": "slider"
                                },
                            ]
                        },
                    ]
                },
        },
        {
            "box": 
                {
                    "name": "Box 2",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor. Donec malesuada tempor faucibus. Curabitur eget mattis turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor. Donec malesuada tempor faucibus. Curabitur eget mattis turpis.",
                    "type": "2",
                    "id": "2",
                    "device": [
                        {
                            "name": "device1",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                }
                            ]
                        },
                        {
                            "name": "device2",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                }
                            ]
                        },
                        {
                            "name": "device3",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                }
                            ]
                        },
                    ]
                },
        },
        {
            "box": 
                {
                    "name": "Box 3",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor. Donec malesuada tempor faucibus. Curabitur eget mattis turpis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor. Donec malesuada tempor faucibus. Curabitur eget mattis turpis.",
                    "type": "not falid",
                    "id": "3",
                    "device": [
                        {
                            "name": "device1",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                }
                            ]
                        },
                        {
                            "name": "device2",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                }
                            ]
                        },
                        {
                            "name": "device3",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eu nisl ac tempor.",
                            "controls": [
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                },
                                {
                                    "name": "switch",
                                    "function": "this is what the control does"
                                }
                            ]
                        },
                    ]
                },
        }
    ]

    console.log(data[0].box.device[0].controls)

    const control = data[0].box.device[0].controls;
    const device = data[0].box.device;

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                {data.name} Controls
            </h1>

            {device.map((p) => (
                <div>
                    <h1>{p.name}</h1>
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
