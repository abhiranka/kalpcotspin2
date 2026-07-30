import PropTypes from "prop-types";
import { Box } from "@mui/material";

import { HEADER_HEIGHT } from "@/constants/layout";

function ContentWrapper({ children }) {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        minHeight: "100vh",
        backgroundColor: "background.default",

        pt: `calc(${HEADER_HEIGHT}px + 24px)`,
        px: 3,
        pb: 3
      }}
    >
      {children}
    </Box>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentWrapper;