import React from 'react'
import { Button , TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteForm = ({openDelete,sl_no,handleCloseDelete}) => {

    return (
    <div>
        {/* Dialog Box for Delete Button */}
        <Dialog open={openDelete} onClose={handleCloseDelete} className="dialog">
            <DialogTitle sx={{
              backgroundColor: '#2A3E4C',
              color: 'white'
            }}>Delete Records ?</DialogTitle>
            <DialogContent sx={{
              backgroundColor: '#2A3E4C',
            }}>
                <DialogContentText sx={{
              color: 'white'
            }}>
                   Are you sure you want to delete these record[s] ?
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{
              backgroundColor: '#2A3E4C',
            }}>
                <Button onClick={() => handleCloseDelete(false)} sx={{
                  color: 'white',
                  border: '1px solid',
                  width: '100%',
                }}>
                Cancel
                </Button>
                <Button onClick={() => handleCloseDelete(true)} sx={{
                  color: 'white',
                  border: '1px solid',
                  width: '100%',
                }}>
                Delete
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default DeleteForm;