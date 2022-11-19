import styled from 'styled-components';

export const ButtonStyle = styled.button`
    align-items: center;
    appearance: none;
    background-image: radial-gradient(100% 100% at 100% 0, #66FCF1 0, #45A29E 100%);
    border: 0;
    border-radius: 6px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono",monospace;
    height: 48px;
    width: 100%;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 18px;

    :hover {
    transform: translateY(-2px);
    }

   :active {
    transform: translateY(2px);
    }
`;