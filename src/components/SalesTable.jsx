import { useSelector } from 'react-redux'
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from '@mui/icons-material/Edit';
import { btnStyle } from '../styles/globalStyles';
import useStockData from '../hooks/useStockData';


export default function SalesTable({info, setInfo, handleOpen}) {


    const { sales } = useSelector((state) => state.stock);
     const {deleteStockData}=useStockData()

     console.log(sales);
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
        field:"price",
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


      
      {
        field: "actions",
        headerName: "Operation",
        minWidth: 70,
        headerAlign: "center",
        align: "center",
        flex: 1,
        renderCell: ({
          id,
          row: { brand_id, product_id, quantity, price, firm_id },
        }) => [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            onClick={() => {
              handleOpen()
              setInfo({id, brand_id, product_id, quantity, price, firm_id })
            }}
            sx={btnStyle}
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteForeverIcon />}
            label="Delete"
            onClick={() => deleteStockData("sales", id)}
            sx={btnStyle}
          />,
        ],
      },
    ];
  
    return (
      <Box sx={{ height: 400, width: "100%", mt: "2rem" }}>
        <DataGrid
          rows={sales}
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