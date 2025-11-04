import React from "react";
import type { Vendor } from "../type";
import { RatingBar } from "./RatingBar";
import { Tag } from "./Tag";
import { FiArrowUp, FiArrowDown, FiEdit, FiTrash2 } from "react-icons/fi";

type VendorItemProps = {
  vendor: Vendor;
  isSelected: boolean;
  onSelect: (id: string) => void;
};

export const VendorItem: React.FC<VendorItemProps> = ({
  vendor,
  isSelected,
  onSelect,
}) => {
  const Logo = vendor.logo;

  // Helper for Movement
  const Movement = () => {
    if (vendor.movement === 0) {
      return <span className="text-sm text-brand-gray-400">-</span>;
    }
    const isPositive = vendor.movement > 0;
    return (
      <span
        className={`flex items-center text-sm ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? (
          <FiArrowUp className="w-4 h-4" />
        ) : (
          <FiArrowDown className="w-4 h-4" />
        )}
        {Math.abs(vendor.movement)}%
      </span>
    );
  };

  return (
    <div className="flex items-center py-3 border-b border-brand-gray-200 last:border-b-0">
      {/* Checkbox */}
      <div className="pl-2 pr-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(vendor.id)}
          className="h-4 w-4 rounded text-brand-purple border-brand-gray-200 focus:ring-brand-purple"
        />
      </div>

      {/* Vendor Info (Logo, Name, URL) - 30% width on desktop */}
      <div className="flex items-center gap-3 w-full md:w-[30%]">
        <div className="flex-shrink-0 w-10 h-10 bg-brand-gray-100 rounded-full flex items-center justify-center">
          <Logo className="w-5 h-5 text-brand-gray-700" />
        </div>
        <div>
          <div className="font-medium text-brand-gray-900">{vendor.name}</div>
          <div className="text-sm text-brand-gray-400">{vendor.url}</div>
        </div>
      </div>

      {/* --- DESKTOP COLUMNS (Hidden on Mobile) --- */}

      {/* Rating Bar & Score (Desktop) - 15% width */}
      <div className="hidden md:flex items-center gap-2 w-[15%] px-4">
        <RatingBar rating={vendor.rating} />
        <span className="text-sm font-medium text-brand-gray-700">
          {vendor.rating}
        </span>
      </div>

      {/* Movement (Desktop) - 10% width */}
      <div className="hidden md:flex w-[10%] px-4">
        <Movement />
      </div>

      {/* Last Assessed (Desktop) - 15% width */}
      <div className="hidden md:flex w-[15%] px-4">
        <span className="text-sm text-brand-gray-700">
          {vendor.lastAssessed}
        </span>
      </div>

      {/* Categories (Desktop) - 25% width */}
      <div className="hidden md:flex w-[25%] px-4 items-center gap-1 flex-wrap">
        {vendor.tags.slice(0, 3).map((tag) => (
          <Tag
            key={tag}
            label={tag}
            variant={tag === "Active" ? "active" : "default"}
          />
        ))}
        {vendor.tags.length > 3 && (
          <span className="px-2 py-0.5 rounded-full bg-white border border-brand-gray-200 text-brand-gray-700 text-xs font-medium">
            +{vendor.tags.length - 3}
          </span>
        )}
      </div>

      {/* Actions (Desktop) - 5% width */}
      <div className="hidden md:flex w-[5%] px-4 gap-2 text-brand-gray-400">
        <button className="hover:text-brand-gray-700">
          <FiEdit className="w-4 h-4" />
        </button>
        <button className="hover:text-brand-gray-700">
          <FiTrash2 className="w-4 h-4" />
        </button>
      </div>

      {/* --- MOBILE-ONLY RATING (Hidden on Desktop) --- */}
      <div className="md:hidden ml-auto pr-2 text-right">
        <div className="w-20 flex items-center gap-2 ml-auto justify-end">
          <span className="text-sm font-medium text-brand-gray-700">
            {vendor.rating}
          </span>
          <Movement />
        </div>
      </div>
    </div>
  );
};
