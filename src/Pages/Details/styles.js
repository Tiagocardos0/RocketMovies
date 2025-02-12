import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .menu {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-inline: 120px;

        > h1 {
            font-size: 2rem;
        }
    }

    .cards {
        width: 1280px;
        height: 480px;
        overflow-y: auto;
        padding: 0 10px 20px 0;
        display: flex;
        flex-direction: column;
        gap: 24px;
        
        p {
            white-space: nowrap;       /* Impede que o texto quebre a linha */
            overflow: hidden;          /* Esconde o conteúdo que ultrapassa o limite */
            text-overflow: ellipsis;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`;