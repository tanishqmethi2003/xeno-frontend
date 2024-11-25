"use client";

import React, { useState, useEffect } from "react";
import { fetchCampaigns } from "../../utils/api";
import { toast } from "react-toastify";
import { RefreshCw, X, Eye } from "lucide-react";

const CampaignCard = ({ campaign, onViewRules }) => {
  return (
    <tr style={styles.tableRow}>
      <td style={styles.tableCell}>{campaign.campaignName}</td>
      <td style={styles.tableCell}>{campaign.campaignMessage}</td>
      <td style={styles.tableCell}>{campaign.audienceSize}</td>
      <td style={styles.tableCell}>
        <span
          style={{
            ...styles.status,
            backgroundColor:
              campaign.deliveryStatus === "Completed" ? "#4caf50" : "#ff9800",
          }}
        >
          {campaign.sentCount} | {campaign.failedCount}
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
  );
};

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedRules, setSelectedRules] = useState(null);

  const getCampaigns = async () => {
    try {
      const data = await fetchCampaigns();
      setCampaigns(data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Campaigns</h1>
        <button
          onClick={() => {
            toast.success("Campaigns refreshed");
            getCampaigns();
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
                      {index > 0 ? `${rule.condition} ` : ""}
                      {rule.field} {rule.operator} {rule.value}
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
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  refreshButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3498db",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonIcon: {
    marginRight: "0.5rem",
  },
  noCampaigns: {
    textAlign: "center",
    color: "#7f8c8d",
    fontSize: "1.2rem",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 0.5rem",
  },
  tableHeader: {
    textAlign: "left",
    padding: "1rem",
    backgroundColor: "#ecf0f1",
    color: "#34495e",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textTransform: "uppercase",
  },
  tableRow: {
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  },
  tableCell: {
    padding: "1rem",
    borderBottom: "1px solid #ecf0f1",
  },
  status: {
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    color: "#ffffff",
    fontWeight: "bold",
  },
  viewRulesButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2ecc71",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 0.75rem",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
    position: "relative",
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "1rem",
  },
  modalText: {
    color: "#34495e",
    fontSize: "1rem",
  },
  rulesList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  ruleItem: {
    backgroundColor: "#ecf0f1",
    padding: "0.75rem",
    borderRadius: "4px",
    marginBottom: "0.5rem",
  },
  ruleText: {
    color: "#34495e",
    fontSize: "0.9rem",
  },
  closeButton: {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    color: "#7f8c8d",
    cursor: "pointer",
    transition: "color 0.3s",
  },
};
