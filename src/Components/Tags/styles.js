import styled from "styled-components";

export const Container = styled.span`
    width: auto;
    height: 24px;
    padding: 5px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    margin-right: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.GRAY_800};
        transition: 0.2s;
        cursor: pointer;
    }
`;