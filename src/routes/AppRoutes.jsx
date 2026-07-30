import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Dashboard from "@/pages/Dashboard/Dashboard";
import Categories from "@/pages/Categories/Categories";
import Fabrics from "@/pages/Fabrics/Fabrics";
import Gallery from "@/pages/Gallery/Gallery";
import Settings from "@/pages/Settings/Settings";
import NotFound from "@/pages/NotFound/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import ROUTES from "./RouteConstants";
function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path={ROUTES.CATEGORIES.replace("/", "")}
          element={<Categories />}
        />

        <Route
          path={ROUTES.FABRICS.replace("/", "")}
          element={<Fabrics />}
        />

        <Route
          path={ROUTES.GALLERY.replace("/", "")}
          element={<Gallery />}
        />

        <Route
          path={ROUTES.SETTINGS.replace("/", "")}
          element={<Settings />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;