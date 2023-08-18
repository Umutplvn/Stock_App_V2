import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flex, modalStyle } from "../styles/globalStyles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useSelector } from "react-redux";
import { useState } from "react";
import useStockData from "../hooks/useStockData";

const ProductModal = ({ open, handleClose }) => {
  const [info, setinfo] = useState("");
  const {postStockData}=useStockData()
  const { categories, brands } = useSelector((state) => state.stock);

  const handleSubmit = (e) => {
    e.preventDefault()
    postStockData("products", info)
    handleClose()
    
  };

  const handleChange = (e) => {
    setinfo({...info, [e.target.name]:e.target.value})
  };

  console.log(info);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box sx={flex} component={"form"} onSubmit={handleSubmit}>
          <FormControl sx={{ m: 1, minWidth: "90%" }}>
            <InputLabel id="categories">Categories</InputLabel>
            <Select
              labelId="categories"
              id="categories"
              label="Categories"
              name="category_id"
              onChange={handleChange}
            >
              {categories?.map((category) => {
                return (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "90%" }}>
            <InputLabel id="brands">Brands</InputLabel>
            <Select
              labelId="brands"
              id="brands"
              name="brand_id"
              label="Brands"
              onChange={handleChange}
            >
              {brands?.map((brand) => {
                return (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>

          <TextField
            
            label="Product Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            required
            onChange={handleChange}
          />

          <Button
            type="submit"
            component="button"
            variant="contained"
            size="large"
          >
            Add New Product
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductModal;
