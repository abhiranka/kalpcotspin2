import PropTypes from "prop-types";

import { AuthProvider } from "./AuthContext";
import { LayoutProvider } from "./LayoutContext";
import { HeaderProvider } from "./HeaderContext";

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <LayoutProvider>
        <HeaderProvider>
          {children}
        </HeaderProvider>
      </LayoutProvider>
    </AuthProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;