import styled from "styled-components"

export const InputStyle = styled.div`
  position: relative;
  width: 200px;

  input {
    display: block;
    margin: 0;
    padding: var(--inputPaddingV) var(--inputPaddingH);
    color: inherit;
    width: 100%;
    height: 35px;
    font-family: inherit;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow var(--transitionDuration);
    padding: 0 20px;
  }

  input::placeholder {
    color: #b0bec5;
  }

  input:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
  }

  label {
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0.5rem;
    color: #fff;
    font-family: inherit;
    font-size: var(--inputFontSize);
    font-weight: inherit;
    line-height: var(--inputLineHeight);
    opacity: 0;
    transform: translate3d(0, var(--labelDefaultPosY), 0) scale(1);
    transform-origin: 0 0;
    transition: opacity var(--inputTransitionDuration) var(--inputTransitionTF),
      transform var(--inputTransitionDuration) var(--inputTransitionTF),
      visibility 0ms var(--inputTransitionDuration) var(--inputTransitionTF),
      z-index 0ms var(--inputTransitionDuration) var(--inputTransitionTF);
  }

  input:placeholder-shown + label {
    visibility: hidden;
    z-index: -1;
  }

  input:not(:placeholder-shown) + label,
  input:focus:not(:placeholder-shown) + label {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, var(--labelTransformedPosY), 0)
      scale(var(--labelScaleFactor));
    transition: transform var(--inputTransitionDuration), visibility 0ms, z-index 0ms;
  }
`
