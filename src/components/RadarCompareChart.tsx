"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Product } from "@/types/product";

const COLORS = ["#c97a3d", "#4fd1b0", "#e2604f", "#7a9cc9"];

export default function RadarCompareChart({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  // Usamos las etiquetas del primer producto como eje común (misma categoría).
  const labels = products[0].radar.map((r) => r.label);
  const data = labels.map((label, i) => {
    const row: Record<string, string | number> = { label };
    products.forEach((p) => {
      row[p.name] = p.radar[i]?.value ?? 0;
    });
    return row;
  });

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="70%">
          <PolarGrid stroke="#2a3140" />
          <PolarAngleAxis dataKey="label" tick={{ fill: "#8d96a6", fontSize: 11 }} />
          <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
          {products.map((p, i) => (
            <Radar
              key={p.id}
              name={p.name}
              dataKey={p.name}
              stroke={COLORS[i % COLORS.length]}
              fill={COLORS[i % COLORS.length]}
              fillOpacity={0.2}
            />
          ))}
          <Legend wrapperStyle={{ fontSize: 12, color: "#8d96a6" }} />
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
