import React from "react"
import { LoaderStyle } from "./style"

interface LoaderProps {}

const TextInput: React.FC<LoaderProps> = () => {
  return (
    <LoaderStyle>
      <div className="ring">
        Loading
        <span></span>
      </div>
    </LoaderStyle>
  )
}

export default TextInput
