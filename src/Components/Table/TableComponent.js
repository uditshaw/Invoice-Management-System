// <------------------------   IMPORTS      ------------------------>
import React, { useState, useEffect, useRef } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { ButtonGroup, Button, IconButton, TextField } from "@mui/material";
import {
  getData,
  addData,
  updateData,
  deleteData,
  advSearchData,
} from "../Dialogs/Data";

import AddForm from "../Dialogs/AddDialog";
import EditForm from "../Dialogs/EditDialog";
import DeleteForm from "../Dialogs/DeleteDialog";
import TablePagination from "@mui/material/TablePagination";
import AdvSearch from "../Dialogs/AdvSearch";
import RefreshIcon from "@mui/icons-material/Refresh";

// TableComponent functional Component begins
const TableComponent = () => {

  const initAdd = {
    sl_no: "",
    business_code: "",
    cust_number: "",
    clear_date: "",
    buisness_year: "",
    doc_id: "",
    posting_date: "",
    document_create_date: "",
    due_in_date: "",
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: "",
    cust_payment_terms: "",
    invoice_id: "",
  };

  const [tableData, setTableData] = useState([]);

  useEffect(async () => {
    setTableData(await getData());
  }, []);
  

  const [cust, setCust] = useState(initAdd);

  // Destructuring cust
  const {
    sl_no,
    business_code,
    cust_number,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id,
  } = cust;

  // Change handler to handle any changes in textfields.
  const changeHandler = (e) => {
    const { id, value } = e.target;
    setCust({ ...cust, [id]: value });
  };

  // Add-Dialog State
  const [openAdd, setOpenAdd] = useState(false);
  const addHandler = () => setOpenAdd(true);
  const handleCloseAdd = async (add) => {
    if (add) {
      window.location.reload(false);
      let response = await addData(cust);
    }
    setOpenAdd(false);
  };

  // Edit Dialog State
  const [openEdit, setOpenEdit] = useState(false);
  const editHandler = () => setOpenEdit(true);
  const handleCloseEdit = async (update) => {
    if (update) {
      window.location.reload(false);
      let response = await updateData(cust);
      console.log(response)
    }
    setOpenEdit(false);
  };

  // Delete Dialog State
  const [openDelete, setOpenDelete] = useState(false);
  const deleteHandler = () => setOpenDelete(true);
  const handleCloseDelete = async (del) => {
    if (del) {
      window.location.reload(false);
      let response = await deleteData(cust);
    }
    setOpenDelete(false);
  };

  // Reference and State for disabling Edit and Delete button
  const editDisable = useRef();
  const deleteDisable = useRef();
  const [checkList, setCheckList] = useState([]);
  const [deleteDisableBtn, setDeleteDisableBtn] = useState(true);
  const [editDisableBtn, setEditDisableBtn] = useState(true);
  const checkHandler = (e, sl_no) => {
    if (e.target.checked) {
      let editCust = tableData.filter((cust) => cust.sl_no == sl_no)[0];
      setCust(editCust);
    }
    let CheckedValue = e.target.value;
    if (checkList.includes(CheckedValue)) {
      const index = checkList.indexOf(CheckedValue);
      checkList.splice(index, 1);
    } else {
      checkList.push(CheckedValue);
    }
    console.log(checkList);
    if (checkList.length == 1) {
      setEditDisableBtn(false);
      editDisable.current.style.opacity = "1";
    } else {
      setEditDisableBtn(true);
      editDisable.current.style.opacity = "0.5";
    }
    if (checkList.length > 0) {
      setDeleteDisableBtn(false);
      deleteDisable.current.style.opacity = "1";
    } else {
      setDeleteDisableBtn(true);
      deleteDisable.current.style.opacity = "0.5";
    }
  };

  // AdvancedSearch Dialog State
  const [openAdvSearch, setOpenAdvSearch] = useState(false);
  const advSearchHandler = () => setOpenAdvSearch(true);

  // Handle Advanced Search
  const handleCloseAdvSearch = async (adv) => {
    
    if (adv) {
      let response = await advSearchData(cust);
      setTableData(response);
      console.log("Response : " + response);
    }    
    setOpenAdvSearch(false);
    
  }

  // Pagination of dataTable
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);    // useState for keeping Rows per page in pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  return (
    <div>
      {/* NAVBAR  */}
      <div
      // Topmost div of Table component to store button groups, Refresh button and textfield.
        style={{                  
          backgroundColor: "#283d4a",
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
          width: "100%",
          paddingTop: "15px",
          paddingBottom: "10px"
        }}
      >
        {/* 1st Button Group */}
        <ButtonGroup
          variant="outlined"
          aria-label="outlined primary button group"
          style={{ width: "420px" }}
        >
          <Button style={{ color: "white", border: "1px solid #B2FFFF" }}>
            PREDICT
          </Button>
          <Button style={{ color: "white", border: "1px solid #B2FFFF" }}>
            ANALYTICS VIEW
          </Button>
          <Button
            style={{ color: "white", border: "1px solid #B2FFFF" }}
            onClick={advSearchHandler}
          >
            ADVANCE SEARCH
          </Button>
        </ButtonGroup>

        {/* Refresh Button */}
        <Button variant="outlined" style={{ border: "1px solid #B2FFFF" }} onClick={() => window.location.reload(false)}>
          <RefreshIcon />
        </Button>

        {/* Search Customer ID textField */}
        <TextField
          id="serch_cust"
          label="Search Customer Id"
          variant="filled"
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            width: "280px",
          }}
          className="search"
        />

          {/* 2nd Button Group */}
        <ButtonGroup variant="outlined" aria-label="form">
          <Button
            style={{
              color: "#fff",
              width: "140px",
              border: "1px solid #B2FFFF",
            }}
            onClick={addHandler}
          >
            ADD
          </Button>
          <Button
            ref={editDisable}
            style={{
              opacity: "0.5",
              color: "#fff",
              width: "140px",
              border: "1px solid #B2FFFF",
            }}
            onClick={editHandler}
            disabled={editDisableBtn}
          >
            EDIT
          </Button>
          <Button
            ref={deleteDisable}
            style={{
              opacity: "0.5",
              color: "#fff",
              width: "140px",
              border: "1px solid #B2FFFF",
            }}
            onClick={deleteHandler}
            disabled={deleteDisableBtn}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </div>

      {/* ----------------------DIALOG COMPONENT CALLS ---------------------------------- */}
      
      <AddForm              // Add Dialog
        openAdd={openAdd}
        business_code={business_code}
        cust_number={cust_number}
        clear_date={clear_date}
        buisness_year={buisness_year}
        doc_id={doc_id}
        posting_date={posting_date}
        document_create_date={document_create_date}
        due_in_date={due_in_date}
        invoice_currency={invoice_currency}
        document_type={document_type}
        posting_id={posting_id}
        total_open_amount={total_open_amount}
        baseline_create_date={baseline_create_date}
        cust_payment_terms={cust_payment_terms}
        invoice_id={invoice_id}
        changeHandler={changeHandler}
        handleCloseAdd={handleCloseAdd}
      />

      <EditForm         // Edit Dialog
        openEdit={openEdit}
        invoice_currency={invoice_currency}
        cust_payment_terms={cust_payment_terms}
        changeHandler={changeHandler}
        handleCloseEdit={handleCloseEdit}
      />

      <DeleteForm         // Delete Dialog
        openDelete={openDelete}
        sl_no={sl_no}
        handleCloseDelete={handleCloseDelete}
      />

      <AdvSearch         // Advanced Search dialog
        openAdvSearch={openAdvSearch}
        doc_id={doc_id}
        invoice_id={invoice_id}
        cust_number={cust_number}
        buisness_year={buisness_year}
        changeHandler={changeHandler}
        handleCloseAdvSearch={handleCloseAdvSearch}
      />

      {/*------------------------     DataTable COMPONENT ---------------------------------- */}
      <TableContainer component={Paper}>
        <Table sx={{ backgroundColor: "#283d4a" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* Column Elements */}
              <TableCell style={{}}></TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Sl No</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Business Code</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Customer Number</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Clear Date</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Business Year</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Document Id</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Posting Date</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Document Create date</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Due in Date</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Invoice Currency</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Document Type</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Posting Id</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Total Open Amount</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Baseline Create Date</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Customer Payment Terms</TableCell>
              <TableCell style={{ color: "#fff" }} size='small'>Invoice Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((row) => (
              <TableRow
                key={row.sl_no}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* Row Elements */}
                <TableCell>
                  <Checkbox
                    name="Selected_row"
                    id={row.sl_no}
                    value={row.sl_no}
                    onClick={(e) => checkHandler(e, row.sl_no)}
                    style={{ color: "white" }}
                  />
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ color: "#ffffff" }}                  
                >
                  {row.sl_no}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.business_code}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.cust_number}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.clear_date}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.buisness_year}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.doc_id}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.posting_date}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.document_create_date}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.due_in_date}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.invoice_currency}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.document_type}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.posting_id}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.total_open_amount}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.baseline_create_date}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.cust_payment_terms}
                </TableCell>
                <TableCell style={{ minWidth: "150px", color: "#ffffff" }}>
                  {row.invoice_id}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <TablePagination
        sx={{ backgroundColor: "#283d4a", color: "#fff" }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableComponent;
