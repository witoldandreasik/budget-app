import styled from "styled-components";

export const RootButton = styled.button`
  position: relative;
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.gray.light : colors.pink.normal};
  font-size: 20px;
  cursor: inherit;
  border: none;
  background-color: transparent;
  cursor: ${(props) =>
    props.to || props.onClick || props.type === "submit"
      ? "pointer"
      : "default"};
  overflow: hidden;
  &:hover {
    opacity: 0.8;
  }
`;

export const InlineButton = styled(RootButton)`
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => `${theme.colors.pink.normal}`};
    transition: 0.35s;
  }
  &:hover::after {
    left: 0;
  }
`;

export const RegularButton = styled(RootButton)`
  background: ${({ theme, primary }) =>
    primary ? theme.colors.pink.normal : theme.colors.black.normal};
  margin: ${({ theme }) => `${theme.spacing.xs / 2}px`};
  padding: ${({ theme }) => `${theme.spacing.xs / 2}px} ${theme.spacing.xs}px`};
  border: ${({ theme }) => `2px solid ${theme.colors.pink.normal}`};
  border-radius: 3px;
`;
