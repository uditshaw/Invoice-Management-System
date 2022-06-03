import axios from "axios";

// <----------- Axios connections with the Servlets ---------------->

// FetchData
export const getData = async () => {
    let response = await axios.get("http://localhost:8080/hrc-new/Fetch");
    return response.data;
}


// Advanced Search Servlet
export const advSearchData = async ({doc_id,invoice_id,cust_number,buisness_year}) => {
    let data = "doc_id="+doc_id+"&invoice_id="+invoice_id+"&cust_number="+cust_number+"&buisness_year="+buisness_year;
    let response = await axios.get("http://localhost:8080/hrc-new/AdvSearch?"+data);
    console.log("Response: " + response.data)
    return response.data;
}


// Add Servlet
export const addData = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) => {
    let data1 = "business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="+buisness_year+"&doc_id="+doc_id+"&posting_date="+posting_date;
    let data2 = "&document_create_date="+document_create_date+"&due_in_date="+due_in_date+"&invoice_currency="+invoice_currency+"&document_type="+document_type+"&posting_id="+posting_id;
    let data3 = "&total_open_amount="+total_open_amount+"&baseline_create_date="+baseline_create_date+"&cust_payment_terms="+cust_payment_terms+"&invoice_id="+invoice_id;
    let response = await axios.get("http://localhost:8080/hrc-new/Add?"+data1+data2+data3);
    return response.data;
}

// Edit Servlet
export const updateData =async ({sl_no,invoice_currency,cust_payment_terms}) => {
    let data = "sl_no="+sl_no+"&invoice_currency="+invoice_currency+"&cust_payment_terms="+cust_payment_terms;
    let response = await axios.get("http://localhost:8080/hrc-new/Edit?"+data);
    return response.data;
}

// Delete Servlet
export const deleteData =async ({sl_no}) => {
    let resp = false;
    let data = "sl_no="+sl_no;
    let response = await axios.get("http://localhost:8080/hrc-new/Delete?"+data);
    if(response.data) {
        resp=true;
    }
    return resp;
}

