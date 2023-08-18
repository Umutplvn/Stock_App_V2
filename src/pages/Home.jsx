import Typography from "@mui/material/Typography";
import KpiCards from "../components/KpiCards";

const Home = () => {
  return (
    <div>
        <Typography color={"error"} component={"h3"} variant="h5">
        Dashboard
      </Typography>
      <KpiCards/>
    </div>
  )
}

export default Home