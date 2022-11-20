import styled from "styled-components"

export const ButtonStyle = styled.div`
  button {
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #66fcf1 0, #45a29e 100%);
    border: 0;
    border-radius: 6px;
    box-sizing: border-box;
    color: #1f2833;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 40px;
    width: 100%;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 14px;

    :hover {
      transform: translateY(-2px);
    }

    :active {
      transform: translateY(2px);
    }
  }
  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`
