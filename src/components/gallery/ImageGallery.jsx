import { useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  IconButton,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import GalleryDialog from "./GalleryDialog";
import ThumbnailStrip from "./ThumbnailStrip";

function ImageGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleOpen = () => {
    setCurrent(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrent(0);
  };

  const previousImage = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleOpen}
        disabled={images.length === 0}
      >
        {images.length === 0 ? "No Images" : "View"}
      </Button>

      <GalleryDialog
        open={open}
        image={images[current]}
        onClose={handleClose}
      >
        {images.length > 1 && (
          <>
            {/* Left Arrow */}
            <IconButton
              onClick={previousImage}
              disabled={current === 0}
              sx={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                width: 54,
                height: 54,
                bgcolor: "rgba(255,255,255,.95)",
                boxShadow: "0 8px 20px rgba(0,0,0,.25)",
                zIndex: 20,

                "&:hover": {
                  bgcolor: "#fff",
                },

                "&.Mui-disabled": {
                  opacity: 0.35,
                  bgcolor: "rgba(255,255,255,.8)",
                },
              }}
            >
              <ChevronLeftIcon fontSize="large" />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              onClick={nextImage}
              disabled={current === images.length - 1}
              sx={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                width: 54,
                height: 54,
                bgcolor: "rgba(255,255,255,.95)",
                boxShadow: "0 8px 20px rgba(0,0,0,.25)",
                zIndex: 20,

                "&:hover": {
                  bgcolor: "#fff",
                },

                "&.Mui-disabled": {
                  opacity: 0.35,
                  bgcolor: "rgba(255,255,255,.8)",
                },
              }}
            >
              <ChevronRightIcon fontSize="large" />
            </IconButton>

            {/* Image Counter */}
            <Button
              disableRipple
              sx={{
                position: "absolute",
                top: 20,
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "rgba(0,0,0,.55)",
                color: "#fff",
                borderRadius: "30px",
                px: 2,
                pointerEvents: "none",

                "&:hover": {
                  bgcolor: "rgba(0,0,0,.55)",
                },
              }}
            >
              {current + 1} / {images.length}
            </Button>

            {/* Thumbnails */}
            <ThumbnailStrip
              images={images}
              current={current}
              onSelect={setCurrent}
            />
          </>
        )}
      </GalleryDialog>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

ImageGallery.defaultProps = {
  images: [],
};

export default ImageGallery;