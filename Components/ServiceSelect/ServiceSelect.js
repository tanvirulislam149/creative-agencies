import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import { useUpdateOrderStatusMutation } from '../../Redux/Services/orders';
import styles from "./ServiceSelect.module.css"

const ServiceSelect = ({ data }) => {
  const [age, setAge] = useState(data.status);
  const [updateOrderStatus] = useUpdateOrderStatusMutation();


  const handleChange = (e) => {
    setAge(e.target.value);
    updateOrderStatus({ _id: data._id, status: e.target.value });
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 100, backgroundColor: "white", paddingLeft: "5px" }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          renderValue={(value) => <span className={value === "pending" ? styles.pending : value === "done" ? styles.done : styles.onGoing}>{value === "pending" ? "Pending" : value === "done" ? "Done" : "On going"}</span>}
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