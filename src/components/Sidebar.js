import React, { useState } from "react";

const devOpsTools = [
  { name: "Bitbucket", url: "https://bitbucket.org", icon: "🧰" },
  { name: "Jenkins", url: "https://jenkins.io", icon: "🔧" },
  { name: "ArgoCD", url: "https://argoproj.github.io/cd/", icon: "🚢" },
];

export default function Sidebar({ selected, setSelected, openCounts }) {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <div style={{ width: 250, background: "#f4f4f4", height: "100vh", padding: 10 }}>
      <div
        style={{ padding: 10, cursor: "pointer", fontWeight: selected === "home" ? "bold" : "normal" }}
        onClick={() => setSelected("home")}
      >
        🏠 Home
      </div>

      <div style={{ padding: 10, cursor: "pointer" }} onClick={() => setToolsOpen(!toolsOpen)}>
        DevOps Tools {toolsOpen ? "▼" : "▶"}
      </div>
      {toolsOpen &&
        devOpsTools.map((tool) => (
          <div
            key={tool.name}
            style={{ paddingLeft: 30, cursor: "pointer" }}
            onClick={() => window.open(tool.url, "_blank")}
          >
            {tool.icon} {tool.name}
          </div>
        ))}

      <div
        style={{
          padding: 10,
          cursor: "pointer",
          fontWeight: selected === "inventory" ? "bold" : "normal",
        }}
        onClick={() => setSelected("inventory")}
      >
        DevOps Server Inventory
      </div>

      <div style={{ padding: 10, cursor: "pointer" }} onClick={() => setServiceOpen(!serviceOpen)}>
        Service Request {serviceOpen ? "▼" : "▶"}
      </div>
      {serviceOpen && (
        <>
          <div
            style={{ paddingLeft: 30, cursor: "pointer" }}
            onClick={() => setSelected("raise-request")}
          >
            📩 Raise Request
          </div>
          <div
            style={{ paddingLeft: 30, cursor: "pointer" }}
            onClick={() => setSelected("open-requests")}
          >
            📂 Open Requests ({openCounts.open})
          </div>
          <div
            style={{ paddingLeft: 30, cursor: "pointer" }}
            onClick={() => setSelected("closed-requests")}
          >
            ✅ Closed Requests ({openCounts.closed})
          </div>
        </>
      )}
    </div>
  );
}
