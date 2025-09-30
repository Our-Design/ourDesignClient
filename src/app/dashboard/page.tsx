import { fetchAllLeads } from "@/actions/fetchAllLeads";
import React from "react";
import LeadsList from "./components/LeadsList";
import ZeroStateComponent from "@/components/ZeroStateComponent";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

const Dashboard = async () => {
  const isAuthorized = (await cookies()).get("accessToken")?.value;
  let leadsResult: Awaited<ReturnType<typeof fetchAllLeads>> | undefined;

  if (isAuthorized?.length) {
    leadsResult = await fetchAllLeads();
  }

  const hasLeads = leadsResult?.success && (leadsResult.data?.length || 0) > 0;

  return (
    <main className="p-8 bg-secondary py-12">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-accent">Explore your leads now.</p>

      {isAuthorized?.length ? (
        leadsResult ? (
          hasLeads ? (
            <LeadsList leads={leadsResult.data!} />
          ) : leadsResult.success ? (
            <ZeroStateComponent text="No leads available" />
          ) : (
            <div className="flex flex-col items-center gap-4 py-12">
              <Image
                src="/not-found.jpg"
                alt="error"
                width={300}
                height={300}
              />
              <p className="text-center text-red-600">
                {leadsResult.message || "Failed to load leads."}
              </p>
              <Link
                href="/dashboard"
                className="bg-primary font-bold text-white px-6 py-2 rounded-md"
              >
                Retry
              </Link>
            </div>
          )
        ) : (
          <ZeroStateComponent text="No leads available" />
        )
      ) : (
        <div className="flex flex-col items-center gap-4 py-12">
          <Image
            src="/not-authorized.png"
            alt="not authorized"
            width={250}
            height={250}
          />
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
