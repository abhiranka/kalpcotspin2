import PropTypes from "prop-types";

import {
  Box
} from "@mui/material";

function ThumbnailStrip({
  images,
  current,
  onSelect
}) {
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        gap: 1,
        overflowX: "auto"
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          onClick={() => onSelect(index)}
          style={{
            width: 90,
            height: 90,
            cursor: "pointer",
            border:
              current === index
                ? "3px solid #1976d2"
                : "1px solid #ddd",
            objectFit: "cover"
          }}
        />
      ))}
    </Box>
  );
}

ThumbnailStrip.propTypes = {
  images: PropTypes.array,
  current: PropTypes.number,
  onSelect: PropTypes.func
};

export default ThumbnailStrip;