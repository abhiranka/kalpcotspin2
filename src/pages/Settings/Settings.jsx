import { Paper, Typography } from "@mui/material";

function Settings() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4">
        Settings
      </Typography>

      <Typography mt={2}>
        Application settings will appear here.
      </Typography>
    </Paper>
  );
}

export default Settings;