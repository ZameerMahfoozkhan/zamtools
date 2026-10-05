/**
 * ZamTools Central Configuration
 * Domain: https://zamtools.online
 */

const SITE_CONFIG = {
  siteName: "ZamTools",
  siteUrl: "https://zamtools.online/",
  tagline: "Simple tools. Better results.",
  privacyStatement: "Your images stay on your device.",
  
  // AdSense configuration (Disabled by default)
  // To activate when your account is approved, set enabled: true and fill publisherId & slot IDs
  adsense: {
    enabled: false,
    publisherId: "",
    slots: {
      top: "",
      content: "",
      sidebar: ""
    }
  },

  // Optional Analytics placeholder (Disabled by default)
  analytics: {
    enabled: false,
    googleAnalyticsId: ""
  }
};

// Freeze configuration to prevent tampering
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}
