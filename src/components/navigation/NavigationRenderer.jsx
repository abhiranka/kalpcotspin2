import { List } from "@mui/material";

import navigation from "@/routes/navigation";
import NavigationItem from "./NavigationItem";

function NavigationRenderer() {
  return (
    <List>
      {navigation.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
        />
      ))}
    </List>
  );
}

export default NavigationRenderer;