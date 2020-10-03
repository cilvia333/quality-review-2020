import { css } from 'styled-components';

export const media = {
  xxl: (...args: any[]) => css`
    @media (min-width: 1281px) {
      ${css(...args)};
    }
  `,
  xl: (...args: any[]) => css`
    @media (max-width: 1280px) {
      ${css(...args)};
    }
  `,
  lg: (...args: any[]) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `,
  md: (...args: any[]) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  sm: (...args: any[]) => css`
    @media (max-width: 640px) {
      ${css(...args)};
    }
  `,
};
