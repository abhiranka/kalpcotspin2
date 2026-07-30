import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, IconButton } from "@mui/material";

function HeaderNotifications() {
  return (
    <IconButton>
      <Badge
        color="error"
        badgeContent={0}
      >
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
}

export default HeaderNotifications;