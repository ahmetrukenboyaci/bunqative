import { useCallback } from 'react';

import { useDeviceDetect } from './UseDeviceDetect';

interface ReturnType {
  convertPxToVw: (sizeInPx: number) => string;
}

const DeviceSizeMapping = {
  Mobile: 375,
  Desktop: 1920,
};

const useMetricConverter = (): ReturnType => {
  const { isMobile } = useDeviceDetect();

  const convertPxToVw = useCallback(
    (sizeInPx: number | string): string => {
      const viewportWidth = isMobile
        ? DeviceSizeMapping.Mobile
        : DeviceSizeMapping.Desktop;
      if (typeof sizeInPx === 'number') {
        const itemSize = sizeInPx * 100;
        const sizeInVw = itemSize / viewportWidth;
        return `${sizeInVw}vw`;
      } else return sizeInPx;
    },
    [isMobile]
  );

  return {
    convertPxToVw,
  };
};

export { useMetricConverter };
