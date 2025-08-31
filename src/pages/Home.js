import React from "react";

// Import local PNG icons from your assets/icons folder
import bitbucketIcon from "../assets/icons/Bitbucket.png";
import jenkinsIcon from "../assets/icons/Jenkins.png";
import argocdIcon from "../assets/icons/ArgoCD.png";

const devOpsTools = [
  {
    name: "Bitbucket",
    url: "https://bitbucket.org",
    icon: bitbucketIcon,
  },
  {
    name: "Jenkins",
    url: "https://jenkins.io",
    icon: jenkinsIcon,
  },
  {
    name: "ArgoCD",
    url: "https://argoproj.github.io/cd/",
    icon: argocdIcon,
  },
];

// Sample request counts - replace with your dynamic counts
const openCount = 5;
const closedCount = 2;

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>DevOps Portal</h1>

      <h2>DevOps Tools</h2>
      <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
        {devOpsTools.map((tool) => (
          <div
            key={tool.name}
            onClick={() => window.open(tool.url, "_blank")}
            style={{
              cursor: "pointer",
              padding: 20,
              border: "1px solid #ccc",
              borderRadius: 5,
              textAlign: "center",
              width: 100,
              height: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={tool.icon}
              alt={tool.name}
              style={{ width: 32, height: 32, marginBottom: 10 }}
            />
            <div>{tool.name}</div>
          </div>
        ))}
      </div>

      <h2>Service Requests</h2>
      <div style={{ display: "flex", gap: 20 }}>
        <div
          onClick={() => alert("Navigate to Open Requests")}
          style={{
            cursor: "pointer",
            padding: 20,
            border: "1px solid #ccc",
            borderRadius: 5,
            textAlign: "center",
            width: 100,
            height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Open Requests</div>
          <div style={{ fontWeight: "bold", marginTop: 4 }}>{openCount}</div>
        </div>
        <div
          onClick={() => alert("Navigate to Closed Requests")}
          style={{
            cursor: "pointer",
            padding: 20,
            border: "1px solid #ccc",
            borderRadius: 5,
            textAlign: "center",
            width: 100,
            height: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Closed Requests</div>
          <div style={{ fontWeight: "bold", marginTop: 4 }}>{closedCount}</div>
        </div>
      </div>
    </div>
  );
}
