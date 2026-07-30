import PropTypes from "prop-types";

import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from "@mui/material";

const columns = [
  {
    id: "sortNo",
    label: "Sort No",
    width: 120
  },
  {
    id: "weave",
    label: "Weave",
    width: 170
  },
  {
    id: "width",
    label: "Width",
    width: 100
  },
  {
    id: "weight",
    label: "Weight",
    width: 100
  },
  {
    id: "shade",
    label: "Shade",
    width: 140
  },
  {
    id: "weftShrinkage",
    label: "Weft Shr%",
    width: 110
  },
  {
    id: "type",
    label: "Type",
    width: 170
  },
  {
    id: "images",
    label: "Images",
    width: 100,
    align: "center"
  }
];

function FabricTableHead({
  order = "asc",
  orderBy = "sortNo",
  onRequestSort = () => {}
}) {
  const createSortHandler = (property) => () => {
    if (property !== "images") {
      onRequestSort(property);
    }
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align || "left"}
            sx={{
              fontWeight: 700,
              whiteSpace: "nowrap",
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              minWidth: column.width
            }}
            sortDirection={
              orderBy === column.id ? order : false
            }
          >
            {column.id === "images" ? (
              column.label
            ) : (
              <TableSortLabel
                active={orderBy === column.id}
                direction={
                  orderBy === column.id
                    ? order
                    : "asc"
                }
                onClick={createSortHandler(column.id)}
                sx={{
                  color: "inherit !important",
                  "& .MuiTableSortLabel-icon": {
                    color: "inherit !important"
                  }
                }}
              >
                {column.label}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

FabricTableHead.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]),
  orderBy: PropTypes.string,
  onRequestSort: PropTypes.func
};

export default FabricTableHead;