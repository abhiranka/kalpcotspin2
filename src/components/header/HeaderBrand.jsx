import { Box } from "@mui/material";

function HeaderBrand() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        py: 0.5,
      }}
    >
      <Box
        component="img"
        src="/logo-icon.png"
        alt="Kalp Cotspin"
        sx={{
          height: 85,
          width: "auto",
          display: "block",
          objectFit: "contain",
        }}
        draggable={false}
      />
    </Box>
  );
}

export default HeaderBrand;