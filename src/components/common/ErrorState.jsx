import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ErrorState({
  message = "Something went wrong.",
  onRetry
}) {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <ErrorOutlineIcon
        sx={{
          fontSize: 64,
          color: "error.main"
        }}
      />

      <Typography mt={2}>
        {message}
      </Typography>

      {onRetry && (
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          onClick={onRetry}
        >
          Retry
        </Button>
      )}
    </Box>
  );
}

export default ErrorState;