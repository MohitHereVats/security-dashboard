import React from "react";

type SidebarItemProps = {
  icon: React.ElementType; // React-Icons component
  label: string;
  isActive?: boolean;
};

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  isActive,
}) => {
  return (
    <button
      className={`
        flex flex-col items-center justify-center p-2 rounded-md
        group relative transition-colors duration-200
        ${
          isActive
            ? "bg-brand-purple text-white"
            : "text-brand-gray-400 hover:bg-brand-gray-200 hover:text-brand-gray-700"
        }
      `}
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
      {/* Tooltip for desktop */}
      <div
        className="
        absolute left-full ml-4 px-3 py-1 bg-brand-gray-900 text-white text-sm rounded-md
        whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200
        hidden md:block
      "
      >
        {label}
      </div>
    </button>
  );
};
