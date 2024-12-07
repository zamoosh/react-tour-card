import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import TourCard from "./components/TourCardComponent/TourCard.tsx";
import { Isfahan, Tehran, Qom, Mashhad, Shiraz } from "./assets/img/city/all";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <Container fixed>
        <Grid sx={{ mt: 2 }} container spacing={2}>
          <Grid size={12} textAlign="center">
            <Typography sx={{ fontWeight: "bold" }} variant="h3" component="h3">
              Most Liked Tours
            </Typography>
          </Grid>
          <TourCard
            duration={5}
            review={0}
            price={12}
            imgUrl={Mashhad}
            tourText="Mashhad"
            rate={3}
          ></TourCard>
          <TourCard
            duration={9}
            review={890}
            price={8}
            imgUrl={Tehran}
            tourText="Tehran"
            rate={4}
          ></TourCard>
          <TourCard
            duration={4}
            review={128}
            price={5}
            imgUrl={Qom}
            tourText="Qom"
            rate={2.5}
          ></TourCard>
          <TourCard
            duration={12}
            review={1078}
            price={15}
            imgUrl={Shiraz}
            tourText="Shiraz"
            rate={4.5}
          ></TourCard>
          <TourCard
            duration={19}
            review={2309}
            price={17}
            imgUrl={Isfahan}
            tourText="Isfahan"
            rate={5}
          ></TourCard>
        </Grid>
      </Container>
    </>
  );
}

export default App;
