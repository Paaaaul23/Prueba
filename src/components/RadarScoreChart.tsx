"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { RadarAxis } from "@/types/product";

export default function RadarScoreChart({
  data,
  color = "#c97a3d",
  name,
}: {
  data: RadarAxis[];
  color?: string;
  name?: string;
}) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke="#2a3140" />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fill: "#8d96a6", fontSize: 11 }}
          />
          <PolarRadiusAxis
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name={name ?? "Puntuación"}
            dataKey="value"
            stroke={color}
            fill={color}
            fillOpacity={0.35}
          />
          <Tooltip
            contentStyle={{
              background: "#171c25",
              border: "1px solid #2a3140",
              fontSize: 12,
              color: "#edf1f5",
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
