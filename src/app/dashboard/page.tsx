// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { auth } from "../../utils/firebase";

// const Dashboard: React.FC = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (!user) {
//         router.push("/");
//       } else {
//         setLoading(false);
//       }
//     });
//     return () => unsubscribe();
//   }, [router]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800">
//         Welcome to Mini CRM
//       </h1>
//       <div className="flex flex-col space-y-4">
//         <Link href="/campaigns" legacyBehavior>
//           <a className="flex items-center justify-center w-64 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6 mr-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//               />
//             </svg>
//             View Campaigns
//           </a>
//         </Link>
//         <Link href="/create-campaign" legacyBehavior>
//           <a className="flex items-center justify-center w-64 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
//             <svg
//               aria-hidden="true"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="h-6 w-6 mr-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//               />
//             </svg>
//             Create Campaign
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { auth } from "../../utils/firebase"
import { BarChart2, PlusCircle } from 'lucide-react'

const Dashboard: React.FC = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/")
      } else {
        setLoading(false)
      }
    })
    return () => unsubscribe()
  }, [router])

  if (loading) {
    return <div style={styles.loading}>Loading...</div>
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Mini CRM</h1>
      <div style={styles.cardContainer}>
        <Link href="/campaigns" style={styles.card}>
          <BarChart2 style={styles.icon} />
          <span style={styles.cardText}>View Campaigns</span>
        </Link>
        <Link href="/create-campaign" style={styles.card}>
          <PlusCircle style={styles.icon} />
          <span style={styles.cardText}>Create Campaign</span>
        </Link>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "2rem",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    maxWidth: "300px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#ffffff",
    color: "#34495e",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  icon: {
    width: "24px",
    height: "24px",
    marginRight: "0.5rem",
  },
  cardText: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontSize: "1.5rem",
    color: "#2c3e50",
  },
}

export default Dashboard