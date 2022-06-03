import React from 'react';
import { Button ,TextField } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

const AdvSearch = ({openAdvSearch, doc_id, invoice_id, cust_number, buisness_year, changeHandler, handleCloseAdvSearch}) => {
  return (
    <div>
    {/* Dialog Box for Advanced Search Button */}
    <Dialog className="dialog" maxWidth='md' open={openAdvSearch} onClose={handleCloseAdvSearch} >
            <DialogTitle className="dialogTitle" sx={{
              backgroundColor: '#2A3E4C',
              color: 'white'
            }}>Advance Search</DialogTitle>
            <DialogContent className="dialogContent" sx={{
              backgroundColor: '#2A3E4C',
            }}>
             <Box>
               <div className="first">
                <TextField id="doc_id" value={doc_id} className="txt" label="Document id" variant="filled" focused onChange={changeHandler} sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="invoice_id" value={invoice_id} className="txt" label="Invoice id" variant="filled" focused onChange={changeHandler} sx={{backgroundColor: 'white',margin: '5px'}}/>
                </div>
                <div className="second">
                <TextField id="cust_number" value={cust_number} className="txt" label="Customer Number" variant="filled" focused onChange={changeHandler} sx={{backgroundColor: 'white',margin: '5px'}}/>
                <TextField id="buisness_year" value={buisness_year} className="txt" label="Business Year" variant="filled" focused onChange={changeHandler} sx={{backgroundColor: 'white',margin: '5px'}}/>
                </div>
             </Box>
            </DialogContent>
            <DialogActions className="dialogActions" sx={{
              backgroundColor: '#2A3E4C'
            }}>
                <Button onClick={() => handleCloseAdvSearch(true)} sx={{
                  color: 'white',
                  border: '1px solid',
                  width: '100%',
                }}>
                Search
                </Button>
                <Button onClick={() => handleCloseAdvSearch(false)} sx={{
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

export default AdvSearch