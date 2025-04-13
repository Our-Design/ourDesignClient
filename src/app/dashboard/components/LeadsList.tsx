"use client";
import { Lead } from "@/types";
import React, { useEffect, useState } from "react";
import LeadCard from "./LeadCard";
import { TiTick } from "react-icons/ti";
import { BsFilterLeft } from "react-icons/bs";
import ZeroStateComponent from "@/components/ZeroStateComponent";

const LeadsList = ({ leads }: { leads: Lead[] }) => {
  const [leadsData, setLeadsData] = useState(leads);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filterOptions = [
    {
      label: "All",
    },
    {
      label: "Available",
    },
    {
      label: "Sold-Out",
    },
  ];

  useEffect(() => {
    if (selectedFilter === "All") {
      setLeadsData(leads);
    } else if (selectedFilter === "Available") {
      setLeadsData(leads.filter((lead) => lead.status === "new"));
    } else if (selectedFilter === "Sold-Out") {
      setLeadsData(leads.filter((lead) => lead.status !== "new"));
    }
  }, [selectedFilter, leads]);

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <BsFilterLeft className="lg:text-3xl text-2xl" />
        {filterOptions.map((filter) => {
          return (
            <div
              key={filter.label}
              className={`rounded-3xl p-2 lg:px-6 px-4 lg:text-sm text-xs flex items-center gap-1 shadow-lg cursor-pointer hover:scale-102 ${
                selectedFilter === filter.label
                  ? "bg-primary text-white font-bold"
                  : "bg-white font-bold"
              }`}
              onClick={() => setSelectedFilter(filter.label)}
            >
              {selectedFilter === filter.label && <TiTick />}
              <span>{filter.label}</span>
            </div>
          );
        })}
      </div>

      <div className="my-10">
        {leadsData.length ? (
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {leadsData.map((lead: Lead) => {
              return <LeadCard key={lead._id} leadDetails={lead} />;
            })}
          </div>
        ) : (
          <ZeroStateComponent text="No such leads available" />
        )}
      </div>
    </div>
  );
};

export default LeadsList;
