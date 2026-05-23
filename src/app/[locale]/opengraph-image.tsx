import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#C8A24B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 16 L12 5 L19 16"/><circle cx="12" cy="18" r="1.5" fill="#C8A24B" stroke="none"/></svg>`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "linear-gradient(140deg, #0B1B3A 0%, #08142E 100%)",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Radial glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,162,75,0.14) 0%, transparent 68%)",
            display: "flex",
          }}
        />

        {/* Logo + brand name */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 11,
              background: "#0A0A0B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/svg+xml;base64,${btoa(SVG)}`}
              width={32}
              height={32}
              alt=""
            />
          </div>
          <span
            style={{
              color: "#FAFAF7",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: -0.4,
            }}
          >
            ProjetConnect
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 2,
            background: "#C8A24B",
            borderRadius: 2,
            marginTop: 48,
            marginBottom: 40,
            display: "flex",
          }}
        />

        {/* First sentence */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              color: "#C8A24B",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: -1,
            }}
          >
            Vous avez une idée,
          </span>
          <span
            style={{
              color: "#FAFAF7",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: -1,
            }}
          >
            vous trouvez un directeur technique.
          </span>
        </div>

        {/* Second sentence */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
          <span
            style={{
              color: "rgba(250,250,247,0.45)",
              fontSize: 36,
              lineHeight: 1.5,
              letterSpacing: -0.4,
            }}
          >
            Vous avez du talent et de l&apos;expérience,&nbsp;
          </span>
          <span
            style={{
              color: "rgba(250,250,247,0.85)",
              fontSize: 36,
              lineHeight: 1.5,
              letterSpacing: -0.4,
            }}
          >
            vous trouvez un investisseur.
          </span>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: "auto",
          }}
        >
          <div
            style={{
              width: 24,
              height: 1,
              background: "rgba(200,162,75,0.5)",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "rgba(200,162,75,0.55)",
              fontSize: 15,
              letterSpacing: 3,
            }}
          >
            PROJETCONNECT.COM
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
