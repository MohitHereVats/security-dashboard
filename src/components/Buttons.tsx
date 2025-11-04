import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactElement;
  className?: string; // Explicitly accept className
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  icon,
  className = "",
  ...props
}) => {
  const baseStyle =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors";

  const primaryStyle = "bg-brand-purple text-white hover:bg-brand-purple-dark";

  const secondaryStyle =
    "bg-white text-brand-gray-700 border border-brand-gray-200 hover:bg-brand-gray-100 shadow-card";

  return (
    <button
      className={`${baseStyle} ${
        variant === "primary" ? primaryStyle : secondaryStyle
      } ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
