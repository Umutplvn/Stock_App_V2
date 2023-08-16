import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { CardHeader } from "@mui/material"

const BrandCard = ({brand}) => {
  return (
    <Card
    elevation={10}
    sx={{
      p: 2,
      width: "300px",
      height: "400px",
      display:"flex",
      flexDirection:"column"
          
    }}
  >
    <CardHeader title={brand?.name} />

    <CardMedia
      image={brand?.image}
      sx={{ p: 1, objectFit: "contain", height: "250px" }}
      component="img"
      alt="brand-img"
    />

    <CardActions>
      <EditIcon />
      <DeleteOutlineIcon/>
    </CardActions>
  </Card>  )
}

export default BrandCard