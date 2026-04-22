"use client";

import { useRef, useState, useCallback } from "react";

export function ImageSlider({
  beforeSrc,
  afterSrc,
  alt,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleStart = useCallback(
    (clientX: number) => {
      setIsDragging(true);
      updatePosition(clientX);
    },
    [updatePosition]
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      updatePosition(clientX);
    },
    [isDragging, updatePosition]
  );

  const handleEnd = useCallback(() => setIsDragging(false), []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-xl bg-gray-100"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      {/* Before image (full background) */}
      <img
        src={beforeSrc}
        alt={`${alt} - Antes`}
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />
      {/* After image (clip-path based reveal) */}
      <img
        src={afterSrc}
        alt={`${alt} - Después`}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />
      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7M9 19l7-7-7-7"
            />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-gold text-white text-xs font-semibold px-3 py-1.5 rounded-full">
        Después
      </div>
    </div>
  );
}
