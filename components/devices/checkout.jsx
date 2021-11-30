import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Checkout(){

    const arr = ["ItemOne", "ItemTwo"];

    return(

        <Paper
        
            style={{
                padding: 20,
                // backgroundColor: "blue",
                // border: "1px solid black"
            }}
        
        >
            <h1>Checkout</h1>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label={arr[0]} />
                <FormControlLabel  control={<Checkbox />} label={arr[1]} />
                <Button variant="contained">Submit</Button>
            </FormGroup>
        </Paper>

    )
}
