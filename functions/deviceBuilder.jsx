const data = require('./testData.json')
import React from 'react';
import Toggle from './controls/toggle'
import Mover from './controls/slider'
import ColorPicker from './controls/colorPicker'
import ControlToggleCard from './controls/deviceToggleCard';
import ControlSliderCard from './controls/deviceSliderCard';
import styles from '../styles/functions/deviceBuilder.module.scss';

function Builder({data}) {

    const device = data
    const controls = device.controls

    const form = controls.map((control, index) => {
        return(
            <div className={styles.container}>
                {determineControl(control, index)}
            </div>
        
        )
    })

    form.unshift(<h1 key={0}>{device.name}</h1>)

    return form
}

function determineControl(control, index) {
    index = index + 1
    switch(control.type) {
        case 'switch': 
            // console.log(control)
            return (<ControlToggleCard name={control.name} key={index}></ControlToggleCard>)
        case 'slider':
            return (<ControlSliderCard name={control.name} key={index}></ControlSliderCard>)
        default:
            console.error(content.name + " ---")
            console.error("Not a valid type")
            
    }
}


export default function DeviceBuilder() {

    const data = {
        "name": "Lightbulb 1",
        "controls": [
            {
                "name": "On/Off Switch",
                "type": "switch"
            } ,
            {
                "name": "Brightness",
                "type": "slider"
            },
            
        ]
    }

  return (
    <div>
        <Builder data={data} ></Builder>
        <ColorPicker />
    </div>
  );
}
