import React from 'react';
import { InputStyle } from './style'

function TextInput(props: any) {
  return (
    <InputStyle>
        <input value={props.value} type={props.type} id="input" className='input-text'  placeholder={props.placeholder} onChange={(e) => props.onChange(e.target.value) } />
        <label  className="Input-label">{props.label}</label>
    </InputStyle>
  );
}

export default TextInput;
