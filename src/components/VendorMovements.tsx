import React, { useState, useMemo } from "react";
import { mockVendors } from "../data/mockData";
import { Button } from "./Buttons";
import { VendorItem } from "./VendorItem";
import {
  FiSearch,
  FiFilter,
  FiUpload,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Widget } from "./widget";

type Tab = "all" | "monitored" | "unmonitored";

export const VendorMovements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVendors, setSelectedVendors] = useState<Set<string>>(
    new Set()
  );

  const filteredVendors = useMemo(() => {
    return mockVendors
      .filter((vendor) => {
        // Tab filter
        if (activeTab === "monitored") return vendor.isMonitored;
        if (activeTab === "unmonitored") return !vendor.isMonitored;
        return true; // 'all'
      })
      .filter((vendor) => {
        // Search filter
        return (
          vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          vendor.url.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
  }, [activeTab, searchQuery]);

  const handleSelectVendor = (id: string) => {
    setSelectedVendors((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedVendors(new Set(filteredVendors.map((v) => v.id)));
    } else {
      setSelectedVendors(new Set());
    }
  };

  const allSelected =
    selectedVendors.size > 0 && selectedVendors.size === filteredVendors.length;
  const someSelected = selectedVendors.size > 0 && !allSelected;

  return (
    <Widget className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-brand-gray-900">
            Vendor movements
          </h2>
          <p className="text-sm text-brand-gray-400">
            Keep track of vendor and their security ratings.
          </p>
        </div>
        {/* Mobile buttons */}
        <div className="flex md:hidden gap-2 w-full mt-4">
          <Button variant="secondary" icon={<FiUpload />} className="flex-1">
            Import
          </Button>
          <Button variant="primary" icon={<FiPlus />} className="flex-1">
            Add vendor
          </Button>
        </div>

        {/* Desktop buttons (hidden on mobile) */}
        <div className="hidden md:flex gap-2">
          <Button variant="secondary" icon={<FiUpload />}>
            Import
          </Button>
          <Button variant="primary" icon={<FiPlus />}>
            Add vendor
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-brand-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          />
        </div>
        <button className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md border border-brand-gray-200 text-brand-gray-700">
          <FiFilter />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-brand-gray-100 rounded-md">
        {(["all", "monitored", "unmonitored"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 capitalize py-1.5 rounded-md text-sm font-medium
              ${
                activeTab === tab
                  ? "bg-white shadow"
                  : "text-brand-gray-700 hover:bg-brand-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Vendor List Header */}
      <div className="flex items-center py-2 border-b border-brand-gray-200 text-sm font-medium text-brand-gray-400">
        {/* Checkbox */}
        <div className="pl-2 pr-4">
          <input
            type="checkbox"
            checked={allSelected}
            ref={(input) => {
              if (input) input.indeterminate = someSelected;
            }}
            onChange={handleSelectAll}
            className="h-4 w-4 rounded text-brand-purple border-brand-gray-200 focus:ring-brand-purple"
          />
        </div>

        {/* Vendor Column */}
        <div className="w-full md:w-[30%]">Vendor</div>

        {/* --- DESKTOP-ONLY HEADERS --- */}

        {/* Rating Header */}
        <div className="hidden md:block w-[15%] px-4">Rating</div>

        {/* Movement Header */}
        <div className="hidden md:block w-[10%] px-4">Movement</div>

        {/* Last Assessed Header */}
        <div className="hidden md:block w-[15%] px-4">Last Assessed</div>

        {/* Categories Header */}
        <div className="hidden md:block w-[25%] px-4">Categories</div>

        {/* Actions Header (no text needed, just space) */}
        <div className="hidden md:block w-[5%] px-4"></div>

        {/* --- MOBILE-ONLY HEADER --- */}
        <div className="md:hidden ml-auto pr-2">Rating & Movement</div>
      </div>

      {/* Vendor List */}
      <div>
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => (
            <VendorItem
              key={vendor.id}
              vendor={vendor}
              isSelected={selectedVendors.has(vendor.id)}
              onSelect={handleSelectVendor}
            />
          ))
        ) : (
          <div className="text-center py-8 text-brand-gray-400">
            No vendors found.
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-4">
        <button className="flex items-center justify-center h-10 w-10 rounded-md border border-brand-gray-200 text-brand-gray-700 md:hidden">
          <FiChevronLeft />
        </button>
        <p className="text-sm text-brand-gray-700 my-4 md:my-0">Page 1 of 10</p>
        <div className="flex gap-2">
          <button className="hidden md:flex items-center justify-center h-10 px-4 rounded-md border border-brand-gray-200 text-brand-gray-700">
            Previous
          </button>
          <button className="h-10 w-10 md:px-4 rounded-md border border-brand-gray-200 text-brand-gray-700 flex items-center justify-center">
            <span className="hidden md:inline">Next</span>
            <FiChevronRight className="md:hidden" />
          </button>
        </div>
      </div>
    </Widget>
  );
};
