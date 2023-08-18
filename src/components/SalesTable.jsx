// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
// import { useSelector } from "react-redux";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import useStockData from "../hooks/useStockData";

// export default function ProductTable() {
//   const { sales } = useSelector((state) => state.stock);
//   const { deleteStockData } = useStockData();
//   const columns = [
//     { field: "id", headerName: "#", width: 90 },
//     {
//       field: "category",
//       headerName: "Category",
//       headerAlign: "center",
//       align: "center",
//       flex: 0.5,
//       minWidth: 90,
//     },
//     {
//       field: "brand",
//       headerName: "Brand",
//       headerAlign: "center",
//       align: "center",
//       flex: 2,
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       headerAlign: "center",
//       align: "center",
//       flex: 2,
//     },
//     {
//       field: "stock",
//       headerName: "Stock",
//       type: "number",
//       headerAlign: "center",
//       align: "center",
//       flex: 2,
//     },
//     {
//         headerName: "Actions",

//       field: "actions",
//       type: "actions",
//       getActions: (params) => [
//         <GridActionsCellItem
//           icon={<DeleteForeverIcon />}
//           onClick={() => deleteStockData("products", params.id)}
//           label="Delete"
//         />,
//       ],
//     },
//   ];

//   return (
//     <Box sx={{ height: 400, width: "100%", mt: "2rem" }}>
//       <DataGrid
//         rows={sales}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//         slots={{ toolbar: GridToolbar }}
//       />
//     </Box>
//   );
// }
