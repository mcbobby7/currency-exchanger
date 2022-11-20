import React from "react"
import { CardStyle } from "./style"

export default function Card(props: any) {
  return (
    <CardStyle>
      <div className="container">
        {props.name} ({props.sub})
      </div>
    </CardStyle>
  )
}
