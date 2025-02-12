import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 120px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

    > h1 {
        font-weight: bold;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.PINK_400};
    }

    form {
        display: flex;
        flex: 1;
        max-width: 630px;
    }

    input {
        flex: 1;
        height: 50px;
        border-radius: 10px;
        padding-inline: 24px;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_800};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            align-self: end;
            cursor: pointer;
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;