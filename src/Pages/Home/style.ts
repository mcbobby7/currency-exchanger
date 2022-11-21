import styled from "styled-components"

export const Home = styled.div`
  padding: 30px;
  .title {
    color: white;
    font-size: 30px;
    margin-bottom: 50px;
  }
  .cards {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 50px;
    > * {
      margin: 10px;
      min-width: 100px;
      flex: 0 1 20%;
    }
  }
`
