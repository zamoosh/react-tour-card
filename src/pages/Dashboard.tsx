import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";

function Dashboard() {
  return (
    <>
      <Container sx={{ p: 1, maxWidth: "unset !important" }}>
        <Grid spacing={2} container>
          {/* === HEADER === */}
          <Paper sx={{ width: "100%", px: 3, py: 1 }} elevation={4}>
            <Grid
              container
              size={12}
              spacing={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid>Hello Admin</Grid>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Tooltip title={"تغییر تم"}>
                  <IconButton
                    sx={{ bgcolor: "transparent !important" }}
                    size={"medium"}
                  >
                    <i className="fa-thin fa-moon fa-flip-horizontal"></i>
                  </IconButton>
                </Tooltip>
                <Tooltip title={"منو"}>
                  <IconButton
                    color="warning"
                    sx={{ bgcolor: "transparent !important" }}
                    size={"medium"}
                  >
                    <i className="fa-regular fa-bars"></i>
                  </IconButton>
                </Tooltip>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                  <Divider
                    sx={{ px: "2 !important" }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                  <Avatar>A</Avatar>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography sx={{ fontWeight: "bold" }}>
                        The Name
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="caption">
                        description here
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
          {/* === HEADER === */}

          {/* === BODY === */}
          <Stack
            padding={3}
            spacing={2}
            component={Paper}
            alignItems={"start"}
            direction="row"
            height="88vh"
            width="100%"
          >
            <Paper sx={{ px: 4, py: 2 }} elevation={5}>
              lorem
            </Paper>
            <Paper sx={{ px: 4, py: 2 }} elevation={5}>
              lorem
            </Paper>
            <Paper sx={{ px: 4, py: 2 }} elevation={5}>
              lorem
            </Paper>
          </Stack>
          {/* === BODY === */}
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;