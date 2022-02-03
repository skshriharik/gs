import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const getMenuItems = () => {
      let arr = [];
      for(let i = 1; i < 6 ; i++)
        arr.push(<MenuItem className="menuItem" value={i}> {i} </MenuItem>)
    return arr;
  }

  return (
    <Box variant="standard" sx={{ m : 1 ,minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select className="dropdown"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            {getMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
}
