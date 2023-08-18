import { useSelector } from 'react-redux'
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


export default function PurchaseTable() {
    const { purchases } = useSelector((state) => state.stock);

    console.log("purchases",purchases);

    const columns = [
      { field: "id", headerName: "#", width: 90 },
      {
        field: "createds",
        headerName: "Date",
        headerAlign: "center",
        align: "center",
        flex: 0.5,
        minWidth: 90,
      },
      {
        field: "firm",
        headerName: "Firm",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },
      {
        field: "brand",
        headerName: "Brand Name",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },
      {
        field: "product",
        headerName: "Product Name",
        type: "number",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },

      {
        field: "quantity",
        headerName: "Quantity",
        type: "number",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },
      {
        field: "price",
        headerName: "Amount",
        type: "number",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },
      {
        field: "price_total",
        headerName: "Total Amount",
        type: "number",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },


    //   {
    //       headerName: "Actions",
  
    //     field: "actions",
    //     type: "actions",
    //     getActions: (params) => [
    //       <GridActionsCellItem
    //         icon={<DeleteForeverIcon />}
    //         label="Delete"
    //       />,
    //     ],
    //   },
    ];
  
    return (
      <Box sx={{ height: 400, width: "100%", mt: "2rem" }}>
        <DataGrid
          rows={purchases}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    );
  }