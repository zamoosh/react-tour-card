import { Container } from "@mui/material";
import Box from "@mui/material/Box";

function SampleContainer() {
  return (
    <Container maxWidth="sm" sx={{ m:2 }}>
      <Box sx={{ bgcolor: "rgba(207,232,252,0.41)", height: "50px" }} />
    </Container>
  );
}

export default SampleContainer;
