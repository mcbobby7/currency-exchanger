import React from 'react';
import { ButtonStyle } from './style'

function Button(props: any) {
  return (
    <ButtonStyle>
      {props.children}
    </ButtonStyle>
  );
}

export default Button;
