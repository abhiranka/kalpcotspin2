import { Backdrop, CircularProgress } from "@mui/material";

function LoadingOverlay({ open }) {
  return (
    <Backdrop
      open={open}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 10 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingOverlay;