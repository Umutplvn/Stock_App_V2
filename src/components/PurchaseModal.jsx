import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { flex, modalStyle } from "../styles/globalStyles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useSelector } from "react-redux";
import useStockData from "../hooks/useStockData";

const PurchaseModal = ({ open, handleClose, info, setInfo }) => {
  const { firms, brands, products } = useSelector((state) => state.stock);
  const { postStockData, putStockData } = useStockData();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      putStockData("purchases", info);
    } else {
      postStockData("purchases", info);
    }
    handleClose();
  };

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
            <InputLabel id="firms">Firm</InputLabel>
            <Select
              labelId="firms"
              id="firms"
              name="firm_id"
              value={info?.firm_id}
              label="firms"
              onChange={handleChange}
            >
              {firms?.map((firm) => {
                return (
                  <MenuItem key={firm.id} value={firm.id}>
                    {firm.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "90%" }}>
            <InputLabel id="brands">Brands</InputLabel>
            <Select
              labelId="brands"
              id="brands"
              value={info?.brand_id}
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
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: "90%" }}>
            <InputLabel id="products">Products</InputLabel>
            <Select
              labelId="products"
              id="products"
              value={info?.product_id}
              name="product_id"
              label="products"
              onChange={handleChange}
            >
              {products?.map((product) => {
                return (
                  <MenuItem key={product.id} value={product.id}>
                    {product.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            label="Quantity"
            id="quantity"
            name="quantity"
            value={info?.quantity}
            type="number"
            variant="outlined"
            InputProps={{ inputProps: { min: 0 } }}
            onChange={handleChange}
            required
            sx={{ width: "90%" }}
          />

          <TextField
            label="Price"
            name="price"
            id="price"
            value={info?.price}
            type="text"
            variant="outlined"
            required
            onChange={handleChange}
            sx={{ width: "90%" }}
          />

          <Button
            type="submit"
            component="button"
            variant="contained"
            size="large"
          >
            Add New Purchase
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PurchaseModal;
