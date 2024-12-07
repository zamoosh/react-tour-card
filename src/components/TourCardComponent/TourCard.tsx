import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { CardMedia, Link, Rating } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

interface Props {
  rate?: number;
  tourText: string;
  imgUrl: string;
  price: number;
  review?: number;
  duration: number;
}

function TourCard({
  rate = 2,
  tourText,
  imgUrl = "https://photo.nagsh.ir/wp-content/uploads/2022/08/4_6015079609031198234.jpg",
  price,
  review = 0,
  duration,
}: Props) {
  return (
    <Grid
      container
      justifyContent={{ xs: "center", sm: "center" }}
      size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
    >
      <Paper elevation={3} sx={{ maxWidth: 345, minWidth: 250 }}>
        <CardMedia
          sx={{ height: 180, borderRadius: "4px 4px 0 0" }}
          image={imgUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            <Link href="#" underline={"none"} component={Button}>
              {tourText}
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            <Typography sx={{ display: "block" }} variant="overline">
              <i className="fa-thin fa-clock fa-fade me-1"></i>
              {duration} hours
            </Typography>
          </Typography>

          <Rating
            name="simple-uncontrolled"
            readOnly={true}
            defaultValue={rate}
            precision={0.5}
            sx={{ mt: 1 }}
          />

          <Typography variant="caption" sx={{ display: "block" }}>
            {review > 0 ? `${review} Reviews` : `No reviews yet`}
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Price: {price}$
          </Typography>
        </CardContent>
      </Paper>
    </Grid>
  );
}

export default TourCard;
