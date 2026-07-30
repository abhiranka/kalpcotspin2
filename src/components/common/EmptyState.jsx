import PropTypes from "prop-types";

import {
  Box,
  Typography
} from "@mui/material";

import SearchOffIcon from "@mui/icons-material/SearchOff";

function EmptyState({
  title = "No fabrics found",
  subtitle = "Try changing the search or filters."
}) {
  return (
    <Box
      sx={{
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "text.secondary"
      }}
    >
      <SearchOffIcon
        sx={{
          fontSize: 70,
          mb: 2,
          color: "primary.main"
        }}
      />

      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        align="center"
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

EmptyState.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default EmptyState;