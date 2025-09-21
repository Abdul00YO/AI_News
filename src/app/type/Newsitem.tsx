// src/app/type/Newsitem.ts

export interface NewsItem {
 
  id: number;
  title: string;
  link: string;
  brief_summary: string; // From the backend 'see_more_details' endpoint
  full_content?: string; // Optional field for the full article body
  img: string;
  published: string;
  headline?: string; // Used for the titles-only view
  description?: string; // Used for the titles-only view
  latitude?: number;
  longitude?: number;
  provinceName?: string;
}