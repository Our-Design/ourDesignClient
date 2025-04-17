"use client";
import React, { useEffect, useState } from "react";
import { Lead } from "@/types";
import LeadCard from "@/app/dashboard/components/LeadCard";

const MyLeadsList = ({ leads }: { leads: Lead[] }) => {
  const [leadsData, setLeadsData] = useState<Lead[]>(leads);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setLeadsData(leads);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();

    const filteredLeads = leads.filter((lead) => {
      const { customerName, address } = lead;

      const matchName = customerName.toLowerCase().includes(lowerQuery);

      const matchAddress = Object.values(address).some((field) =>
        field.toLowerCase().includes(lowerQuery)
      );

      return matchName || matchAddress;
    });

    setLeadsData(filteredLeads);
  }, [searchQuery, leads]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or address..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="outline-none bg-white rounded-lg p-3 my-8 font-semibold lg:w-[25%] w-[90%] shadow-lg"
      />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {leadsData.length ? (
          leadsData.map((lead: Lead) => (
            <LeadCard key={lead._id} leadDetails={lead} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No leads found
          </p>
        )}
      </div>
    </div>
  );
};

export default MyLeadsList;
