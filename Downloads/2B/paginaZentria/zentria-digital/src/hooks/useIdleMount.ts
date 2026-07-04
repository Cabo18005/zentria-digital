import { useEffect, useState } from 'react';

// Retrasa el montaje de contenido pesado (ej. escenas 3D) hasta que el hilo
// principal esté libre, para que no compita con el render del contenido
// crítico durante la carga inicial y no infle el Total Blocking Time.
export function useIdleMount(timeout = 1500) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (w.requestIdleCallback) {
      const handle = w.requestIdleCallback(() => setReady(true), { timeout });
      return () => w.cancelIdleCallback?.(handle);
    }

    const id = setTimeout(() => setReady(true), timeout);
    return () => clearTimeout(id);
  }, [timeout]);

  return ready;
}
