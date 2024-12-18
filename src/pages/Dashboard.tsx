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
import { useState } from "react";

function Dashboard() {
  const originalSideBarMarginLeft = -300;
  const originalSideBarTranslateX = 340;
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [sideBarMarginLeft, setSideBarMarginLeft] = useState(
    originalSideBarMarginLeft,
  );
  const [sideBarTranslateX, setSideBarTranslateX] = useState(
    originalSideBarTranslateX,
  );

  return (
    <>
      <Container
        sx={{ p: 1, maxWidth: "unset !important", position: "relative", overflowX: "hidden" }}
      >
        <Stack sx={{ transition: "all 0.3s" }} gap={sideBarOpen ? 1 : 0} direction={"row"}>
          <Grid sx={{ width: "-webkit-fill-available" }} spacing={2} container>
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
                    <IconButton size={"medium"}>
                      <Box
                        component="i"
                        className="fa-thin fa-moon fa-flip-horizontal"
                        sx={{
                          width: "26px",
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"منو"}>
                    <IconButton
                      onClick={() => {
                        setSideBarOpen(!sideBarOpen);
                        console.log(sideBarOpen);
                        if (!sideBarOpen) {
                          setSideBarMarginLeft(0);
                          setSideBarTranslateX(0);
                        } else {
                          setSideBarMarginLeft(originalSideBarMarginLeft);
                          setSideBarTranslateX(originalSideBarTranslateX);
                        }
                      }}
                      color="warning"
                      size={"medium"}
                    >
                      <Box
                        component="i"
                        className={
                          "fa-regular " + (sideBarOpen ? "fa-xmark" : "fa-bars")
                        }
                        sx={{
                          width: "26px",
                          height: "26px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      />
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
              <Paper sx={{ px: 4, py: 2, bgcolor: "success.dark" }} elevation={5}>
                lorem
              </Paper>
              <Paper sx={{ px: 4, py: 2, bgcolor: "secondary.dark" }} elevation={5}>
                lorem
              </Paper>
              <Paper sx={{ px: 4, py: 2, bgcolor: "primary.dark" }} elevation={5}>
                lorem
              </Paper>
            </Stack>
            {/* === BODY === */}
          </Grid>
          <Grid
            container
            sx={{
              transition: "all 0.3s",
              transform: `translateX(${sideBarTranslateX}px)`,
              marginLeft: `${sideBarMarginLeft}px`,
            }}
          >
            <Paper
              elevation={6}
              sx={{ py: 3, px: 2, height: "100%", width: 300 }}
            >
              lorem ipsum
            </Paper>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}

export default Dashboard;
