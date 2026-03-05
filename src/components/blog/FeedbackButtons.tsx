"use client";

import { useState } from "react";

export default function FeedbackButtons() {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  return (
    <div className="flex items-center gap-4 mt-8 py-4 border-t border-border">
      <span className="text-sm text-text-muted">Was this helpful?</span>
      <button
        onClick={() => setFeedback("up")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
          feedback === "up"
            ? "bg-green-500/10 text-green-400 border border-green-500/30"
            : "bg-surface border border-border text-text-secondary hover:text-green-400 hover:border-green-500/30"
        }`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        Yes
      </button>
      <button
        onClick={() => setFeedback("down")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
          feedback === "down"
            ? "bg-red-500/10 text-red-400 border border-red-500/30"
            : "bg-surface border border-border text-text-secondary hover:text-red-400 hover:border-red-500/30"
        }`}
      >
        <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        No
      </button>
      {feedback && (
        <span className="text-xs text-text-muted ml-2">Thanks for your feedback!</span>
      )}
    </div>
  );
}
