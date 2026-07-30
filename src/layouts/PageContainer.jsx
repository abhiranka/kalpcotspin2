import { Paper, Typography } from "@mui/material";

function PageContainer({ title, children }) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 4,
        borderRadius: 3
      }}
    >
      <Typography
        variant="h4"
        mb={3}
      >
        {title}
      </Typography>

      {children}
    </Paper>
  );
}

export default PageContainer;