import { FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import SideNav from '../SideNav/SideNav';
import styles from "./ServiceList.module.css"
import { useGetAllOrdersQuery } from '../../Redux/Services/orders';
import Loading from "../Loading/Loading"
import ServiceSelect from '../ServiceSelect/ServiceSelect';

const drawerWidth = 200;

const ServiceList = () => {
  // const [age, setAge] = React.useState('');
  const { data, isLoading, error } = useGetAllOrdersQuery();
  if (isLoading) {
    return <Loading></Loading>
  }

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  // console.log(age);

  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <p className={styles.header}>All Orders List</p>
        <div className={styles.listContainer}>
          <table className={styles.tableCont}>
            <thead className={styles.tableHeaderCont}>
              <tr>
                <th className={`${styles.tableHeader} ${styles.firstHeader}`}>Name</th>
                <th className={styles.tableHeader}>Email Id</th>
                <th className={styles.tableHeader}>Service</th>
                <th className={`${styles.tableHeader} ${styles.detailsHeader}`}>Project Details</th>
                <th className={`${styles.tableHeader} ${styles.lastHeader}`}>Status</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {
                data.length ?
                  data.map(d =>
                    <tr key={d._id}>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.service}</td>
                      <td>{d.description}</td>
                      <td>
                        <ServiceSelect status={d.status} />
                        {/* <FormControl variant="standard" sx={{ minWidth: 120, backgroundColor: "#f5f6fa", paddingLeft: "5px" }}>
                          <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                          >
                            <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                            <MenuItem value={10}>Pending</MenuItem>
                            <MenuItem value={20}>Done</MenuItem>
                            <MenuItem value={30}>On Going</MenuItem>
                          </Select>
                        </FormControl> */}
                      </td>
                    </tr>
                  ) : <p>No Records Found.</p>
              }
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  )
}

export default ServiceList