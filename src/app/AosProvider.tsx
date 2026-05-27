// src/app/AOSProvider.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
// @ts-ignore: side-effect import of CSS without type declarations
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return null; // no renderiza nada
}
