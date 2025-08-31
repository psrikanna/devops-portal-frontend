import React, { useState } from "react";

const devOpsTools = [
  {
    name: "Bitbucket",
    url: "https://bitbucket.org",
    icon: "https://bitbucket.org/favicon.ico",
  },
  {
    name: "Jenkins",
    url: "https://jenkins.io",
    icon: "https://www.jenkins.io/favicon.ico",
  },
  {
    name: "ArgoCD",
    url: "https://argoproj.github.io/cd/",
    icon: "https://raw.githubusercontent.com/argoproj/argo-cd/stable/docs/assets/favicon.ico",
  },
];

export default function Sidebar({ selected, setSelected, openCounts }) {
  const [toolsOpen, setToolsOpen] = useState(true);
  const [serviceOpen, setServiceOpen] = useState(true);

  const sectionHeadingStyle = {
    padding: 10,
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 16,
    userSelect: "none",
  };

  return (
    <div
      style={{
        width: 250,
        background: "#d3d3d3", // light grey
        height: "100vh",
        padding: 10,
        boxSizing: "border-box",
      }}
    >
      {/* Home */}
      <div
        style={{
          padding: 10,
          cursor: "pointer",
          fontWeight: selected === "home" ? "bold" : "normal",
          fontSize: 16,
          marginBottom: 20,
          userSelect: "none",
        }}
        onClick={() => setSelected("home")}
      >
        🏠 Home
      </div>

      {/* DevOps Tools Section */}
      <div style={sectionHeadingStyle} onClick={() => setToolsOpen(!toolsOpen)}>
        DevOps Tools {toolsOpen ? "▼" : "▶"}
      </div>
      {toolsOpen &&
        devOpsTools.map((tool) => (
          <div
            key={tool.name}
            style={{ paddingLeft: 30, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
            onClick={() => window.open(tool.url, "_blank")}
          >
            <img src={tool.icon} alt={tool.name} width={16} height={16} />
            <span>{tool.name}</span>
          </div>
        ))}

      {/* Service Request Section */}
      <div style={{ ...sectionHeadingStyle, marginTop: 20 }} onClick={() => setServiceOpen(!serviceOpen)}>
        Service Request {serviceOpen ? "▼" : "▶"}
      </div>
      {serviceOpen && (
        <>
          <div
            style={{
              paddingLeft: 30,
              cursor: "pointer",
              fontWeight: selected === "raise-request" ? "bold" : "normal",
            }}
            onClick={() => setSelected("raise-request")}
          >
            📩 Raise Request
          </div>
          <div
            style={{
              paddingLeft: 30,
              cursor: "pointer",
              fontWeight: selected === "open-requests" ? "bold" : "normal",
            }}
            onClick={() => setSelected("open-requests")}
          >
            📂 Open Requests ({openCounts.open})
          </div>
          <div
            style={{
              paddingLeft: 30,
              cursor: "pointer",
              fontWeight: selected === "closed-requests" ? "bold" : "normal",
            }}
            onClick={() => setSelected("closed-requests")}
          >
            ✅ Closed Requests ({openCounts.closed})
          </div>
        </>
      )}

      {/* Inventory Section */}
      <div
        style={{
          padding: 10,
          cursor: "pointer",
          fontWeight: selected === "inventory" ? "bold" : "normal",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 20,
          userSelect: "none",
        }}
        onClick={() => setSelected("inventory")}
      >
        DevOps Server Inventory
      </div>
    </div>
  );
}
