import styled from "styled-components";

export const Category = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black.normal};
  padding: ${({ theme }) => theme.spacing.xs}px;
  display: flex;
  justify-content: space-between;
`;

export const ParentCategory = styled(Category)`
  background-color: ${({ theme }) => theme.colors.gray.normal};
`;

export const CategoryItem = styled(Category)`
  background-color: ${({ theme }) => theme.colors.black.normal};
  color: #ffffff;
`;

export const CategoryAmount = styled.span`
  font-weight: 700;
  color: ${({ theme, negative }) =>
    negative ? theme.colors.red.normal : theme.colors.green.normal};
`;
