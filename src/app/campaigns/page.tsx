// "use client";

// import { useState, useEffect } from "react";
// import CampaignCard from "../../components/CampaignCard";
// import { fetchCampaigns } from "../../utils/api";
// import { toast } from "react-toastify";

// interface AudienceRule {
//   field: string;
//   operator: string;
//   value: string;
//   condition: string;
// }

// interface Campaign {
//   _id: string;
//   campaignName: string;
//   campaignMessage: string;
//   audienceRules: AudienceRule[];
//   audienceSize: number;
//   deliveryStatus: string;
//   sentCount: number;
//   failedCount: number;
//   createdAt: string;
// }

// export default function Campaigns() {
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);
//   const [selectedRules, setSelectedRules] = useState<AudienceRule[] | null>(
//     null
//   );

//   const getCampaigns = async () => {
//     try {
//       const data = await fetchCampaigns();
//       setCampaigns(data);
//     } catch (error) {
//       console.error("Error fetching campaigns:", error);
//     }
//   };

//   useEffect(() => {
//     getCampaigns();
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Campaigns</h1>
//         <button
//           onClick={() => {
//             toast.success("Campaigns refreshed");
//             getCampaigns();
//           }}
//           className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-xenoBlue rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
//         >
//           <svg className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
//             <path d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" />
//           </svg>

//           <span className="mx-1">Refresh</span>
//         </button>
//       </div>
//       {campaigns.length === 0 ? (
//         <div className="text-center text-gray-500">
//           <p>No past campaigns found.</p>
//         </div>
//       ) : (
//         <div className="flex flex-col">
//           <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
//             <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
//               <table className="min-w-full">
//                 <thead>
//                   <tr>
//                     <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                       Campaign Name
//                     </th>
//                     <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                       Campaign Message
//                     </th>
//                     <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                       Audience
//                     </th>
//                     <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                       Audience Rules
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white">
//                   {campaigns.map((campaign) => (
//                     <CampaignCard
//                       key={campaign._id}
//                       campaign={campaign}
//                       onViewRules={setSelectedRules}
//                     />
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedRules && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full relative transition-transform transform scale-95 hover:scale-100 duration-200 ease-in-out">
//             <h3 className="text-2xl font-bold mb-6 text-gray-800">
//               Audience Rules
//             </h3>
//             {selectedRules.length === 0 ? (
//               <p className="text-gray-700 font-medium">All customers</p>
//             ) : (
//               <ul className="space-y-4">
//                 {selectedRules.map((rule, index) => (
//                   <li key={index} className="p-4 border rounded-lg bg-gray-100">
//                     <p className="text-gray-700 font-medium">
//                       {rule.field} {rule.operator} {rule.value} (
//                       {rule.condition})
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//             <button
//               onClick={() => setSelectedRules(null)}
//               className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors duration-200"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// "use client"

// import { useState, useEffect } from "react"
// import { toast } from "react-toastify"
// import { fetchCampaigns } from "../../utils/api"
// // import { Button } from "@/components/ui/button"
// import Button from '@mui/material/Button';
// import {
//   TableContainer,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { Card, CardContent, CardHeader } from "@mui/material";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
// } from "@mui/material";
// import { Chip as Badge } from "@mui/material"; // Material-UI's Chip component works as a Badge alternative

// import { Globe, Users, MessageSquare, RefreshCcw, Zap, Star } from 'lucide-react'

// interface ClientSegmentRule {
//   attribute: string
//   comparison: string
//   threshold: string
//   logic: string
// }

// interface GalacticCampaign {
//   _id: string
//   campaignName: string
//   communique: string
//   clientSegmentRules: ClientSegmentRule[]
//   reachEstimate: number
//   transmissionStatus: string
//   successfulTransmissions: number
//   failedTransmissions: number
//   launchStardate: string
// }

// function CampaignCard({ campaign, onViewSegment }: { campaign: GalacticCampaign; onViewSegment: (rules: ClientSegmentRule[]) => void }) {
//   return (
//     <TableRow>
//       <TableCell className="font-medium">{campaign.campaignName}</TableCell>
//       <TableCell>{campaign.communique}</TableCell>
//       <TableCell>{campaign.reachEstimate}</TableCell>
//       <TableCell>
//         <Badge variant={campaign.transmissionStatus === "Completed" ? "success" : "warning"}>
//           {campaign.transmissionStatus}
//         </Badge>
//       </TableCell>
//       <TableCell>
//         <Button variant="outline" size="sm" onClick={() => onViewSegment(campaign.clientSegmentRules)}>
//           <Star className="mr-2 h-4 w-4" />
//           View Segment
//         </Button>
//       </TableCell>
//     </TableRow>
//   )
// }

// export default function GalacticRelations() {
//   const [campaigns, setCampaigns] = useState<GalacticCampaign[]>([])
//   const [selectedSegment, setSelectedSegment] = useState<ClientSegmentRule[] | null>(null)

//   const getCampaigns = async () => {
//     try {
//       const data = await fetchCampaigns()
//       setCampaigns(data.map((campaign: any) => ({
//         _id: campaign._id,
//         campaignName: campaign.campaignName,
//         communique: campaign.campaignMessage,
//         clientSegmentRules: campaign.audienceRules.map((rule: any) => ({
//           attribute: rule.field,
//           comparison: rule.operator,
//           threshold: rule.value,
//           logic: rule.condition,
//         })),
//         reachEstimate: campaign.audienceSize,
//         transmissionStatus: campaign.deliveryStatus,
//         successfulTransmissions: campaign.sentCount,
//         failedTransmissions: campaign.failedCount,
//         launchStardate: campaign.createdAt,
//       })))
//     } catch (error) {
//       console.error("Error fetching galactic campaigns:", error)
//     }
//   }

//   useEffect(() => {
//     getCampaigns()
//   }, [])

//   return (
//     <div className="container mx-auto p-6 space-y-8 bg-gray-900 text-white min-h-screen">
//       <div className="flex items-center justify-between">
//         <h1 className="text-4xl font-bold text-purple-400">Galactic Customer Relations</h1>
//         <Button onClick={() => { toast.success("Interstellar data updated"); getCampaigns() }} variant="outline">
//           <RefreshCcw className="mr-2 h-4 w-4" />
//           Update Galactic Data
//         </Button>
//       </div>
      
//       {campaigns.length === 0 ? (
//         <Card>
//           <CardContent className="pt-6 text-center text-gray-400">
//             <p>No active galactic campaigns found in this sector.</p>
//           </CardContent>
//         </Card>
//       ) : (
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center text-purple-400">
//               <Globe className="mr-2" />
//               Active Interstellar Campaigns
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="text-purple-400">Campaign Name</TableHead>
//                   <TableHead className="text-purple-400">Communiqué</TableHead>
//                   <TableHead className="text-purple-400">Estimated Reach</TableHead>
//                   <TableHead className="text-purple-400">Status</TableHead>
//                   <TableHead className="text-purple-400">Client Segment</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {campaigns.map((campaign) => (
//                   <CampaignCard key={campaign._id} campaign={campaign} onViewSegment={setSelectedSegment} />
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       )}

//       <Dialog open={selectedSegment !== null} onOpenChange={(open) => !open && setSelectedSegment(null)}>
//         <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
//           <DialogHeader>
//             <DialogTitle className="text-purple-400 flex items-center">
//               <Users className="mr-2" />
//               Interstellar Client Segment
//             </DialogTitle>
//           </DialogHeader>
//           {selectedSegment && selectedSegment.length === 0 ? (
//             <p className="text-gray-400">All galactic entities included</p>
//           ) : (
//             <ul className="space-y-4">
//               {selectedSegment?.map((rule, index) => (
//                 <li key={index} className="p-4 border rounded-lg border-purple-500 bg-gray-700">
//                   <p className="text-gray-200">
//                     {rule.attribute} {rule.comparison} {rule.threshold} ({rule.logic})
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }



// "use client";

// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { fetchCampaigns } from "../../utils/api";
// import Button from "@mui/material/Button";
// import {
//   TableContainer,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { Card, CardContent, CardHeader } from "@mui/material";
// import { Dialog, DialogTitle, DialogContent } from "@mui/material";
// import { Chip as Badge } from "@mui/material"; // Material-UI's Chip component works as a Badge alternative

// import { Globe, Users, MessageSquare, RefreshCcw, Zap, Star } from "lucide-react";

// interface ClientSegmentRule {
//   attribute: string;
//   comparison: string;
//   threshold: string;
//   logic: string;
// }

// interface GalacticCampaign {
//   _id: string;
//   campaignName: string;
//   communique: string;
//   clientSegmentRules: ClientSegmentRule[];
//   reachEstimate: number;
//   transmissionStatus: string;
//   successfulTransmissions: number;
//   failedTransmissions: number;
//   launchStardate: string;
// }

// function CampaignCard({
//   campaign,
//   onViewSegment,
// }: {
//   campaign: GalacticCampaign;
//   onViewSegment: (rules: ClientSegmentRule[]) => void;
// }) {
//   return (
//     <TableRow>
//       <TableCell>{campaign.campaignName}</TableCell>
//       <TableCell>{campaign.communique}</TableCell>
//       <TableCell>{campaign.reachEstimate}</TableCell>
//       <TableCell>
//         <Badge
//           label={campaign.transmissionStatus}
//           color={campaign.transmissionStatus === "Completed" ? "success" : "warning"}
//         />
//       </TableCell>
//       <TableCell>
//         <Button
//           variant="outlined"
//           size="small"
//           onClick={() => onViewSegment(campaign.clientSegmentRules)}
//           startIcon={<Star />}
//         >
//           View Segment
//         </Button>
//       </TableCell>
//     </TableRow>
//   );
// }

// export default function GalacticRelations() {
//   const [campaigns, setCampaigns] = useState<GalacticCampaign[]>([]);
//   const [selectedSegment, setSelectedSegment] = useState<ClientSegmentRule[] | null>(null);

//   const getCampaigns = async () => {
//     try {
//       const data = await fetchCampaigns();
//       setCampaigns(
//         data.map((campaign: any) => ({
//           _id: campaign._id,
//           campaignName: campaign.campaignName,
//           communique: campaign.campaignMessage,
//           clientSegmentRules: campaign.audienceRules.map((rule: any) => ({
//             attribute: rule.field,
//             comparison: rule.operator,
//             threshold: rule.value,
//             logic: rule.condition,
//           })),
//           reachEstimate: campaign.audienceSize,
//           transmissionStatus: campaign.deliveryStatus,
//           successfulTransmissions: campaign.sentCount,
//           failedTransmissions: campaign.failedCount,
//           launchStardate: campaign.createdAt,
//         }))
//       );
//     } catch (error) {
//       console.error("Error fetching galactic campaigns:", error);
//     }
//   };

//   useEffect(() => {
//     getCampaigns();
//   }, []);

//   return (
//     <div style={{ backgroundColor: "#1a202c", color: "white", minHeight: "100vh", padding: "1.5rem" }}>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1 style={{ fontSize: "2rem", color: "#9f7aea" }}>Galactic Customer Relations</h1>
//         <Button
//           onClick={() => {
//             toast.success("Interstellar data updated");
//             getCampaigns();
//           }}
//           variant="outlined"
//           startIcon={<RefreshCcw />}
//         >
//           Update Galactic Data
//         </Button>
//       </div>

//       {campaigns.length === 0 ? (
//         <Card style={{ marginTop: "1.5rem", textAlign: "center", color: "#a0aec0" }}>
//           <CardContent>
//             <p>No active galactic campaigns found in this sector.</p>
//           </CardContent>
//         </Card>
//       ) : (
//         <Card style={{ marginTop: "1.5rem" }}>
//           <CardHeader>
//             <h2 style={{ color: "#9f7aea", display: "flex", alignItems: "center" }}>
//               <Globe style={{ marginRight: "0.5rem" }} />
//               Active Interstellar Campaigns
//             </h2>
//           </CardHeader>
//           <CardContent>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Campaign Name</TableCell>
//                     <TableCell>Communiqué</TableCell>
//                     <TableCell>Estimated Reach</TableCell>
//                     <TableCell>Status</TableCell>
//                     <TableCell>Client Segment</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {campaigns.map((campaign) => (
//                     <CampaignCard key={campaign._id} campaign={campaign} onViewSegment={setSelectedSegment} />
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </CardContent>
//         </Card>
//       )}

//       <Dialog open={selectedSegment !== null} onClose={() => setSelectedSegment(null)}>
//         <DialogContent style={{ backgroundColor: "#2d3748", color: "white", maxWidth: "500px" }}>
//           <DialogTitle style={{ color: "#9f7aea", display: "flex", alignItems: "center" }}>
//             <Users style={{ marginRight: "0.5rem" }} />
//             Interstellar Client Segment
//           </DialogTitle>
//           {selectedSegment && selectedSegment.length === 0 ? (
//             <p style={{ color: "#a0aec0" }}>All galactic entities included</p>
//           ) : (
//             <ul style={{ listStyle: "none", padding: 0 }}>
//               {selectedSegment?.map((rule, index) => (
//                 <li
//                   key={index}
//                   style={{
//                     padding: "1rem",
//                     border: "1px solid #9f7aea",
//                     borderRadius: "0.5rem",
//                     marginBottom: "0.5rem",
//                     backgroundColor: "#4a5568",
//                   }}
//                 >
//                   {rule.attribute} {rule.comparison} {rule.threshold} ({rule.logic})
//                 </li>
//               ))}
//             </ul>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }



"use client"

import React, { useState, useEffect } from "react"
import { fetchCampaigns } from "../../utils/api"
import { toast } from "react-toastify"
import { RefreshCw, X, Eye } from 'lucide-react'

interface AudienceRule {
  field: string
  operator: string
  value: string
  condition: string
}

interface Campaign {
  _id: string
  campaignName: string
  campaignMessage: string
  audienceRules: AudienceRule[]
  audienceSize: number
  deliveryStatus: string
  sentCount: number
  failedCount: number
  createdAt: string
}

const CampaignCard: React.FC<{
  campaign: Campaign
  onViewRules: (rules: AudienceRule[]) => void
}> = ({ campaign, onViewRules }) => {
  return (
    <tr style={styles.tableRow}>
      <td style={styles.tableCell}>{campaign.campaignName}</td>
      <td style={styles.tableCell}>{campaign.campaignMessage}</td>
      <td style={styles.tableCell}>{campaign.audienceSize}</td>
      <td style={styles.tableCell}>
        <span style={{
          ...styles.status,
          backgroundColor: campaign.deliveryStatus === 'Completed' ? '#4caf50' : '#ff9800'
        }}>
          {campaign.deliveryStatus}
        </span>
      </td>
      <td style={styles.tableCell}>
        <button
          onClick={() => onViewRules(campaign.audienceRules)}
          style={styles.viewRulesButton}
        >
          <Eye size={16} style={styles.buttonIcon} />
          View Rules
        </button>
      </td>
    </tr>
  )
}

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [selectedRules, setSelectedRules] = useState<AudienceRule[] | null>(null)

  const getCampaigns = async () => {
    try {
      const data = await fetchCampaigns()
      setCampaigns(data)
    } catch (error) {
      console.error("Error fetching campaigns:", error)
    }
  }

  useEffect(() => {
    getCampaigns()
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Campaigns</h1>
        <button
          onClick={() => {
            toast.success("Campaigns refreshed")
            getCampaigns()
          }}
          style={styles.refreshButton}
        >
          <RefreshCw size={20} style={styles.buttonIcon} />
          <span>Refresh</span>
        </button>
      </div>
      {campaigns.length === 0 ? (
        <div style={styles.noCampaigns}>
          <p>No past campaigns found.</p>
        </div>
      ) : (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Campaign Name</th>
                <th style={styles.tableHeader}>Campaign Message</th>
                <th style={styles.tableHeader}>Audience</th>
                <th style={styles.tableHeader}>Status</th>
                <th style={styles.tableHeader}>Audience Rules</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign._id}
                  campaign={campaign}
                  onViewRules={setSelectedRules}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedRules && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>Audience Rules</h3>
            {selectedRules.length === 0 ? (
              <p style={styles.modalText}>All customers</p>
            ) : (
              <ul style={styles.rulesList}>
                {selectedRules.map((rule, index) => (
                  <li key={index} style={styles.ruleItem}>
                    <p style={styles.ruleText}>
                      {rule.field} {rule.operator} {rule.value} ({rule.condition})
                    </p>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setSelectedRules(null)}
              style={styles.closeButton}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  refreshButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonIcon: {
    marginRight: '0.5rem',
  },
  noCampaigns: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '1.2rem',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0 0.5rem',
  },
  tableHeader: {
    textAlign: 'left',
    padding: '1rem',
    backgroundColor: '#ecf0f1',
    color: '#34495e',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
  },
  tableRow: {
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
  tableCell: {
    padding: '1rem',
    borderBottom: '1px solid #ecf0f1',
  },
  status: {
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  viewRulesButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 0.75rem',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    position: 'relative',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  modalText: {
    color: '#34495e',
    fontSize: '1rem',
  },
  rulesList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  ruleItem: {
    backgroundColor: '#ecf0f1',
    padding: '0.75rem',
    borderRadius: '4px',
    marginBottom: '0.5rem',
  },
  ruleText: {
    color: '#34495e',
    fontSize: '0.9rem',
  },
  closeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#7f8c8d',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
}