import { fetchMyLeads } from "@/actions/fetchMyLeads";
import React from "react";
import { toast } from "react-toastify";
import MyLeadsList from "./components/LeadsList";
import ZeroStateComponent from "@/components/ZeroStateComponent";
import Link from "next/link";

const MyLeads = async () => {
  const leads = await fetchMyLeads();

  if (!leads.success) {
    toast.error("Failed to fetch your leads!");
  }

  return (
    <div className="bg-secondary p-8 py-12">
      <h2 className="text-2xl font-bold">My Leads</h2>
      <p>Leads which you buy show up here.</p>

      {leads?.data?.length ? (
        <MyLeadsList leads={leads.data} />
      ) : (
        <div className="flex flex-col items-center gap-3">
          <ZeroStateComponent text="No leads available here!" />
          <Link
            href="/dashboard"
            className="bg-primary rounded-lg px-6 py-2 font-bold text-white"
          >
            Buy Leads Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyLeads;
