import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

function SampleCard() {
  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "5px",
        px: "5px",
        transform: "scale(0.9)",
        border: 2,
        borderColor: "primary.main",
      }}
    >
      •
    </Box>
  );

  return (
    <Card
      sx={{
        display: "inline-block",
        my: 1,
        minWidth: 200,
        maxWidth: 300,
        border: 1,
        borderColor: "primary",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          some{bull}text here!
          <br />
          ali ali ali
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "inline-block",
            width: 12.5,
            height: 12.5,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
              cursor: "pointer",
            },
          }}
        />
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SampleCard;
