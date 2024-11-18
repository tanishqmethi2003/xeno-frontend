// "use client";

// import { useState, ChangeEvent, FormEvent, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { createCampaign, checkAudienceSize } from "../../utils/api";
// import { toast } from "react-toastify";

// interface Rule {
//   field: string;
//   operator: string;
//   value: string;
//   condition: string;
// }

// interface Audience {
//   campaignName: string;
//   campaignMessage: string;
//   rules: Rule[];
// }

// const availableFields = [
//   { label: "Total Spends", value: "total_spends" },
//   { label: "Visits", value: "visits" },
//   { label: "Last Visit", value: "last_visit" },
// ];

// const operators = [
//   { label: "Equals", value: "=" },
//   { label: "Not Equals", value: "!=" },
//   { label: "Greater Than", value: ">" },
//   { label: "Less Than", value: "<" },
//   { label: "Greater or Equals", value: ">=" },
//   { label: "Less or Equals", value: "<=" },
// ];

// export default function CreateAudience() {
//   const [audience, setAudience] = useState<Audience>({
//     campaignName: "",
//     campaignMessage: "",
//     rules: [],
//   });
//   const [audienceSize, setAudienceSize] = useState<number | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchAudienceSize = async () => {
//       try {
//         const size = await checkAudienceSize(audience);
//         setAudienceSize(size);
//       } catch (error) {
//         console.error("Failed to check audience size:", error);
//       }
//     };

//     fetchAudienceSize();
//   }, [audience]);

//   const addRule = () => {
//     setAudience({
//       ...audience,
//       rules: [
//         ...audience.rules,
//         {
//           field: availableFields[0].value,
//           operator: operators[0].value,
//           value: "",
//           condition: "AND",
//         },
//       ],
//     });
//   };

//   const removeRule = (index: number) => {
//     const rules = [...audience.rules];
//     rules.splice(index, 1);
//     setAudience({ ...audience, rules });
//   };

//   const handleChange =
//     (index: number, field: string) =>
//     (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//       const rules = [...audience.rules];
//       rules[index] = { ...rules[index], [field]: e.target.value };
//       setAudience({ ...audience, rules });
//     };

//   const handleCampaignNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setAudience({ ...audience, campaignName: e.target.value });
//   };

//   const handleCampaignMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setAudience({ ...audience, campaignMessage: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       await createCampaign(audience);
//       toast.success("Campaign created successfully");
//       router.push("/campaigns");
//     } catch (error) {
//       console.error("Error creating campaign:", error);
//       toast.error("Failed to create campaign");
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800">Create Campaign</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 bg-white p-8 shadow-lg rounded-lg"
//       >
//         <div className="space-y-4">
//           <div>
//             <label
//               htmlFor="campaignName"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Campaign Name
//             </label>
//             <input
//               type="text"
//               id="campaignName"
//               placeholder="Campaign Name"
//               value={audience.campaignName}
//               onChange={handleCampaignNameChange}
//               className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="campaignMessage"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Campaign Message
//             </label>
//             <input
//               type="text"
//               id="campaignMessage"
//               placeholder="Campaign Message (e.g., Hi {customer_name}, here is your 10% discount)"
//               value={audience.campaignMessage}
//               onChange={handleCampaignMessageChange}
//               className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>
//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             Add Campaign Audience Rules
//           </h2>
//           {audience.rules.length === 0 ? (
//             <div className="p-4 bg-blue-100 text-blue-700 rounded-lg border border-blue-500">
//               <p>All customers will be included if no rules are added.</p>
//             </div>
//           ) : (
//             audience.rules.map((rule, index) => (
//               <div key={index} className="flex space-x-4 items-center">
//                 <select
//                   value={rule.field}
//                   onChange={handleChange(index, "field")}
//                   className="flex-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {availableFields.map((field) => (
//                     <option key={field.value} value={field.value}>
//                       {field.label}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={rule.operator}
//                   onChange={handleChange(index, "operator")}
//                   className="flex-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {operators.map((operator) => (
//                     <option key={operator.value} value={operator.value}>
//                       {operator.label}
//                     </option>
//                   ))}
//                 </select>
//                 {rule.field === "last_visit" ? (
//                   <input
//                     type="date"
//                     value={rule.value}
//                     onChange={handleChange(index, "value")}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     placeholder="Value"
//                     value={rule.value}
//                     onChange={handleChange(index, "value")}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 )}
//                 {index > 0 && (
//                   <select
//                     value={rule.condition}
//                     onChange={handleChange(index, "condition")}
//                     className="flex-1 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="AND">AND</option>
//                     <option value="OR">OR</option>
//                   </select>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => removeRule(index)}
//                   className="p-2 text-red-600 hover:text-red-800 transition-all"
//                 >
//                   <svg
//                     aria-hidden="true"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="h-6 w-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             ))
//           )}
//           <div className="flex space-x-4">
//             <button
//               type="button"
//               onClick={addRule}
//               className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-all flex items-center"
//             >
//               <svg
//                 aria-hidden="true"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="h-6 w-6 mr-2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 4v16m8-8H4"
//                 />
//               </svg>
//               Add Rule
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-between items-center mt-6">
//           <button
//             type="submit"
//             className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all flex items-center"
//           >
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
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             Send Campaign
//           </button>
//           <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//             <p className="text-lg font-semibold text-gray-800">
//               Audience Size:{" "}
//               {audienceSize !== null ? audienceSize : "Calculating..."}
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }






// 'use client'

// import { useState, ChangeEvent, FormEvent, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { createCampaign, checkAudienceSize } from "../../utils/api"
// import { toast } from "react-toastify"
// import { Rocket, SpaceIcon as Planet, Star, X, Plus, ChevronRight } from 'lucide-react'

// interface Rule {
//   field: string
//   operator: string
//   value: string
//   condition: string
// }

// interface Mission {
//   missionName: string
//   missionObjective: string
//   crewSelectionCriteria: Rule[]
// }

// const crewAttributes = [
//   { label: "Experience Points", value: "total_spends" },
//   { label: "Space Missions", value: "visits" },
//   { label: "Last Mission", value: "last_visit" },
// ]

// const comparisonOperators = [
//   { label: "Exactly", value: "=" },
//   { label: "Not", value: "!=" },
//   { label: "More than", value: ">" },
//   { label: "Less than", value: "<" },
//   { label: "At least", value: ">=" },
//   { label: "At most", value: "<=" },
// ]

// export default function MissionPlanner() {
//   const [mission, setMission] = useState<Mission>({
//     missionName: "",
//     missionObjective: "",
//     crewSelectionCriteria: [],
//   })
//   const [crewSize, setCrewSize] = useState<number | null>(null)
//   const router = useRouter()

//   useEffect(() => {
//     const calculateCrewSize = async () => {
//       try {
//         const size = await checkAudienceSize(mission)
//         setCrewSize(size)
//       } catch (error) {
//         console.error("Failed to calculate crew size:", error)
//       }
//     }

//     calculateCrewSize()
//   }, [mission])

//   const addCriterion = () => {
//     setMission({
//       ...mission,
//       crewSelectionCriteria: [
//         ...mission.crewSelectionCriteria,
//         {
//           field: crewAttributes[0].value,
//           operator: comparisonOperators[0].value,
//           value: "",
//           condition: "AND",
//         },
//       ],
//     })
//   }

//   const removeCriterion = (index: number) => {
//     const criteria = [...mission.crewSelectionCriteria]
//     criteria.splice(index, 1)
//     setMission({ ...mission, crewSelectionCriteria: criteria })
//   }

//   const handleChange =
//     (index: number, field: string) =>
//     (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//       const criteria = [...mission.crewSelectionCriteria]
//       criteria[index] = { ...criteria[index], [field]: e.target.value }
//       setMission({ ...mission, crewSelectionCriteria: criteria })
//     }

//   const handleMissionNameChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setMission({ ...mission, missionName: e.target.value })
//   }

//   const handleMissionObjectiveChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setMission({ ...mission, missionObjective: e.target.value })
//   }

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()
//     try {
//       await createCampaign(mission)
//       toast.success("Mission launched successfully")
//       router.push("/missions")
//     } catch (error) {
//       console.error("Error launching mission:", error)
//       toast.error("Failed to launch mission")
//     }
//   }

//   return (
//     <div className="container mx-auto bg-gray-900 text-white min-h-screen p-8">
//       <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Space Mission Planner</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="missionName" className="block text-blue-300 font-semibold mb-2">
//               Mission Name
//             </label>
//             <input
//               type="text"
//               id="missionName"
//               placeholder="Enter mission name"
//               value={mission.missionName}
//               onChange={handleMissionNameChange}
//               className="w-full p-3 bg-gray-800 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div>
//             <label htmlFor="missionObjective" className="block text-blue-300 font-semibold mb-2">
//               Mission Objective
//             </label>
//             <input
//               type="text"
//               id="missionObjective"
//               placeholder="Describe the mission objective"
//               value={mission.missionObjective}
//               onChange={handleMissionObjectiveChange}
//               className="w-full p-3 bg-gray-800 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>
//         <div className="space-y-4">
//           <h2 className="text-2xl font-semibold text-blue-400">Crew Selection Criteria</h2>
//           {mission.crewSelectionCriteria.length === 0 ? (
//             <div className="p-4 bg-blue-900 text-blue-200 rounded-lg border border-blue-700">
//               <p>All available astronauts will be considered if no criteria are specified.</p>
//             </div>
//           ) : (
//             mission.crewSelectionCriteria.map((criterion, index) => (
//               <div key={index} className="flex space-x-4 items-center bg-gray-800 p-4 rounded-lg">
//                 <select
//                   value={criterion.field}
//                   onChange={handleChange(index, "field")}
//                   className="flex-1 p-3 bg-gray-700 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 >
//                   {crewAttributes.map((attr) => (
//                     <option key={attr.value} value={attr.value}>
//                       {attr.label}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={criterion.operator}
//                   onChange={handleChange(index, "operator")}
//                   className="flex-1 p-3 bg-gray-700 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 >
//                   {comparisonOperators.map((op) => (
//                     <option key={op.value} value={op.value}>
//                       {op.label}
//                     </option>
//                   ))}
//                 </select>
//                 {criterion.field === "last_visit" ? (
//                   <input
//                     type="date"
//                     value={criterion.value}
//                     onChange={handleChange(index, "value")}
//                     className="flex-1 p-3 bg-gray-700 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 ) : (
//                   <input
//                     type="text"
//                     placeholder="Value"
//                     value={criterion.value}
//                     onChange={handleChange(index, "value")}
//                     className="flex-1 p-3 bg-gray-700 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                 )}
//                 {index > 0 && (
//                   <select
//                     value={criterion.condition}
//                     onChange={handleChange(index, "condition")}
//                     className="flex-1 p-3 bg-gray-700 border border-blue-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   >
//                     <option value="AND">AND</option>
//                     <option value="OR">OR</option>
//                   </select>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => removeCriterion(index)}
//                   className="p-2 text-red-400 hover:text-red-600 transition-all"
//                 >
//                   <X className="h-6 w-6" />
//                 </button>
//               </div>
//             ))
//           )}
//           <div className="flex space-x-4">
//             <button
//               type="button"
//               onClick={addCriterion}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all flex items-center"
//             >
//               <Plus className="h-6 w-6 mr-2" />
//               Add Criterion
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-between items-center mt-6">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all flex items-center text-lg"
//           >
//             <Rocket className="h-6 w-6 mr-2" />
//             Launch Mission
//           </button>
//           <div className="bg-blue-900 p-4 rounded-lg shadow-md flex items-center space-x-4">
//             <Star className="h-6 w-6 text-yellow-400" />
//             <p className="text-lg font-semibold text-blue-200">
//               Crew Size: {crewSize !== null ? crewSize : "Calculating..."}
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }


"use client"

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createCampaign, checkAudienceSize } from "../../utils/api"
import { toast } from "react-toastify"
import { PlusCircle, X, Send, Users } from 'lucide-react'

interface Rule {
  field: string
  operator: string
  value: string
  condition: string
}

interface Audience {
  campaignName: string
  campaignMessage: string
  rules: Rule[]
}

const availableFields = [
  { label: "Total Spends", value: "total_spends" },
  { label: "Visits", value: "visits" },
  { label: "Last Visit", value: "last_visit" },
]

const operators = [
  { label: "Equals", value: "=" },
  { label: "Not Equals", value: "!=" },
  { label: "Greater Than", value: ">" },
  { label: "Less Than", value: "<" },
  { label: "Greater or Equals", value: ">=" },
  { label: "Less or Equals", value: "<=" },
]

export default function CreateAudience() {
  const [audience, setAudience] = useState<Audience>({
    campaignName: "",
    campaignMessage: "",
    rules: [],
  })
  const [audienceSize, setAudienceSize] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchAudienceSize = async () => {
      try {
        const size = await checkAudienceSize(audience)
        setAudienceSize(size)
      } catch (error) {
        console.error("Failed to check audience size:", error)
      }
    }

    fetchAudienceSize()
  }, [audience])

  const addRule = () => {
    setAudience({
      ...audience,
      rules: [
        ...audience.rules,
        {
          field: availableFields[0].value,
          operator: operators[0].value,
          value: "",
          condition: "AND",
        },
      ],
    })
  }

  const removeRule = (index: number) => {
    const rules = [...audience.rules]
    rules.splice(index, 1)
    setAudience({ ...audience, rules })
  }

  const handleChange =
    (index: number, field: string) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const rules = [...audience.rules]
      rules[index] = { ...rules[index], [field]: e.target.value }
      setAudience({ ...audience, rules })
    }

  const handleCampaignNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAudience({ ...audience, campaignName: e.target.value })
  }

  const handleCampaignMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAudience({ ...audience, campaignMessage: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createCampaign(audience)
      toast.success("Campaign created successfully")
      router.push("/campaigns")
    } catch (error) {
      console.error("Error creating campaign:", error)
      toast.error("Failed to create campaign")
    }
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create Campaign</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="campaignName" style={styles.label}>
            Campaign Name
          </label>
          <input
            type="text"
            id="campaignName"
            placeholder="Campaign Name"
            value={audience.campaignName}
            onChange={handleCampaignNameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="campaignMessage" style={styles.label}>
            Campaign Message
          </label>
          <input
            type="text"
            id="campaignMessage"
            placeholder="Campaign Message (e.g., Hi {customer_name}, here is your 10% discount)"
            value={audience.campaignMessage}
            onChange={handleCampaignMessageChange}
            style={styles.input}
          />
        </div>
        <h2 style={styles.subtitle}>Add Campaign Audience Rules</h2>
        {audience.rules.length === 0 ? (
          <div style={styles.infoBox}>
            <p>All customers will be included if no rules are added.</p>
          </div>
        ) : (
          audience.rules.map((rule, index) => (
            <div key={index} style={styles.ruleContainer}>
              <select
                value={rule.field}
                onChange={handleChange(index, "field")}
                style={styles.select}
              >
                {availableFields.map((field) => (
                  <option key={field.value} value={field.value}>
                    {field.label}
                  </option>
                ))}
              </select>
              <select
                value={rule.operator}
                onChange={handleChange(index, "operator")}
                style={styles.select}
              >
                {operators.map((operator) => (
                  <option key={operator.value} value={operator.value}>
                    {operator.label}
                  </option>
                ))}
              </select>
              {rule.field === "last_visit" ? (
                <input
                  type="date"
                  value={rule.value}
                  onChange={handleChange(index, "value")}
                  style={styles.input}
                />
              ) : (
                <input
                  type="text"
                  placeholder="Value"
                  value={rule.value}
                  onChange={handleChange(index, "value")}
                  style={styles.input}
                />
              )}
              {index > 0 && (
                <select
                  value={rule.condition}
                  onChange={handleChange(index, "condition")}
                  style={styles.select}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              )}
              <button
                type="button"
                onClick={() => removeRule(index)}
                style={styles.removeButton}
              >
                <X size={20} />
              </button>
            </div>
          ))
        )}
        <button type="button" onClick={addRule} style={styles.addButton}>
          <PlusCircle size={20} style={styles.buttonIcon} />
          Add Rule
        </button>
        <div style={styles.footer}>
          <button type="submit" style={styles.submitButton}>
            <Send size={20} style={styles.buttonIcon} />
            Send Campaign
          </button>
          <div style={styles.audienceSize}>
            <Users size={20} style={styles.buttonIcon} />
            <p>
              Audience Size:{" "}
              {audienceSize !== null ? audienceSize : "Calculating..."}
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "2rem",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
    color: "#34495e",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #bdc3c7",
    borderRadius: "4px",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "1rem",
  },
  infoBox: {
    backgroundColor: "#e3f2fd",
    color: "#1565c0",
    padding: "1rem",
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  ruleContainer: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    alignItems: "center",
  },
  select: {
    flex: 1,
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #bdc3c7",
    borderRadius: "4px",
    color: "#2c3e50",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem",
    cursor: "pointer",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3498db",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    marginBottom: "1.5rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submitButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
  audienceSize: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: "0.75rem",
    borderRadius: "4px",
    color: "#2c3e50",
  },
  buttonIcon: {
    marginRight: "0.5rem",
  },
}