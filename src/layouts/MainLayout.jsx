import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import ContentWrapper from "./ContentWrapper";

function MainLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh"
      }}
    >
      <Sidebar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1
        }}
      >
        <Header />

        <ContentWrapper>
          <Outlet />
        </ContentWrapper>

        <Footer />
      </Box>
    </Box>
  );
}

export default MainLayout;