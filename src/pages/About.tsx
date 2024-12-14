import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

function About() {
  return (
    <>
      <Container fixed>
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          sx={{ height: "100vh", width: "100wh" }}
        >
          <Grid size={12} container justifyContent="center">
            <Paper
              elevation={5}
              sx={{ textAlign: "center", p: 3, height: "90px", width: "90px" }}
            >
              lorem ipsum
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;
