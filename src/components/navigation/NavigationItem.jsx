import PropTypes from "prop-types";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { NavLink } from "react-router-dom";

function NavigationItem({ item }) {
  const Icon = item.icon;

  return (
    <ListItemButton
      component={NavLink}
      to={item.path}
      sx={{
        mx: 1,
        my: 0.5,
        borderRadius: 2,
        "&.active": {
          bgcolor: "primary.main",
          color: "primary.contrastText",
          "& .MuiListItemIcon-root": {
            color: "inherit"
          }
        }
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>

      <ListItemText primary={item.title} />
    </ListItemButton>
  );
}

NavigationItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired
  }).isRequired
};

export default NavigationItem;