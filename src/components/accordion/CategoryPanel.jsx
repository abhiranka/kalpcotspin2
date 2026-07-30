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

  const banner =
    bannerMap[String(category.name).toUpperCase()] ||
    "/category-banners/SHIRTING.png";

  return (
    <Accordion
  expanded={expanded}
  onChange={onToggle}
  elevation={0}
  disableGutters
  sx={{
    mb: 2.5,
    borderRadius: "18px !important",
    overflow: "hidden",
    border: "1px solid #E8EEF7",
    boxShadow: "0 12px 35px rgba(13,40,80,.12)",

    transition: "all .35s ease",

    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 20px 45px rgba(20,45,90,.18)",
    },
  }}
>  <AccordionSummary
        expandIcon={
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              bgcolor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 12px rgba(0,0,0,.15)",
            }}
          >
            <ChevronRightIcon
              sx={{
                transition: ".3s",
                transform: expanded
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
                color: "#173A6A",
              }}
            />
          </Box>
        }
        sx={{
          minHeight: 175,
          px: 3,

          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,.98) 52%,
              rgba(255,255,255,.75) 68%,
              rgba(255,255,255,.15) 100%
            ),
            url(${banner})
          `,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "33% 100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 82,
height: 82,
borderRadius: "18px",
bgcolor: "#173A6A",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 22,
letterSpacing: 1,
            }}
          >
            {String(index).padStart(2, "0")}
          </Box>

          <Box
            sx={{
              width: 3,
              height: 82,
              bgcolor: "#1E88E5",
              borderRadius: 5,
            }}
          />

          <Box
  sx={{
    flex: 1,
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    alignItems: "center",
    gap: 3,
    width: "100%",
  }}
>
            <Typography
              variant="h5"
              fontWeight={800}
              color="#173A6A"
              gutterBottom
            >
              {category.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexWrap: "wrap",
                color: "#6E7C92",
                fontSize: 14,
              }}
            >
              <Box display="flex" gap={1}>
                <ViewModuleIcon fontSize="small" />
                SORT NO
              </Box>

              <Box display="flex" gap={1}>
                <ViewModuleIcon fontSize="small" />
                WEAVE
              </Box>

              <Box display="flex" gap={1}>
                <StraightenIcon fontSize="small" />
                WIDTH
              </Box>

              <Box display="flex" gap={1}>
                <ScaleIcon fontSize="small" />
                WEIGHT
              </Box>

              <Box display="flex" gap={1}>
                <ColorLensOutlinedIcon fontSize="small" />
                SHADE
              </Box>

              <Box display="flex" gap={1}>
                <PhotoLibraryOutlinedIcon fontSize="small" />
                IMAGES
              </Box>
            </Box>
          </Box>
<Box
  sx={{
    width: "100%",
    height: 165,
    maxWidth: 360,
    position: "relative",
    borderRadius: "18px",
    overflow: "hidden",
    ml: 3,
    flexShrink: 0,
  }}
>
  <Box
    component="img"
    src={banner}
    alt={category.name}
    sx={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />

  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background:
"linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,.98) 38%, rgba(255,255,255,.82) 56%, rgba(255,255,255,.30) 72%, rgba(255,255,255,0) 100%)"}}
  />

  <Chip
    label={`${fabrics.length} Items`}
    sx={{
      position: "absolute",
      top: 18,
      left: 18,
      bgcolor:"rgba(255,255,255,.92)",
      color: "#0F3972",
boxShadow:"0 12px 35px rgba(13,40,80,.12)",
borderRadius:"25px",
      fontWeight: 700,
    }}
  />
</Box></Box>
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