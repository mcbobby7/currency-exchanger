import React from 'react';
import { ButtonStyle } from './style'

function Button(props: any) {
  return (
    <ButtonStyle>
        <button disabled={props.disabled}>{props.children}</button>
      
    </ButtonStyle>
  );
}

export default Button;
