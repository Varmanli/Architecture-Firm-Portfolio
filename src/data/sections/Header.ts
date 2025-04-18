// Constants for accessibility attributes
export const HEADER_ARIA_LABELS = {
  logo: "Architecture Firm Logo - Navigate to homepage",
  menuButton: (isOpen: boolean) =>
    `Toggle navigation menu (${isOpen ? "close" : "open"})`,
  navLink: (label: string) => `Navigate to ${label} page`,
};
