"use client"; // Client Component

import React, { useState } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(
    "I am a beginner — want safe strategies"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${name}\nEmail: ${email}\nInterest: ${interest}`
    );
    // Replace alert with API call later
  };

  return (
    <form className="grid gap-3" onSubmit={handleSubmit}>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (optional)"
        className="w-full rounded-md border border-slate-200 p-3 bg-white text-sm"
      />
      <input
        name="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="w-full rounded-md border border-slate-200 p-3 bg-white text-sm"
      />
      <select
        name="interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        className="rounded-md border border-slate-200 p-3 bg-white text-sm"
      >
        <option>I am a beginner — want safe strategies</option>
        <option>I am an intraday trader — want fast backtests</option>
        <option>I am a quant — interested to automate</option>
      </select>
      <button
        type="submit"
        className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold"
      >
        Reserve my spot
      </button>
    </form>
  );
}
