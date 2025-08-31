import React from "react";

const devOpsTools = [
  { name: "Bitbucket", url: "https://bitbucket.org", icon: "🧰" },
  { name: "Jenkins", url: "https://jenkins.io", icon: "🔧" },
  { name: "ArgoCD", url: "https://argoproj.github.io/cd/", icon: "🚢" },
];

export default function Home() {
  return (
    <div>
      <h2>DevOps Tools</h2>
      <div style={{ display: "flex", gap: 20 }}>
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
            }}
          >
            <div style={{ fontSize: 40 }}>{tool.icon}</div>
            <div>{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
