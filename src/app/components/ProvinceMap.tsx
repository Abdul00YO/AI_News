"use client";
// @ts-ignore
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/pakistan/pakistan-provinces.json";

export default function PakistanMap() {
  return (
    <div className="w-full flex justify-center items-center p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl shadow-lg">
      <ComposableMap projection="geoMercator" width={500} height={600}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() =>
                  alert(`Clicked: ${geo.properties.NAME_1}`)
                }
                style={{
                  default: {
                    fill: "#6366F1",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#EC4899",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#22C55E",
                    stroke: "#fff",
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
