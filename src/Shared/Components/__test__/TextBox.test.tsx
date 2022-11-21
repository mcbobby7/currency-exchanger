import React from "react"
import { render, screen } from "@testing-library/react"
import Input from "../TextBox"

const myMock1 = jest.fn()

describe("renders input", () => {
  test("if it disables when disabled", () => {
    render(<Input disabled={true} value={1} type="number" placeholder="Enter Amount" onChange={myMock1} label="amount" />)
    render(<Input disabled={false} value={1} type="number" placeholder="Enter Amount Here" onChange={myMock1} label="amount" />)

    const input = screen.getByPlaceholderText('Enter Amount')
    const input2 = screen.getByPlaceholderText('Enter Amount Here')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('disabled')

    expect(input2).toBeInTheDocument()
    expect(input2).not.toHaveAttribute('disabled')

  })
})