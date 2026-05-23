import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C8A24B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16 L12 5 L19 16"/><circle cx="12" cy="18" r="1.5" fill="#C8A24B" stroke="none"/></svg>`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "#0A0A0B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/svg+xml;base64,${btoa(SVG)}`}
          width={20}
          height={20}
          alt=""
        />
      </div>
    ),
    { ...size },
  );
}
