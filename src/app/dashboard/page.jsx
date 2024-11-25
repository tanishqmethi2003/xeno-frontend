
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../../utils/firebase";
import axios from "axios";

const MetricsDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalCustomers: 0,
    completedCampaigns: 0,
    messageSuccessRate: "0.00%",
    failedDeliveries: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/metric/get");
        console.log(response);
        setMetrics(response.data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="gap-6 flex justify-center p-6 ">
      {/* Total Customers */}
      <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-white shadow-md rounded-xl p-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-purple-700">
            Total Customers
          </h2>
          <p className="text-3xl font-bold text-purple-900">
            {metrics.totalCustomers}
          </p>
        </div>
        <div className="text-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
      </div>

      {/* Completed Campaigns */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-white shadow-md rounded-xl p-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-blue-700">
            Completed Message Deliveries
          </h2>
          <p className="text-3xl font-bold text-blue-900">
            {metrics.totalSentMessages}
          </p>
        </div>
        <div className="text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
        </div>
      </div>

      {/* Message Success Rate */}
      <div className="bg-gradient-to-r from-green-100 via-green-50 to-white shadow-md rounded-xl p-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-green-700">
            Message Success Rate
          </h2>
          <p className="text-3xl font-bold text-green-900">
            {metrics.successRate}
          </p>
        </div>
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bar-chart3"
          >
            <path d="M3 3v18h18"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        </div>
      </div>

      {/* Failed Deliveries */}
      <div className="bg-gradient-to-r from-red-100 via-red-50 to-white shadow-md rounded-xl p-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-red-700">
            Failed Deliveries
          </h2>
          <p className="text-3xl font-bold text-red-900">
            {metrics.totalFailedMessages}
          </p>
        </div>
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-alert-triangle"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Welcome to Mini CRM
      </h1>
      <div className="flex flex-col space-y-4">
        <Link href="/campaigns" legacyBehavior>
          <a className="flex items-center justify-center w-64 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            View Campaigns
          </a>
        </Link>
        <Link href="/create-campaign" legacyBehavior>
          <a className="flex items-center justify-center w-64 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Create Campaign
          </a>
        </Link>
      </div>

      <MetricsDashboard />
    </div>
  );
};

export default Dashboard;

