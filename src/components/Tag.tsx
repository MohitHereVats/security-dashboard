import React from "react";

type TagProps = {
  label: string;
  variant?: "default" | "active";
};

export const Tag: React.FC<TagProps> = ({ label, variant = "default" }) => {
  if (variant === "active") {
    return (
      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        {label}
      </span>
    );
  }

  return (
    <span className="px-2 py-0.5 rounded-full bg-white border border-brand-gray-200 text-brand-gray-700 text-xs font-medium">
      {label}
    </span>
  );
};
