import PropTypes from "prop-types";
import { TextField } from "@mui/material";

export default function SearchBar({
  value,
  onChange
}) {
  return (
    <TextField
      fullWidth
      label="Search Fabric"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};