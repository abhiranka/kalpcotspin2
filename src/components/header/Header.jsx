import { AppBar, Toolbar } from "@mui/material";

import HeaderBrand from "./HeaderBrand";
import { SIDEBAR_WIDTH, HEADER_HEIGHT } from "@/constants/layout";

function Header() {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        ml: `${SIDEBAR_WIDTH}px`,
        height: HEADER_HEIGHT,
        justifyContent: "center",
        bgcolor: "#ffffff",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
  sx={{
    px: 3,
    minHeight: "80px !important",
    display: "flex",
    alignItems: "center",
  }}
>  <HeaderBrand />
      </Toolbar>
    </AppBar>
  );
}

export default Header;