import { ImageResponse } from "next/og";

export const alt = "StudyScope – Career Guidance for Arts Students in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6b1c2a 0%, #4a1420 60%, #2c0d14 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            background: "#f5c542",
            borderRadius: 20,
            fontSize: 60,
            fontWeight: 900,
            color: "#6b1c2a",
            marginBottom: 32,
          }}
        >
          S
        </div>

        {/* Site name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#f5c542",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          StudyScope
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#f0e6d6",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Career Guidance for Arts Students in India
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 120,
            height: 4,
            background: "#f5c542",
            borderRadius: 2,
            marginTop: 32,
          }}
        />

        {/* Bottom text */}
        <div
          style={{
            fontSize: 18,
            color: "#d4a843",
            marginTop: 24,
            letterSpacing: "0.05em",
          }}
        >
          study-scope.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
