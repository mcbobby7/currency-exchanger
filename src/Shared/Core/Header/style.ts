import styled from "styled-components"

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1f2833;
  border: none;
  border-bottom: 1px solid #45a29e;
  padding: 20px;

  .logo {
    font-size: 30px;
    color: white;
  }
  .logoC {
    font-weight: 800;
    color: #45a29e;
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .navs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      > * {
        width: 150px;
        margin: 0 10px;
      }
    }
  }
`
