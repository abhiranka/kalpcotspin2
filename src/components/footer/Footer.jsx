import { Box, Typography } from "@mui/material";

import { FOOTER_HEIGHT } from "@/constants/layout";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: FOOTER_HEIGHT,
        borderTop: 1,
        borderColor: "divider",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        bgcolor: "background.paper"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Kalp Cotspin
      </Typography>

      <Typography variant="body2">
        Denim Library v1.0
      </Typography>
    </Box>
  );
}

export default Footer;