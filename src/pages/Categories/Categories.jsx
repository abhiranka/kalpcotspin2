import { Paper, Typography } from "@mui/material";

function Categories() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4">
        Categories
      </Typography>

      <Typography mt={2}>
        Fabric categories will appear here.
      </Typography>
    </Paper>
  );
}

export default Categories;