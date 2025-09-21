"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/navigation";
import { newsData } from "../data/mockData";

const RealNewsMap: React.FC = () => {
  const router = useRouter();

  // Unique provinces
  const uniqueProvinces = Array.from(new Set(newsData.map((item) => item.province)));

  const provinceCenters: Record<string, [number, number]> = {
    Punjab: [31.0, 72.0],
    Sindh: [26.0, 67.0],
    KPK: [34.0, 71.5],
    Balochistan: [28.0, 66.0],
    "Gilgit-Baltistan": [35.5, 74.3],
    Islamabad: [33.6844, 73.0479],
  };

  return (
    <MapContainer
      center={[30.3753, 69.3451]}
      zoom={5}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {uniqueProvinces.map((province) => {
        const position = provinceCenters[province];
        if (!position) return null;

        // Create a DivIcon with province name
        const labelIcon = L.divIcon({
        className: "province-label",
        html: `
          <div style="
            background: rgba(255, 255, 255, 0.85); 
            padding: 6px 12px; 
            border-radius: 8px; 
            color: #1f2937; 
            font-weight: 600; 
            font-size: 14px; 
            text-align: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: transform 0.2s, background 0.2s;
          ">
            ${province}
          </div>
        `,
        iconAnchor: [0, 0],
      });


        return (
          <Marker
            key={province}
            position={position}
            icon={labelIcon}
            eventHandlers={{
              click: () => router.push(`/provinces/${province}`),
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default RealNewsMap;
