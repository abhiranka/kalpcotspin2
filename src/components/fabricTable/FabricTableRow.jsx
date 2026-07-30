import PropTypes from "prop-types";

import {
  TableRow,
  TableCell,
  Chip,
  Button
} from "@mui/material";

import ImageGallery from "@/components/gallery/ImageGallery";

function FabricTableRow({ fabric }) {
  const {
    sortNo,
    weave,
    width,
    weight,
    shade,
    weftShrinkage,
    type,
    images = []
  } = fabric;

  return (
    <TableRow
      hover
      sx={{
        "&:last-child td": {
          borderBottom: 0
        }
      }}
    >
      <TableCell sx={{ fontWeight: 600 }}>
        {sortNo || "-"}
      </TableCell>

      <TableCell>
        {weave || "-"}
      </TableCell>

      <TableCell>
        {width || "-"}
      </TableCell>

      <TableCell>
        {weight || "-"}
      </TableCell>

      <TableCell>
        {shade || "-"}
      </TableCell>

      <TableCell>
        {weftShrinkage || "-"}
      </TableCell>

      <TableCell>
        <Chip
          label={type || "-"}
          size="small"
          color="primary"
          variant="outlined"
        />
      </TableCell>

      <TableCell align="center">
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <Button
            variant="outlined"
            size="small"
            disabled
          >
            No Images
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}

FabricTableRow.propTypes = {
  fabric: PropTypes.shape({
    sortNo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    weave: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    weight: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    shade: PropTypes.string,
    weftShrinkage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    type: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.string
    )
  }).isRequired
};

export default FabricTableRow;