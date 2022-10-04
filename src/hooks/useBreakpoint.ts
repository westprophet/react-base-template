import { useMediaQuery } from 'react-responsive';

import b from '../scss/breakpoints/_export.module.scss';
import TBreakpoints from '../interfaces/TBreakpoints';
// import TBreakpointSize from '../types/TBreakpointSize';

// const GLOBAL_MEDIA_QUERIES = {
//   xs: `(min-width: ${b.xs}px)`,
//   sm: `(min-width: ${b.sm}px)`,
//   md: `(min-width: ${b.md}px)`,
//   lg: `(min-width: ${b.lg}px)`,
//   xl: `(min-width: ${b.xl})px`,
//   xxl: `(min-width: ${b.xxl})px`,
//   xxxl: `(min-width: ${b.xxxl})px`
// };

export default function useBreakpoint(): TBreakpoints<boolean> {
  return {
    xs: useMediaQuery({ query: `(min-width: ${b.xs}px)` }),
    sm: useMediaQuery({ query: `(min-width: ${b.sm}px)` }),
    md: useMediaQuery({ query: `(min-width: ${b.md}px)` }),
    lg: useMediaQuery({ query: `(min-width: ${b.lg}px)` }),
    xl: useMediaQuery({ query: `(min-width: ${b.xl})px` }),
    xxl: useMediaQuery({ query: `(min-width: ${b.xxl})px` }),
    xxxl: useMediaQuery({ query: `(min-width: ${b.xxxl})px` }),
  };
}
