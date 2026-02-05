import type { FC } from "react";

const SkipLink: FC = () => {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        focus:absolute focus:top-4 focus:left-4 focus:z-50
        focus:bg-white focus:px-4 focus:py-2 focus:rounded-md
        focus:ring-2 focus:ring-blue-500 focus:outline-none
        focus:text-gray-900 focus:shadow-lg
        transition-none
      "
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;