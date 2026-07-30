import { createContext, useMemo, useState } from "react";

export const LayoutContext = createContext(null);

export function LayoutProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [pageTitle, setPageTitle] = useState("Dashboard");

  const value = useMemo(
    () => ({
      sidebarOpen,
      setSidebarOpen,

      pageTitle,
      setPageTitle
    }),
    [sidebarOpen, pageTitle]
  );

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
}