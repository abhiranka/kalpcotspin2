import { Drawer } from "@mui/material";

import NavigationLogo from "./NavigationLogo";
import NavigationRenderer from "./NavigationRenderer";

const drawerWidth = 220;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
    >
      <NavigationLogo />

      <NavigationRenderer />
    </Drawer>
  );
}

export default Sidebar;