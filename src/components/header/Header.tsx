import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

function Header() {
  return (
    <Grid size={12} textAlign="center">
      <Typography sx={{ fontWeight: "bold" }} variant="h3" component="h3">
        Most Liked Tours
      </Typography>
    </Grid>
  );
}

export default Header;
