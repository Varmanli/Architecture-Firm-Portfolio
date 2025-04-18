// Layout.tsx: Main layout component that wraps all pages with Header, Outlet, and Footer
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Constants for accessibility attributes
const ARIA_LABELS = {
  main: "Main content area",
};

/**
 * Layout component that provides the consistent structure for all pages
 * @returns {JSX.Element} The rendered layout component
 */
const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with navigation */}
      <Header />

      {/* Main content area for page routes */}
      <main
        className="flex-grow overflow-x-hidden"
        role="main"
        aria-label={ARIA_LABELS.main}
      >
        <Outlet />
      </main>

      {/* Footer with navigation and contact info */}
      <Footer />
    </div>
  );
};

export default Layout;
