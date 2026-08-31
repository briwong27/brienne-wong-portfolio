"use client";

import { useState } from "react";
import type { Figure as FigureData } from "@/content/projects";

export function Figure({ src, alt, caption }: FigureData) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return caption ? <p className="missing-caption">{caption}</p> : null;
  }

  return (
    <figure className="media">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} onError={() => setVisible(false)} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
