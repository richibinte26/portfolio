import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personal-info";

export const alt = `${personalInfo.name} | ${personalInfo.designation}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#f4f5f1",
          color: "#0f1a14",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700 }}>{personalInfo.name}</div>
        <div style={{ fontSize: 40, color: "#1b5e46", marginTop: 16 }}>{personalInfo.designation}</div>
        <div style={{ fontSize: 28, color: "#55615a", marginTop: 32 }}>{personalInfo.university}</div>
      </div>
    ),
    size,
  );
}
