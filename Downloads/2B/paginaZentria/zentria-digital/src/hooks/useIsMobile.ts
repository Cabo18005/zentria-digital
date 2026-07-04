import { useMemo } from 'react';

export function useIsMobile() {
  return useMemo(() => typeof window !== 'undefined' && window.innerWidth < 768, []);
}
