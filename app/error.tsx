"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full border-2 border-red-500/30 flex items-center justify-center mx-auto mb-6">
          <span className="text-red-400 text-3xl">!</span>
        </div>

        <h2 className="text-2xl font-heading font-medium mb-4 text-[#F8FAFC]">
          Something went wrong
        </h2>
        <p className="text-[#94A3B8] mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or contact us directly.
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-neon text-deep-navy font-semibold font-heading tracking-wide shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:bg-neon-hover hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all duration-300 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
