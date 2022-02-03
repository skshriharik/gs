import * as React from 'react'
import {imageUrl} from "../Resources/Resources.js"
import { getString } from "../Util"
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dropdown from "./Dropdown";

import "../App.css"

function DriveForm() {
    const label = { inputProps : { 'aria-label' : 'Car'}}
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
     };

    return (
        <div className="registerForm">
            <form className="formElements">
                
                <img src={imageUrl()} alt=""/>
                <div className="driveTitle">Air Port Drive</div>
                <div className="driveInfo">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eius magni deserunt minus distinctio architecto facilis iusto. Natus cumque et fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos recusandae ea
                 eveniet nostrum iste!</div>
               
                 <div className="membersAttending">
                 {getString("members_attending")} 
                  <Dropdown/> </div>
           
                <FormGroup className="carBike">
                <FormControlLabel control={<Checkbox />} label="Car" />
                <FormControlLabel control={<Checkbox />} label="Bike" />
                <FormControlLabel control={<Checkbox />} label="Breakfast" />
                </FormGroup>

                
                <Button className="submitButton" variant=""> {getString("register")} </Button>
            </form>
        </div>
    )
}

export default DriveForm
