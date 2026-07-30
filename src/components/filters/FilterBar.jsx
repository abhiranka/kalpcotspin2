import PropTypes from "prop-types";

import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function FilterBar({
  search,
  filters,
  options,
  onSearchChange,
  onFilterChange,
  onClear,
}) {
  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-end"
      sx={{ mb: 3 }}
    >
      {/* Search */}
      <Grid item xs={12} lg={4}>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 0.5,
            fontWeight: 600,
            color: "#4A5568",
          }}
        >
          Search Fabric
        </Typography>

        <TextField
          fullWidth
          size="small"
          placeholder="Search by Sort No, Weave, Shade..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Grid>

      {/* Weight */}
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 0.5,
            fontWeight: 600,
            color: "#4A5568",
          }}
        >
          Weight
        </Typography>

        <TextField
          fullWidth
          select
          size="small"
          value={filters.weight}
          onChange={(e) =>
            onFilterChange("weight", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {options.weights.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* Shade */}
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 0.5,
            fontWeight: 600,
            color: "#4A5568",
          }}
        >
          Shade
        </Typography>

        <TextField
          fullWidth
          select
          size="small"
          value={filters.shade}
          onChange={(e) =>
            onFilterChange("shade", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {options.shades.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* Weave */}
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="subtitle2"
          sx={{
            mb: 0.5,
            fontWeight: 600,
            color: "#4A5568",
          }}
        >
          Weave
        </Typography>

        <TextField
          fullWidth
          select
          size="small"
          value={filters.weave}
          onChange={(e) =>
            onFilterChange("weave", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {options.weaves.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* Clear Button */}
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Box sx={{ pt: "24px" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={onClear}
            sx={{
              height: 40,
              borderRadius: 2,
              fontWeight: 600,
            }}
          >
            Clear Filters
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

FilterBar.propTypes = {
  search: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};