"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  photo,
  name,
  size = 64,
  ring = false,
}: {
  photo: number;
  name: string;
  size?: number;
  ring?: boolean;
}) {
  const [err, setErr] = useState(false);
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-night to-ink text-white font-display flex-shrink-0",
        ring && "ring-2 ring-gold ring-offset-2 ring-offset-paper"
      )}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {!err ? (
        <Image
          src={`https://i.pravatar.cc/${size * 2}?img=${photo}`}
          alt={name}
          fill
          className="object-cover"
          onError={() => setErr(true)}
          unoptimized
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
