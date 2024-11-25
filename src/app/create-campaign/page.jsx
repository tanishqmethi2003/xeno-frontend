"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createCampaign, checkAudienceSize } from "../../utils/api";
import { toast } from "react-toastify";
import { PlusCircle, X, Send, Users } from "lucide-react";

const availableFields = [
  { label: "Total Spends", value: "total_spends" },
  { label: "Visits", value: "visits" },
  { label: "Last Visit", value: "last_visit" },
];

const operators = [
  { label: "Equals", value: "=" },
  { label: "Not Equals", value: "!=" },
  { label: "Greater Than", value: ">" },
  { label: "Less Than", value: "<" },
  { label: "Greater or Equals", value: ">=" },
  { label: "Less or Equals", value: "<=" },
];

export default function CreateAudience() {
  const [audience, setAudience] = useState({
    campaignName: "",
    campaignMessage: "",
    rules: [],
  });
  const [audienceSize, setAudienceSize] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAudienceSize = async () => {
      try {
        const size = await checkAudienceSize(audience);
        setAudienceSize(size);
      } catch (error) {
        console.error("Failed to check audience size:", error);
      }
    };

    fetchAudienceSize();
  }, [audience]);

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
    });
  };

  const removeRule = (index) => {
    const rules = [...audience.rules];
    rules.splice(index, 1);
    setAudience({ ...audience, rules });
  };

  const handleChange = (index, field) => (e) => {
    const rules = [...audience.rules];
    rules[index] = { ...rules[index], [field]: e.target.value };
    setAudience({ ...audience, rules });
  };

  const handleCampaignNameChange = (e) => {
    setAudience({ ...audience, campaignName: e.target.value });
  };

  const handleCampaignMessageChange = (e) => {
    setAudience({ ...audience, campaignMessage: e.target.value });
  };

  const validateForm = () => {
    if (!audience.campaignName.trim()) {
      toast.error("Campaign Name cannot be empty");
      return false;
    }

    if (!audience.campaignMessage.trim()) {
      toast.error("Campaign Message cannot be empty");
      return false;
    }

    for (const rule of audience.rules) {
      if (!rule.value.trim()) {
        toast.error("Rule values cannot be empty");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await createCampaign(audience);
      toast.success("Campaign created successfully");
      router.push("/campaigns");
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast.error("Failed to create campaign");
    }
  };

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
          audience.rules.map((rule, index) => {
            const filteredOperators =
              rule.field === "last_visit"
                ? operators.filter((op) => op.value === "=" || op.value === "!=")
                : operators;

            return (
              <div key={index} style={styles.ruleContainer}>
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
                  {filteredOperators.map((operator) => (
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
                <button
                  type="button"
                  onClick={() => removeRule(index)}
                  style={styles.removeButton}
                >
                  <X size={20} />
                </button>
              </div>
            );
          })
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
              Audience Size: {audienceSize !== null ? audienceSize : ""}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

const styles = {
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
};
