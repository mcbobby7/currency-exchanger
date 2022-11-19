import styled from "styled-components";

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  color: black;
  background: #ffffff;
  cursor: pointer;
  font-size: 14px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: relative;
`;

export const DropDownListContainer = styled("div")`
    position: absolute;
    width: 10.5em;
    z-index: 2;
`;

export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  font-size: 14px;
`;