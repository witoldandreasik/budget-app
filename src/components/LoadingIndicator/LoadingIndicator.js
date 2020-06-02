import React from "react";
import styled, { keyframes } from "styled-components";

const around = keyframes`  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

const Root = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.gray.dark};
    border-color: ${({ theme }) => theme.colors.gray.dark} transparent
      ${({ theme }) => theme.colors.gray.dark} transparent;
    animation: ${around} 1.2s linear infinite;
  }
`;

function LoadingIndicator() {
  return <Root></Root>;
}
export default LoadingIndicator;
