import { Paper, Typography } from "@mui/material";

function Fabrics() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4">
        Fabric Library
      </Typography>

      <Typography mt={2}>
        Fabric tables will appear here.
      </Typography>
    </Paper>
  );
}

export default Fabrics;