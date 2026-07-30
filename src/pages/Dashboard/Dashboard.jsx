import { useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper
} from "@mui/material";

import DenimAccordion from "@/components/accordion/DenimAccordion";
import FabricService from "@/services/FabricService";

export default function Dashboard() {
  // ------------------------------------------
  // Load Fabrics
  // ------------------------------------------
  const fabrics = useMemo(
    () => FabricService.getAllFabrics(),
    []
  );

  // ------------------------------------------
  // Statistics
  // ------------------------------------------
  const statistics = useMemo(
    () => FabricService.getStatistics(),
    []
  );

  // ------------------------------------------
  // Dynamic Categories
  // ------------------------------------------
  const categories = useMemo(
    () => FabricService.getCategories(),
    []
  );

  return (
    <Container maxWidth="xl">
      <Box py={3}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
        >
          Denim Library
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Browse and Search all Denim Qualities.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Paper
          elevation={2}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2
          }}
        >
          <Typography variant="body1">
            <strong>Total Fabrics:</strong>{" "}
            {statistics.totalFabrics}
          </Typography>

          <Typography variant="body1">
            <strong>Categories:</strong>{" "}
            {statistics.totalCategories}
          </Typography>

          <Typography variant="body1">
            <strong>Weaves:</strong>{" "}
            {statistics.totalWeaves}
          </Typography>

          <Typography variant="body1">
            <strong>Shades:</strong>{" "}
            {statistics.totalShades}
          </Typography>
        </Paper>

        <DenimAccordion
          categories={categories}
          fabrics={fabrics}
        />
      </Box>
    </Container>
  );
}