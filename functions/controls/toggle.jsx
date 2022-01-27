import React from 'react';
import Switch from'@mui/material/Switch'

export default function Toggle({name}) {
    return (
        <>
            <div>{name}</div>
            <Switch defaultChecked />
        </>
    )
}