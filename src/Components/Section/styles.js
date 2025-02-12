import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 220px;
    padding: 40px;
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    > h1 {
        font-size: 1.5rem;
        font-weight: bold;
    }
`;