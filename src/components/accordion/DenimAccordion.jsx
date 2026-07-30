import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CategoryPanel from "./CategoryPanel";

export default function DenimAccordion({ categories, fabrics }) {
  // Start with all categories collapsed
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panelId) => {
    setExpanded((prev) => (prev === panelId ? false : panelId));
  };

  return (
    <Box sx={{ mt: 3 }}>
      {categories.map((category, index) => {
        const categoryName = String(category.name)
          .trim()
          .toUpperCase();

        const categoryFabrics = fabrics.filter((fabric) => {
          const fabricCategory = String(fabric.category || "")
            .trim()
            .toUpperCase();

          return fabricCategory === categoryName;
        });

        return (
          <CategoryPanel
            key={category.id}
            index={index + 1}
            category={category}
            fabrics={categoryFabrics}
            expanded={expanded === category.id}
            onToggle={() => handleChange(category.id)}
          />
        );
      })}
    </Box>
  );
}

DenimAccordion.propTypes = {
  categories: PropTypes.array.isRequired,
  fabrics: PropTypes.array.isRequired,
};