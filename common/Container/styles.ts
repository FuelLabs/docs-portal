import styled from "styled-components";

import { devices } from "@/utils/devices";
import { COLOR_GRAY } from "@/utils/colorPalette";

const CONTAINER_MAX_WIDTH = "82.5rem";
const LAYOUT_MAX_WIDTH = "89.5rem";

export const Section = styled.section<{
  padding?: string;
  layout?: boolean;
  heroSection?: boolean;
}>`
  display: grid;
  position: relative;
  scroll-margin-top: 5.125rem;
  grid-template-columns: ${({ layout }) =>
    !layout
      ? `minmax(3.375rem, auto) minmax(0, ${CONTAINER_MAX_WIDTH}) minmax(
      3.375rem,
      auto
    )`
      : `minmax(3.375rem, auto) minmax(0, ${LAYOUT_MAX_WIDTH}) minmax(3.375rem, auto)`};
  grid-gap: calc(12rem * 0.75) 0;
  gap: calc(12rem * 0.75) 0;
  padding: ${({ padding }) => padding || "5.125rem 0 10rem 0"};
  border-bottom: ${({ layout }) =>
    layout ? `1px solid ${COLOR_GRAY}` : "1px solid rgba(21, 23, 24, 0.3)"};

  @media ${devices.tabletM} {
    scroll-margin-top: 0;
    padding: ${({ padding }) => (padding && "2.09375rem 0") || "2.8125rem 0"};
    grid-template-columns: ${({ layout }) =>
      !layout
        ? `minmax(2rem, auto) minmax(0, ${CONTAINER_MAX_WIDTH}) minmax(
      2rem,
      auto
    )`
        : `minmax(2rem, auto) minmax(0, ${LAYOUT_MAX_WIDTH}) minmax(2rem, auto)`};
  }

  @media ${devices.mobileL} {
    display: grid;
    grid-gap: 3rem 0;
    gap: 3rem 0;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-column: 2;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 3rem;
  gap: 3rem;
  grid-auto-flow: dense;

  @media ${devices.tabletM} {
    grid-template-columns: none;
    grid-gap: 0;
    gap: 0;
  }
`;

export const SectionCenter = styled.div`
  text-align: start;
  grid-column: 1/13;
`;

export const Container = styled.div<{
  layout?: boolean;
}>`
  position: relative;
  width: auto;
  max-width: ${({ layout }) =>
    layout ? LAYOUT_MAX_WIDTH : CONTAINER_MAX_WIDTH};
  margin: 0 auto;
`;

export const Flex = styled.div<{
  align?: string;
  justify?: string;
  direction?: string;
  gap?: string;
}>`
  display: flex;
  align-items: center;
  text-align: ${({ align }) => align};
  justify-content: ${({ justify }) => (justify ? justify : "space-between")};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;
