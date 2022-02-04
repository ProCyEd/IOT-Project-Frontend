import React from 'react';
import styles from '../../styles/formBuilder/card.module.scss';
import Switch from './controls/switch';
import ContinuousSlider from './controls/slider';
import BasicSelect from './controls/select';
import RadioButtonsGroup from './controls/radio';

function determineControl(control, name, options) {
    switch(control) {
        case 'switch': 
             return ( <Switch name={name}></Switch> )
        case 'slider':
            return (<ContinuousSlider name={name}></ContinuousSlider>)
        case 'select':
            return (<BasicSelect name={name} options={options}></BasicSelect>)
        case 'radio':
            return (<RadioButtonsGroup name={name} options={options}></RadioButtonsGroup>)
        default:
            console.error("Not a valid type")
     }
}

export default function ControlCard({control, name, options}){

    return(
        <div className={styles.container}>
            {determineControl(control, name, options)}
        </div>
    )
}
