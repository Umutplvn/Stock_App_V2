import { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import useStockData from "../hooks/useStockData"
import FirmModal from "../components/FirmModal"
import FirmCard from "../components/FirmCard"

const Firms = () => {

const { getStockData } = useStockData()
const { firms } = useSelector((state) => state.stock)

const [info, setInfo] = useState({
  name: "",
  phone: "",
  address: "",
  image: "",
})

const [open, setOpen] = useState(false)
const handleOpen = () => setOpen(true)
const handleClose = () => {
  setOpen(false)
  setInfo({ name: "", phone: "", address: "", image: "" })
}

useEffect(() => {
  // getFirms()
  getStockData("firms")
}, [])


  return (
    <div>
    <Typography variant="h4" color={"error"} mb={3}>
      Firms
    </Typography>
    <Button variant="contained" onClick={handleOpen}>
      NEW FIRM
    </Button>

    <FirmModal
      open={open}
      handleClose={handleClose}
      info={info}
      setInfo={setInfo}
    />

    <Grid container justifyContent={"center"} spacing={2}>
      {firms?.map((firm) => (
        <Grid item key={firm.id}>
          <FirmCard
            firm={firm}
            handleOpen={handleOpen}
            info={info}
            setInfo={setInfo}
          />
        </Grid>
      ))}
    </Grid>
  </div>
  )
}

export default Firms