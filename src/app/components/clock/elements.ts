import styled, { css } from "styled-components";

export const TimeContainer = styled.div`
  display: flex;
`;

export const Hour = styled.div<{ scale?: number; color?: string }>`
  ${({ scale = 1, color = "white" }) => css`
    color: ${color};
    transform: scale(${scale});
  `}
`;

export const Minute = Hour;
export const Second = Hour;
export const Ampm = Hour;
