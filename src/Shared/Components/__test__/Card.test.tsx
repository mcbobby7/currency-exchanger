import React from "react"
import { render, screen } from "@testing-library/react"
import Card from "../Card"

describe("renders card", () => {
  test("show card", () => {
    render(<Card name="check here" sub="120 doller" />)
    const text1 = screen.getByText(/check here/i)
    expect(text1).toBeInTheDocument()

    const text2 = screen.getByText(/20 doller/i)
    expect(text2).toBeInTheDocument()
  })

  test("component have props", () => {
    const {rerender} = render(<Card name="check here" sub="120 doller" />)

    const button = screen.getByText(/check here/i)
    expect(button).toBeInTheDocument()

    rerender(<Card name="check here" sub="190 doller" />)

    expect(screen.getByText(/190 doller/i)).toBeInTheDocument()
    
  })
})
