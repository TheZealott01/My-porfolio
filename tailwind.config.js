export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui"],
      },
      colors: {
        cyber: {
          black: "#020617",
          navy: "#06111f",
          panel: "#0b1628",
          cyan: "#22d3ee",
          blue: "#38bdf8",
          purple: "#a855f7",
          green: "#22c55e",
          line: "rgba(148, 163, 184, 0.18)",
        },
      },
      boxShadow: {
        glow: "0 0 32px rgba(34, 211, 238, 0.25)",
        "glow-purple": "0 0 36px rgba(168, 85, 247, 0.24)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.8s linear infinite",
        float: "float 5s ease-in-out infinite",
        scan: "scan 5s linear infinite",
      },
    },
  },
  plugins: [],
};
