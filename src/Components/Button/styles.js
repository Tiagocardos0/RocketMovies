import styled from "styled-components";

export const Button = styled.button`
    width: ${({ width }) => width || '100%'}; /* Usa a largura passada ou 100% */
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.PINK_400};
    color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;
    border: none;
    padding: 16px 32px;
    font-weight: 500;
    cursor: pointer;
`;