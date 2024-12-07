import SampleCard from "./sampleCard.tsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ba0707",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function App() {
  // styled(Paper)((a) => {
  //   console.log(a);
  // });

  return (
    <>
      <Container fixed maxWidth="lg">
        <Grid container spacing={2} sx={{ my: 1 }}>
          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                md: "flex-end",
                lg: "flex-start",
              },
            }}
            size={{ xs: 12, md: 6 }}
          >
            <SampleCard></SampleCard>
            <SampleCard></SampleCard>
          </Grid>
          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                md: "flex-start",
                lg: "flex-end",
              },
            }}
            size={{ xs: 12, md: 6 }}
          >
            <SampleCard></SampleCard>
            <SampleCard></SampleCard>
          </Grid>
        </Grid>

        <Grid spacing={2} container sx={{ my: 1 }}>
          <Button variant="contained">Hello world</Button>
        </Grid>

        <Grid marginY={4} container spacing={2}>
          <Grid size={8}>
            <Paper sx={{ p: 1, textAlign: "center" }}>size=8</Paper>
            {/* <Item>size=8</Item> */}
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>

        <Grid marginY={4} container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>

        <Grid marginY={4} container spacing={3}>
          <Grid size="grow">
            <Item>size=grow</Item>
          </Grid>
          <Grid size={6}>
            <Item>size=6</Item>
          </Grid>
          <Grid size="auto">
            <Item>size=grow</Item>
          </Grid>
        </Grid>
      
        <Grid
          marginY={3}
          container
          sx={{
            justifyContent: {
              xs: "center",
              sm: "space-around",
              md: "space-between",
            },
          }}
          spacing={5}
          textAlign="center"
        >
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={2} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={3} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={4} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={5} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={6} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={7} />
          </Grid>
          <Grid>
            <Paper sx={{ minWidth: 50, minHeight: 50 }} elevation={8} />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
          }}
          spacing={5}
          textAlign="center"
        >
          <Grid>
            <Button color="warning" variant="text">
              Text
            </Button>
          </Grid>
          <Grid>
            <Button variant="contained">Contained</Button>
          </Grid>
          <Grid>
            <Button variant="contained" color="info">
              INFO
            </Button>
          </Grid>
          <Grid>
            <Button variant="outlined">Primary</Button>
          </Grid>
          <Grid>
            <Button variant="contained" disabled={true}>
              Disabled
            </Button>
          </Grid>
          <Grid>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Grid>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField id="standard" label="standard" variant="standard" />
          </Grid>
          <Grid>
            <TextField id="filled" label="filled" variant="filled" />
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default App;
