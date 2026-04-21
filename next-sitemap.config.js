/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://spark-maklerservice.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [
      "https://spark-maklerservice.com/sitemap.xml",
    ],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Boost priority for key pages
    const priorities = {
      "/": 1.0,
      "/about": 0.8,
      "/kontakt": 0.9,
      "/blog": 0.8,
    };
    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
