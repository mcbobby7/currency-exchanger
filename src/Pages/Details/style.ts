import styled from 'styled-components';

export const Details = styled.div`
    padding: 30px;
    .title {
        color: white;
        font-size: 30px;
        margin-bottom: 50px;
    }
    .chart {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-top: 70px;
       border: 1px solid #45A29E;
        > * {
            margin: 10px;
            width: 250px;
        }
    }
`;