"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export function CallLucyCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function relocate() {
      const widget = document.querySelector("chat-widget");
      if (widget && container && widget.parentElement !== container) {
        container.appendChild(widget);
      }
    }

    relocate();

    const observer = new MutationObserver(relocate);
    observer.observe(document.body, { childList: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-w-0">
      <div className="relative transform-gpu overflow-hidden rounded-[1.75rem] border-[3px] border-white/15 bg-[#050608] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-2.5 left-1/2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/70" />
        <div
          ref={containerRef}
          role="group"
          aria-label="Lucy demo"
          className="min-h-[220px] overflow-x-auto rounded-[1.4rem] bg-white p-1 pt-7"
        />
      </div>

      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a79aa9de427c78bb5bcaca5"
        strategy="lazyOnload"
      />
    </div>
  );
}
