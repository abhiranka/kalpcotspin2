import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";
import breakpoints from "./breakpoints";
import shape from "./shape";
import components from "./components";

const theme = createTheme({
  palette,
  typography,
  shadows,
  breakpoints,
  shape,
  components
});

export default theme;