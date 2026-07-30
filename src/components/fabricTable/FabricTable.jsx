import { useMemo, useState } from "react";

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  Box,
} from "@mui/material";

import { FilterBar } from "@/components/filters";
import FabricTableHead from "./FabricTableHead";
import FabricTableRow from "./FabricTableRow";

function FabricTable({ fabrics = [] }) {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    weight: "",
    shade: "",
    weave: "",
  });

  // Default sort = Weight (Low → High)
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("weight");

  // ----------------------------------
  // Dropdown Options
  // ----------------------------------

  const options = useMemo(
    () => ({
      weights: [...new Set(fabrics.map((f) => f.weight).filter(Boolean))].sort(
        (a, b) => a - b
      ),
      shades: [...new Set(fabrics.map((f) => f.shade).filter(Boolean))].sort(),
      weaves: [...new Set(fabrics.map((f) => f.weave).filter(Boolean))].sort(),
    }),
    [fabrics]
  );

  // ----------------------------------
  // Search + Filters
  // ----------------------------------

  const filtered = useMemo(() => {
    return fabrics.filter((fabric) => {
      const searchMatch =
        search === "" ||
        JSON.stringify(fabric)
          .toLowerCase()
          .includes(search.toLowerCase());

      const weightMatch =
        !filters.weight || Number(fabric.weight) === Number(filters.weight);

      const shadeMatch =
        !filters.shade || fabric.shade === filters.shade;

      const weaveMatch =
        !filters.weave || fabric.weave === filters.weave;

      return (
        searchMatch &&
        weightMatch &&
        shadeMatch &&
        weaveMatch
      );
    });
  }, [fabrics, search, filters]);

  // ----------------------------------
  // Sorting
  // ----------------------------------

  const sorted = useMemo(() => {
    const data = [...filtered];

    data.sort((a, b) => {
      let result = 0;

      switch (orderBy) {
        case "weight":
          result = Number(a.weight || 0) - Number(b.weight || 0);
          break;

        case "width":
          result = String(a.width || "").localeCompare(
            String(b.width || ""),
            undefined,
            {
              numeric: true,
              sensitivity: "base",
            }
          );
          break;

        default:
          result = String(a[orderBy] ?? "").localeCompare(
            String(b[orderBy] ?? ""),
            undefined,
            {
              numeric: true,
              sensitivity: "base",
            }
          );
      }

      return order === "asc" ? result : -result;
    });

    return data;
  }, [filtered, order, orderBy]);

  // ----------------------------------
  // Events
  // ----------------------------------

  const handleRequestSort = (property) => {
    const isAsc =
      orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const clearFilters = () => {
    setSearch("");

    setFilters({
      weight: "",
      shade: "",
      weave: "",
    });
  };

  return (
    <>
      <FilterBar
        search={search}
        filters={filters}
        options={options}
        onSearchChange={setSearch}
        onFilterChange={handleFilterChange}
        onClear={clearFilters}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          {sorted.length} Fabric{sorted.length !== 1 ? "s" : ""}
        </Typography>
      </Box>

      <Paper
        elevation={2}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 700,
            overflowX: "auto",
          }}
        >
          <Table
            stickyHeader
            sx={{
              minWidth: 950,
            }}
          >
            <FabricTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {sorted.length > 0 ? (
                sorted.map((fabric) => (
                  <FabricTableRow
                    key={fabric.id}
                    fabric={fabric}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    align="center"
                    sx={{ py: 6 }}
                  >
                    No fabrics found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default FabricTable;