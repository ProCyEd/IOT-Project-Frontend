const data = require('./testData.json')
import React from 'react';
import Toggle from './controls/toggle'
import Mover from './controls/slider'
import ColorPicker from './controls/colorPicker'

function Builder({data}) {

    const device = data
    const controls = device.controls

    const form = controls.map((control, index) => {
        return determineControl(control, index)
    })

    form.unshift(<h1 key={0}>{device.name}</h1>)

    return form
}

function determineControl(control, index) {
    index = index + 1
    switch(control.type) {
        case 'switch': 
            return (<Toggle name={control.name} key={index}></Toggle>)
        case 'slider':
            return (<Mover name={control.name} key={index}></Mover>)
        default:
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