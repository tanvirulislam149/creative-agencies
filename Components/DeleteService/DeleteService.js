import React from 'react'
import styles from "./DeleteService.module.css"
import { useGetCoursesQuery } from '../../Redux/Services/courses';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "#fbd062",
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const DeleteServiceComponent = () => {

  const { data: courses, error, isLoading } = useGetCoursesQuery();


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  return (
    <div className={styles.boxContent}>
      <p className={styles.title}>Delete Service</p>
      <div className={styles.listContainer}>
        {
          courses?.length ?
            <table className={styles.tableCont}>
              <thead className={styles.tableHeaderCont}>
                <tr>
                  <th className={`${styles.tableHeader} ${styles.firstHeader}`}>Icon</th>
                  <th className={styles.tableHeader}>Name</th>
                  <th className={styles.tableHeader}>Button</th>
                </tr>
              </thead>
              <tbody className={styles.tbody}>
                {
                  courses?.map(d =>
                    <tr key={d._id}>
                      <td>
                        <Image
                          src={d.icon}
                          width={50}
                          height={50}
                          alt="Picture of the icon"
                        />
                      </td>
                      <td>{d.title}</td>
                      <td>
                        <button onClick={handleOpen} className={styles.deleteBtn}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table> :
            <div className={styles.noService}>
              <p>No Service Found.</p>
            </div>
        }
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p className={styles.confirmText}>Are you sure you want to delete?</p>
            <div className={styles.btnCont}>
              <button onClick={handleClose} className={styles.modalDeleteBtn}>
                Yes
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default DeleteServiceComponent