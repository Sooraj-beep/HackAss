import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Experience() {
  const [experience, setExperience] = React.useState('');

  const handleChange = (event) => {
    setExperience(event.target.value);
    console.log("haha");

  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Experience</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={experience}
          label="Experience"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"1"}>0-1</MenuItem>
          <MenuItem value={"2"}>1-2</MenuItem>
          <MenuItem value={"3+"}>3+</MenuItem>
        </Select>
        <FormHelperText>years of coding experience</FormHelperText>
      </FormControl>
    </div>
  );
}