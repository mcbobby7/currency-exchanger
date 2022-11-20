import styled from "styled-components"

export const ConverterStyle = styled.div`
  .title {
    color: white;
    font-size: 30px;
    margin-bottom: 50px;
  }

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: none;
  .amount {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .inRes {
      width: 100%;
      padding: 10px;
      border: 1px solid #45a29e;
      color: white;
      display: flex;
      align-items: center;
      width: 60%;
      justify-content: center;
    }
  }
  .details {
    width: 50%;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    .both {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      margin: auto;
      .label {
        color: white;
        font-size: 15px;
        margin-bottom: 5px;
      }
    }
    .but {
      width: 100%;
      margin: 20px auto;
    }
    .foot {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: auto;
    }
    .result {
      border: 1px solid #45a29e;
      padding: 20px;
      color: white;
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: center;
    }
    .more {
      width: 40%;
      margin: 0 20px;
    }
  }
  .swap {
    color: #45a29e;
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;
  }
  /* 
    .sub {
        color: white;
        font-size: 16px;
        margin-bottom: 50px;
        font-weight: 500;
    } */
`
