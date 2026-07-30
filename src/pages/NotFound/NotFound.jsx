import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center"
      }}
    >
      <Box textAlign="center">
        <Typography variant="h1" fontWeight={700}>
          404
        </Typography>

        <Typography variant="h5" mb={4}>
          Page Not Found
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
        >
          Back to Dashboard
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;