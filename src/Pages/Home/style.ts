import styled from 'styled-components';

export const Home = styled.div`
    padding: 30px;
    .title {
        color: white;
        font-size: 30px;
        margin-bottom: 50px;
    }
    .cards {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-top: 70px;
        > * {
            margin: 10px;
            width: 250px;
        }
    }
`;