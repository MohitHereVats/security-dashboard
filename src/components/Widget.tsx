import React from 'react';

type WidgetProps = {
  children: React.ReactNode;
  className?: string;
};

export const Widget: React.FC<WidgetProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-card p-6 ${className}`}>
      {children}
    </div>
  );
};
