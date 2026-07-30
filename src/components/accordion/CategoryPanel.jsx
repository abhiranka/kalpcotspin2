import PropTypes from "prop-types";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StraightenIcon from "@mui/icons-material/Straighten";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ScaleIcon from "@mui/icons-material/Scale";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";

import FabricTable from "../fabricTable/FabricTable";
console.log("CategoryPanel version 123");

export default function CategoryPanel({
  category,
  fabrics,
  expanded,
  onToggle,
  index,
}) {
  const bannerMap = {
    "3-1": "/category-banners/3-1.png",
    "SHIRTING": "/category-banners/SHIRTING.png",
    "SATIN": "/category-banners/SATIN.png",
    "DOBBY": "/category-banners/DOBBY.png",
    "KNIT": "/category-banners/KNIT.png",
  };

  const banner
 =
    bannerMap[String(category.name).toUpperCase()] ||
    "/category-banners/SHIRTING.png";

  return (
  <Accordion
    expanded={expanded}
    onChange={onToggle}
    disableGutters
    elevation={0}
    sx={{
      mb: 3,
      overflow: "hidden",
      borderRadius: 3,
      border: "1px solid #E6ECF5",
      boxShadow: "0 8px 24px rgba(0,0,0,.08)",

      "&:before": {
        display: "none",
      },
    }}
  >
<AccordionSummary
  expandIcon={
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        bgcolor: "#F4F7FB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: ".3s",

        "& svg": {
          transition: ".3s",
          transform: expanded
            ? "rotate(90deg)"
            : "rotate(0deg)",
        },
      }}
    >
      <ChevronRightIcon />
    </Box>
  }
  sx={{
    px: 3,
    py: 2,
    bgcolor: "#fff",

    "& .MuiAccordionSummary-content": {
      margin: 0,
    },
  }}
>
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 4,
      flexWrap: {
        xs: "wrap",
        md: "nowrap",
      },
    }}
  >
    {/* LEFT */}

    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        flex: 1,
      }}
    >
      <Box
        sx={{
          width: 70,
          height: 70,
          borderRadius: 3,
          background:
            "linear-gradient(135deg,#123B71,#2E75D3)",

          color: "#fff",

          display: "flex",

          justifyContent: "center",

          alignItems: "center",

          fontWeight: 800,

          fontSize: 24,

          flexShrink: 0,
        }}
      >
        {String(index).padStart(2, "0")}
      </Box>

      <Box flex={1}>
        <Typography
          variant="h5"
          fontWeight={800}
          color="#123B71"
        >
          {category.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mt={0.5}
        >
          Premium Denim Collection
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          <Chip size="small" label="SORT NO" />
          <Chip size="small" label="WEAVE" />
          <Chip size="small" label="WIDTH" />
          <Chip size="small" label="WEIGHT" />
          <Chip size="small" label="SHADE" />
          <Chip size="small" label="IMAGES" />
        </Box>
      </Box>
    </Box>

    {/* RIGHT */}

    <Chip
      label={`${fabrics.length} Items`}
      color="primary"
      sx={{
        fontWeight: 700,
        px: 1,
      }}
    />
  </Box>
</AccordionSummary>

    <Divider />

    <AccordionDetails
      sx={{
        p: 0,
        bgcolor: "#F8FAFD",
      }}
    >
      <FabricTable fabrics={fabrics} />
    </AccordionDetails>
  </Accordion>
);
}

CategoryPanel.propTypes = {
  category: PropTypes.object.isRequired,
  fabrics: PropTypes.array.isRequired,
  expanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
