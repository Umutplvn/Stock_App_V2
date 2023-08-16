import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { flex, modalStyle } from '../styles/globalStyles';
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import useStockData from '../hooks/useStockData';
import { useSelector } from 'react-redux';

const BrandModal = ({open, handleClose, info, setInfo}) => {
const {brands}=useSelector(state=>state.stock)
    const {postStockData, getStockData}=useStockData()

    const handleSubmit=(e)=>{
        e.preventDefault()
        postStockData("brands", info)
    }


    const handleChange =(e)=>{
        setInfo({...info, [e.target.name]:e.target.value})
        
    }


  return (    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
      <Box sx={flex} component={"form"} onSubmit={handleSubmit}>
          <TextField
            label="Brand Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name || ""}
            onChange={handleChange}
            required
          />

          <TextField
            label="Image Url"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={info?.image || ""}
            onChange={handleChange}
          />

          <Button type="submit" component="button" variant="contained" size="large">
            Save Brand
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default BrandModal