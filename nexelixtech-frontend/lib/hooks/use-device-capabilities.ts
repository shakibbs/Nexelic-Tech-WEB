"use client";

import { useEffect, useState } from "react";

// Detects device capability — only render 3D on capable devices (Issue 1 fix)
export function useDeviceCapabilities(): boolean {
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const cores = navigator.hardwareConcurrency;
    const conn = (navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean };
    }).connection;

    const isSlowConnection =
      conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g";
    const isDataSaver = conn?.saveData === true;

    // Require 4GB+ RAM, 4+ cores, fast connection, no data-saver
    setTimeout(() => {
      setCanRender3D(
        (memory ?? 0) >= 4 &&
          (cores ?? 0) >= 4 &&
          !isSlowConnection &&
          !isDataSaver,
      );
    }, 0);
  }, []);

  return canRender3D;
}
