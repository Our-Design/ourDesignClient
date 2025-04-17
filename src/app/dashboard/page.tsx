import { fetchAllLeads } from "@/actions/fetchAllLeads";
import React from "react";
import LeadsList from "./components/LeadsList";
import ZeroStateComponent from "@/components/ZeroStateComponent";
import { cookies } from "next/headers";
import Link from "next/link";

const Dashboard = async () => {
  const isAuthorized = (await cookies()).get("accessToken")?.value;
  let leads;

  if (isAuthorized?.length) {
    leads = await fetchAllLeads();
  }

  return (
    <main className="p-8 bg-secondary py-12">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-accent">Explore your leads now.</p>

      {isAuthorized?.length ? (
        leads?.data?.length ? (
          <LeadsList leads={leads.data} />
        ) : (
          <ZeroStateComponent text="No leads available" />
        )
      ) : (
        <div className="flex flex-col items-center gap-4 py-12">
          <p>You need to login to see leads.</p>
          <Link
            href="/login"
            className="bg-primary font-bold text-white px-6 py-2 rounded-md"
          >
            Login Now
          </Link>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
