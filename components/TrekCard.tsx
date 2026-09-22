"use client";

import { useMemo, useState } from "react";
import { Share2, Heart, Calendar, CloudSun } from "lucide-react";

// ----------------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------------

export interface TrekStop {
  name: string;
  altitude: number; // in meters
  highlighted?: boolean;
}

export interface TrekCardProps {
  category?: string;
  title: string;
  difficulty?: string;
  country?: string;
  duration?: string;
  route?: string;
  rating?: number;
  reviewCount?: number;
  happyTrekkers?: string;
  bestTime?: string;
  stops: TrekStop[];
  weather?: {
    condition: string;
    feelsLike: number;
  };
  onBookNow?: () => void;
  onShare?: () => void;
  onFavorite?: () => void;
}

// ----------------------------------------------------------------------------
// Elevation profile chart (inline SVG, no external chart lib needed)
// ----------------------------------------------------------------------------

function ElevationProfile({ stops }: { stops: TrekStop[] }) {
  const width = 900;
  const height = 180;
  const paddingX = 55;
  const paddingTop = 30;
  const paddingBottom = 50;

  const altitudes = stops.map((s) => s.altitude);
  const minAlt = Math.min(...altitudes);
  const maxAlt = Math.max(...altitudes);

  const points = useMemo(() => {
    const usableWidth = width - paddingX * 2;
    const usableHeight = height - paddingTop - paddingBottom;

    return stops.map((stop, i) => {
      const x = paddingX + (usableWidth / (stops.length - 1)) * i;
      const ratio = (stop.altitude - minAlt) / (maxAlt - minAlt || 1);
      const y = height - paddingBottom - ratio * usableHeight;
      return { ...stop, x, y };
    });
  }, [stops, minAlt, maxAlt]);

  const pathD = useMemo(() => {
    if (points.length < 2) return "";
    // Smooth natural curve through all points using Catmull-Rom -> Bezier conversion
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${p2.x} ${p2.y}`;
    }
    return d;
  }, [points]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d={pathD}
        fill="none"
        stroke="rgba(148, 163, 184, 0.4)"
        strokeWidth={2}
        strokeDasharray="4 6"
        strokeLinecap="round"
      />

      {points.map((p, i) => {
        const anchor =
          i === 0 ? "start" : i === points.length - 1 ? "end" : "middle";
        return (
          <g key={i}>
            {p.highlighted && (
              <circle cx={p.x} cy={p.y} r={9} fill="rgba(34,197,94,0.25)" />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={p.highlighted ? 6 : 5}
              fill={p.highlighted ? "#22c55e" : "#e2e8f0"}
            />

            <text
              x={p.x}
              y={height - paddingBottom + 22}
              textAnchor={anchor}
              className={
                p.highlighted
                  ? "fill-green-400 text-[13px] font-semibold"
                  : "fill-slate-100 text-[13px] font-semibold"
              }
            >
              {p.name}
            </text>
            <text
              x={p.x}
              y={height - paddingBottom + 40}
              textAnchor={anchor}
              className="fill-slate-400 text-[12px]"
            >
              {p.altitude.toLocaleString()}m
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ----------------------------------------------------------------------------
// Main component
// ----------------------------------------------------------------------------

export default function TrekCard({
  category = "Popular Trek",
  title,
  difficulty = "Easy",
  country = "Nepal",
  duration = "14 Days",
  route = "Kathmandu to Lukla",
  rating = 4.8,
  reviewCount = 120,
  happyTrekkers = "1.2k+",
  bestTime = "Time",
  stops,
  weather = { condition: "Partly Cloudy", feelsLike: 10 },
  onBookNow,
  onShare,
  onFavorite,
}: TrekCardProps) {
  const [liveTracking, setLiveTracking] = useState(true);

  const minAltitude = Math.min(...stops.map((s) => s.altitude));
  const maxAltitude = Math.max(...stops.map((s) => s.altitude));

  return (
    <div className="min-h-screen w-full bg-[#0F172A] flex items-start justify-center px-6 py-8">
      <div className="w-full max-w-6xl p-8">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-green-400">{category}</p>
            <div className="mt-1 flex items-center gap-3">
              <h1 className="text-4xl font-extrabold text-white">{title}</h1>
              <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-400">
                {difficulty}
              </span>
            </div>
            <p className="mt-2 text-slate-300">
              {country} • {duration} • {route}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onShare}
              className="flex items-center gap-2 rounded-xl bg-slate-800/80 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-700 transition-colors"
            >
              <Share2 size={16} />
              Share
            </button>
            <button
              onClick={onBookNow}
              className="flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <Calendar size={16} />
              Book Now
            </button>
            <button
              onClick={onFavorite}
              aria-label="Save trek"
              className="flex items-center justify-center rounded-xl bg-slate-800/80 p-2.5 text-slate-200 hover:bg-slate-700 transition-colors"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-8 flex flex-wrap items-start gap-10">
          <div>
            <p className="text-2xl font-bold text-white">
              {rating} <span className="text-base font-normal text-slate-400">({reviewCount})</span>
            </p>
            <p className="text-sm text-slate-400">Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">{happyTrekkers}</p>
            <p className="text-sm text-slate-400">Happy Trekkers</p>
          </div>
          <div className="pt-1 text-sm text-slate-300">
            <p>Best Time: {bestTime}</p>
            <p className="mt-1">
              Min. Altitude {minAltitude.toLocaleString()}m • Max. Altitude{" "}
              {maxAltitude.toLocaleString()}m
            </p>
          </div>
        </div>

        {/* Main content: elevation profile + side panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <div className="rounded-xl bg-[#0a0e1a] p-4 min-h-[300px] flex flex-col justify-center">
            <ElevationProfile stops={stops} />
          </div>

          <div className="rounded-xl bg-[#131a2b] p-5 min-h-[300px] flex flex-col">
            <p className="text-slate-300">Location</p>
            <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-700/60 pt-4">
              <div>
                <p className="text-slate-300">{weather.condition}</p>
                <p className="text-slate-300">Feels like {weather.feelsLike}°C</p>
              </div>
              <CloudSun size={32} className="text-yellow-400" />
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-slate-700/60 pt-4">
              <p className="text-slate-300">Live Tracking</p>
              <button
                onClick={() => setLiveTracking((v) => !v)}
                aria-pressed={liveTracking}
                aria-label="Toggle live tracking"
                style={{
                  position: "relative",
                  width: "44px",
                  height: "24px",
                  borderRadius: "9999px",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: liveTracking ? "#22c55e" : "#475569",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "9999px",
                    backgroundColor: "#ffffff",
                    transform: liveTracking ? "translateX(20px)" : "translateX(0)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

