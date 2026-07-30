import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

import useHeader from "@/hooks/useHeader";

function HeaderSearch() {
  const { searchText, setSearchText } = useHeader();

  return (
    <TextField
      size="small"
      placeholder="Search fabrics..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      sx={{ width: 320 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
}

export default HeaderSearch;