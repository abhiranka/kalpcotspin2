import useWindowSize from "./useWindowSize";

export default function useResponsive() {
  const { width } = useWindowSize();

  return {
    isMobile: width < 600,
    isTablet: width >= 600 && width < 900,
    isDesktop: width >= 900
  };
}