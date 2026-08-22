import { ImageResponse } from "next/og";

export const alt = "MetaShift";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0B0D",
          color: "#F5F5F5",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 14, color: "#8A8A8A" }}>
          METASHIFT
        </div>
        <div style={{ display: "flex", fontSize: 54, marginTop: 32, color: "#F5F5F5", maxWidth: 820, textAlign: "center", justifyContent: "center" }}>
          Most people don&apos;t need more motivation.
        </div>
        <div style={{ display: "flex", fontSize: 54, marginTop: 8, color: "#A68B4D" }}>
          They need a shift.
        </div>
      </div>
    ),
    { ...size }
  );
}
