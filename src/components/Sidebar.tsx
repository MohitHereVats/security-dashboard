import React from "react";
import { SidebarItem } from "./SidebarItem";
import {
  FiHome,
  FiUsers,
  FiServer,
  FiShield,
  FiPieChart,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";
import { SiDatadog } from "react-icons/si"; // Use this for the logo

type SidebarProps = {
  className?: string; // To allow passing mobile/desktop classes
};

export const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  return (
    <aside
      className={`
      w-20 bg-white shadow-card flex-shrink-0
      flex-col items-center py-6 gap-6
      ${className} /* This allows us to add 'hidden md:flex' or 'flex' */
    `}
    >
      <div
        className="
        w-10 h-10 bg-brand-purple text-white 
        flex items-center justify-center rounded-lg mb-4
      "
      >
        <SiDatadog className="w-6 h-6" />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-4 flex-grow">
        <SidebarItem icon={FiHome} label="Dashboard" isActive />
        <SidebarItem icon={FiUsers} label="Vendors" />
        <SidebarItem icon={FiServer} label="Assets" />
        <SidebarItem icon={FiShield} label="Compliance" />
        <SidebarItem icon={FiPieChart} label="Reports" />
      </nav>

      {/* Bottom Navigation */}
      <div className="flex flex-col gap-4 mt-auto">
        <SidebarItem icon={FiSettings} label="Settings" />
        <SidebarItem icon={FiHelpCircle} label="Help" />
        <hr className="w-10 border-t border-brand-gray-200" />

        {/* User Profile */}
        <div className="flex flex-col items-center gap-2">
          {/* Using a placeholder image for the profile */}
          <img
            src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png"
            alt="User profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </aside>
  );
};
