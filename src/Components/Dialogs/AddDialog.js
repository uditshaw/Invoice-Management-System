import React from 'react';
import { Button , TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

const AddForm = ({openAdd,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,
                  changeHandler,handleCloseAdd}) => {

  return (
      <div style={{backgroundColor: '#2A3E4C'}}>
        {/* Dialog Box for Add Button */}
        <Dialog className="dialog" maxWidth='md' open={openAdd} onClose={handleCloseAdd} >
            <DialogTitle className="dialogTitle" sx={{
              backgroundColor: '#2A3E4C',
              color: 'white'
            }}>Add</DialogTitle>
            <DialogContent className="dialogContent" sx={{
              backgroundColor: '#2A3E4C',
            }}>
             <Box>
               <div className="first" style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <TextField id="business_code" value={business_code} className="txt" label="Business Code" variant="filled" focused onChange={changeHandler} sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="cust_number" value={cust_number} className="txt" label="Customer Number" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="clear_date" value={clear_date} className="txt" label="Clear Date" type="date" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="buisness_year" value={buisness_year} className="txt" label="Business Year" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
               </div>
               <div className="second" style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <TextField id="doc_id" value={doc_id} className="txt" label="Document id" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="posting_date" value={posting_date} className="txt" label="Posting Date" type="date" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="document_create_date" value={document_create_date} className="txt" label="Document Create Date" type="date" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="due_in_date" value={due_in_date} className="txt" label="Due Date" type="date" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
               </div>
               <div className="third" style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <TextField id="invoice_currency" value={invoice_currency} className="txt" label="Invoice Currency" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="document_type" value={document_type} className="txt" label="Document type" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="posting_id" value={posting_id} className="txt" label="Posting id" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="total_open_amount" value={total_open_amount} className="txt" label="Total Open Amount" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
               </div>
               <div className="fourth" style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <TextField id="baseline_create_date" value={baseline_create_date} className="txt" label="Baseline Create Date" type="date" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="cust_payment_terms" value={cust_payment_terms} className="txt" label="Customer Payment Terms" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="invoice_id" value={invoice_id} className="txt" label="Invoice id" variant="filled" focused onChange={changeHandler}  sx={{backgroundColor: 'white',margin: '5px'}}/>
                </div>
             </Box>
            </DialogContent>
            <DialogActions className="dialogActions" sx={{
              backgroundColor: '#2A3E4C',
            }}>
                <Button onClick={() => handleCloseAdd(true)} sx={{
                  color: 'white',
                  border: '1px solid',
                  width: '100%',
                }}>
                Add
                </Button>
                <Button onClick={() => handleCloseAdd(false)} sx={{
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

export default AddForm;