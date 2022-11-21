import React from "react"
import { render, screen } from "@testing-library/react"
import Button from "../Button"

describe("renders button", () => {
  test("show button", () => {
    render(<Button disabled={true}> Click me </Button>)
    const button = screen.getByText(/Click me/i)
    expect(button).toBeInTheDocument()
  })

  test("buttton can be disabled", () => {
    const {rerender} = render(<Button disabled={true}> Click me </Button>)

    const button = screen.getByText(/Click me/i)
    expect(button).toHaveAttribute('disabled')

    rerender(<Button disabled={false}> Don't click me </Button>)

    expect(screen.getByText(/Don't click me/i)).not.toHaveAttribute('disabled')
    
  })

  test("component have props", () => {
    const {rerender} = render(<Button disabled={true}> Click me </Button>)

    const button = screen.getByText(/Click me/i)
    expect(button).toBeInTheDocument()

    rerender(<Button disabled={true}> Don't click me </Button>)

    expect(screen.getByText(/Don't click me/i)).toBeInTheDocument()
    
  })
})