import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'

const ServiceSelect = ({ status }) => {
  const [age, setAge] = useState(status);


  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(age);

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 120, backgroundColor: "#f5f6fa", paddingLeft: "5px" }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"done"}>Done</MenuItem>
          <MenuItem value={"onGoing"}>On going</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default ServiceSelect