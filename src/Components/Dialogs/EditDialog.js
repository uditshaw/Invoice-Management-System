import React,{ useState } from 'react'
import { Button , TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditForm = ({openEdit,invoice_currency,cust_payment_terms,changeHandler,handleCloseEdit}) => {
  
  return (
    <div>
        {/* Dialog Box for Edit Button */}
        <Dialog open={openEdit} onClose={handleCloseEdit} className="dialog">
            <DialogTitle sx={{
              backgroundColor: '#2A3E4C',
              color: 'white'
            }}>Edit</DialogTitle>
            <DialogContent sx={{
              backgroundColor: '#2A3E4C',
            }}>
                <TextField id="invoice_currency" name='invoice_currency'
                label="Invoice Currency" 
                variant="filled"
                value={invoice_currency}
                onChange={changeHandler}
                sx={{
                  backgroundColor: 'white',
                  margin: '5px'
                }}
                 />
                <TextField id="cust_payment_terms" name='cust_payment_terms'
                label="Customer Payment Terms" 
                variant="filled"
                value={cust_payment_terms}
                onChange={changeHandler}
                sx={{
                  backgroundColor: 'white',
                  margin: '5px'
                }}
                 />
            </DialogContent>
            <DialogActions sx={{
              backgroundColor: '#2A3E4C'
            }}>
                <Button onClick={() => handleCloseEdit(true)} sx={{
                  color: 'white',
                  border: '1px solid',
                  width: '100%',
                }}>
                Edit
                </Button>
                <Button onClick={() => handleCloseEdit(false)} sx={{
                  color: 'white',
                  border: '1px solid',
                  width: '100%',
                }}>
                Cancel
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default EditForm;