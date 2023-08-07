import { useMediaQuery } from './UseMediaQuery';
import { BreakPoint } from '../constants/BreakPoint';

interface ReturnType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useDeviceDetect = (): ReturnType => {
  const isMobile = useMediaQuery(`(max-width: ${BreakPoint.Mobile})`);
  const isTablet = useMediaQuery(`(max-width: ${BreakPoint.Tablet})`);
  const isDesktop = useMediaQuery(`(max-width: ${BreakPoint.Desktop})`);

  return { isMobile, isTablet, isDesktop };
};
