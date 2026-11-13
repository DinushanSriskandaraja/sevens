"use client";

import React from "react";

export default function AvatarStack() {
  const avatars = [
    { name: "Elena Rostova (CTO)", gradient: "linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)", text: "ER" },
    { name: "Marcus Chen (Founder)", gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)", text: "MC" },
    { name: "David Sterling (VP Eng)", gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)", text: "DS" },
    { name: "Sarah Lind (Head of Product)", gradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)", text: "SL" },
  ];

  return (
    <div className="hero-social-proof">
      <div className="avatar-group" aria-hidden="true">
        {avatars.map((a, i) => (
          <div
            key={i}
            className="avatar-bubble"
            style={{ background: a.gradient }}
            title={a.name}
          >
            <span>{a.text}</span>
          </div>
        ))}
      </div>
      <span className="hero-social-label">Loved by 34+ venture founders</span>
    </div>
  );
}
