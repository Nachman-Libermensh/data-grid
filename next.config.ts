import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // מאפשר יצוא סטטי (next export)
  basePath: "/data-grid", // שם הריפו שלך ב־GitHub
  trailingSlash: true, // דרוש ל־GitHub Pages כדי שכל route יהיה index.html
};

export default nextConfig;
