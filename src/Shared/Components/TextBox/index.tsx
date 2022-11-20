import React from "react"
import { InputStyle } from "./style"

interface InputProps {
  disabled: boolean,
  value: number | string,
  type: string,
  placeholder: string,
  label: string,
  onChange: any
}

const TextInput: React.FC<InputProps> = ({disabled, value, type, placeholder, onChange, label}) => {
  return (
    <InputStyle>
      <input
        disabled={disabled}
        value={value}
        type={type}
        id="input"
        className="input-text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className="Input-label">{label}</label>
    </InputStyle>
  )
}

export default TextInput
