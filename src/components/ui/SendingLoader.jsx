import React from 'react';

export function SendingLoader({ 
  text = "Sending...", 
  className = "" 
}) {
  return (
    <div className={`relative bg-background border border-border font-mono text-base p-6 pt-4 w-48 shadow-lg rounded-lg overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-6 bg-surface rounded-t-lg px-2 flex items-center justify-between">
        <div className="text-muted text-xs leading-6">
          Status
        </div>
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-error"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-warning"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
        </div>
      </div>
      <div className="text-primary inline-block whitespace-nowrap overflow-hidden mt-4 animate-type-and-delete border-r-2 border-primary animate-blink-cursor">
        {text}
      </div>
    </div>
  );
}
