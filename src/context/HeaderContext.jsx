import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const HeaderContext = createContext(null);

export function HeaderProvider({ children }) {
  const [searchText, setSearchText] = useState("");

  const [notifications] = useState([]);

  const value = useMemo(
    () => ({
      searchText,
      setSearchText,

      notifications
    }),
    [searchText, notifications]
  );

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  );
}

HeaderProvider.propTypes = {
  children: PropTypes.node.isRequired
};