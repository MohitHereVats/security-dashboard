import React from "react";
import { Button } from "./Buttons";
import { FiEdit, FiDownload } from "react-icons/fi"; 

export const DashboardHeader: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-brand-gray-900">
          Welcome back, Olivia
        </h1>
        <p className="text-sm text-brand-gray-400">
          Manage your vendor security ratings efficiently.
        </p>
      </div>
      <div className="flex gap-2 mt-4 md:mt-0">
        <Button variant="secondary" icon={<FiEdit />}>
          Customize
        </Button>
        <Button variant="secondary" icon={<FiDownload />}>
          Export
        </Button>
      </div>
    </header>
  );
};
