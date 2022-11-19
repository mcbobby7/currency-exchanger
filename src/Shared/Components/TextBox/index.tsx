import React from 'react';
import { InputStyle } from './style'

function TextInput() {
  return (
    <InputStyle>
        <input type="text" id="input" className='input-text'  placeholder="Your first name, e.g. Nicholas" />
        <label  className="Input-label">First name</label>
    </InputStyle>
  );
}

export default TextInput;
