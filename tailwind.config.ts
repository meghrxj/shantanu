import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1B2D",
          soft: "#1F3247",
          muted: "#5A6273",
        },
        accent: {
          DEFAULT: "#1B4FE5",
          soft: "#3D6BFF",
          tint: "#E6EDFF",
        },
        cream: {
          DEFAULT: "#F4F1EA",
          deep: "#ECE7DB",
        },
        line: {
          DEFAULT: "#E5E2D8",
          dark: "#D8D1BE",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "container": "1320px",
        "prose-wide": "68ch",
      },
      letterSpacing: {
        "tightish": "-0.015em",
        "tighter-display": "-0.025em",
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
