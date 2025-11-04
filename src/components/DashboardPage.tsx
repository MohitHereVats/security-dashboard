import React from "react";
import { Widget } from "./widget";
import { VendorBarChart } from "./VendorBarChart";
import { VendorGaugeChart } from "./VendorGaugeChart";
import { VendorMovements } from "./VendorMovements";
import { Button } from "./Buttons";
import {
  FiTrendingUp,
  FiMoreHorizontal,
  FiZap,
  FiArrowUp,
  FiMenu,
} from "react-icons/fi";

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <div
        className="
        grid grid-cols-1 gap-6
        lg:grid-cols-3
      "
      >
        {/* Vendor Breakdown (Bar Chart) - Spans 2 columns on desktop */}
        <Widget className="lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <div className="w-10 h-10 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                <FiTrendingUp className="w-6 h-6 text-brand-gray-700" />{" "}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-brand-gray-900">
                  Vendor breakdown
                </h2>
                <p className="text-sm text-brand-gray-400">
                  Keep track of vendors and their security ratings.
                </p>
              </div>
            </div>
            {/* Desktop only button */}
            <Button
              variant="secondary"
              className="hidden md:flex px-4 py-2 text-sm"
            >
              View full report
            </Button>{" "}
          </div>
          <VendorBarChart />
          <div className="flex justify-end mt-4">
            {" "}
            <Button variant="secondary" className="md:hidden px-4 py-2 text-sm">
              View full report
            </Button>
          </div>
        </Widget>
        {/* Vendors Monitored (Gauge Chart) - Spans 1 column on desktop */}
        <Widget className="lg:col-span-1 flex flex-col p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-brand-gray-900">
              Vendors monitored
            </h2>
            <FiMoreHorizontal className="w-5 h-5 text-brand-gray-400" />
          </div>

          <p className="text-sm text-brand-gray-400">
            You're using 80% of available spots.
          </p>

          <div className="relative my-4">
            <VendorGaugeChart />
            {/* Top-right "10%" text */}
            <div className="absolute top-0 right-0 flex items-center text-sm text-green-500">
              <FiArrowUp className="w-4 h-4 mr-1" />
              10%
            </div>
          </div>

          <div className="text-center -mt-8">
            <div className="text-4xl font-bold text-brand-gray-900">240</div>
          </div>

          <div className="text-center mt-4 flex-grow">
            <p className="text-sm font-medium text-brand-gray-900">
              You've almost reached your limit
            </p>
            <p className="text-xs text-brand-gray-400 mt-1">
              You have used 80% of your available spots. Upgrade plan to monitor
              more vendors.
            </p>
          </div>

          <div className="mt-auto pt-4 border-brand-gray-200">
            <Button
              variant="secondary"
              className="w-full text-sm"
              icon={<FiZap />}
            >
              Upgrade plan
            </Button>
          </div>
        </Widget>

        {/* Vendor Movements (Table) - Spans all 3 columns on desktop */}
        <div className="lg:col-span-3">
          <VendorMovements />
        </div>
      </div>
    </div>
  );
};
