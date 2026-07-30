import PropTypes from "prop-types";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

function GalleryDialog({
  open,
  image,
  onClose,
  children,
}) {
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      fullWidth
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          bgcolor: "#111827",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 20,
            bgcolor: "rgba(255,255,255,.9)",
            "&:hover": {
              bgcolor: "#fff",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Image Area */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 600,
            bgcolor: "#111827",
          }}
        >
          {image ? (
            <Box
              component="img"
              src={image}
              alt="Fabric"
              sx={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          ) : (
            <Typography
              sx={{
                color: "#fff",
              }}
            >
              No Image Available
            </Typography>
          )}

          {/* Navigation Arrows from ImageGallery.jsx */}
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

GalleryDialog.propTypes = {
  open: PropTypes.bool,
  image: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default GalleryDialog;