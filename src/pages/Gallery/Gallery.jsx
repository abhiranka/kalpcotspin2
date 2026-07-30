import { Paper, Typography } from "@mui/material";

function Gallery() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4">
        Image Gallery
      </Typography>

      <Typography mt={2}>
        Fabric images will appear here.
      </Typography>
    </Paper>
  );
}

export default Gallery;