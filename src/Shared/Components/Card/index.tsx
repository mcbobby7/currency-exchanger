import React from "react"
import { CardStyle } from "./style"

interface CardProps {
  name: string,
  sub: string
}

const Card: React.FC<CardProps> = ({name, sub})=>{
  return (
    <CardStyle>
      <div className="container">
        {name} ({sub})
      </div>
    </CardStyle>
  )
}

export default Card
