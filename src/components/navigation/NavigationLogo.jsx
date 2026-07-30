import { Box } from "@mui/material";

function NavigationLogo() {
  return (
    <Box
      sx={{
        py: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Box
        component="img"
        src="/logo-full.png"
        alt="Kalp Cotspin"
        sx={{
          width: 120,
          maxWidth: "90%",
          height: "auto",
          objectFit: "contain",
          userSelect: "none",
        }}
        draggable={false}
      />
    </Box>
  );
}

export default NavigationLogo;