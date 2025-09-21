export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  lat:any;
  lng:any
  province: "Punjab" | "Sindh" | "KPK" | "Balochistan" | "Gilgit-Baltistan" | "Islamabad";
};

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "🚀 Pakistan Launches New Tech Policy",
    summary: "The government has unveiled a national strategy to boost AI, IT exports, and digital infrastructure.",
    content: "In a landmark move, the Pakistani government announced its new Tech Policy 2025... (longer text here).",
    image: "/cricket-team.jpg",
    lat: 24.8607,
    lng: 67.0011,
    province: "Islamabad",
  },
  {
    id: "2",
    title: "🌾 AI Drones Transform Agriculture in Punjab",
    summary: "Farmers are adopting AI-powered drones to optimize crop yield and water management.",
    content: "Punjab’s agricultural sector is embracing modern AI solutions... (longer text here).",
    image: "/gwadar-development.jpg",
    lat: 24.8607,
    lng: 67.0011,
    province: "Punjab",
  },
  {
    id: "3",
    title: "⚡ Sindh Invests in Renewable Energy",
    summary: "The Sindh government has announced new projects in wind and solar energy.",
    content: "Sindh continues its commitment towards clean energy... (longer text here).",
    image: "/healthcare-development.jpg",
    lat: 24.8607,
    lng: 67.0011,
    province: "Sindh",
  },
  {
    id: "4",
    title: "🏞️ Tourism on the Rise in Gilgit-Baltistan",
    summary: "Gilgit-Baltistan sees record visitors after new infrastructure developments.",
    content: "With improved roads and facilities, GB is attracting international tourists... (longer text here).",
    image: "/karachi-port.jpg",
    lat: 24.8607,
    lng: 67.0011,
    province: "Gilgit-Baltistan",
  },
  {
    id: "5",
    title: "🏭 KPK Expands Industrial Zones",
    summary: "Khyber Pakhtunkhwa government launches new projects to boost employment and exports.",
    content: "Industrial expansion in KPK is set to increase jobs... (longer text here).",
    image: "/monsoon-punjab.jpg",
    lat: 24.8607,
    lng: 67.0011,
    province: "KPK",
  },
];
