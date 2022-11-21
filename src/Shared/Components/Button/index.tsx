import React from "react"
import { ButtonStyle } from "./style"

interface ButtonProps {
  disabled?: boolean
  children: React.ReactElement | string
}

const Button: React.FC<ButtonProps> = ({ disabled, children }) => {
  return (
    <ButtonStyle>
      <button disabled={disabled}>{children}</button>
    </ButtonStyle>
  )
}

export default Button
