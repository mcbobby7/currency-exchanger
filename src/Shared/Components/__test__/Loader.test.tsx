import React from "react"
import { render, screen } from "@testing-library/react"
import Loader from "../Loader"

describe("renders card", () => {
  test("show card", () => {
    render(<Loader />)
    const text1 = screen.getByText(/loading/i)
    expect(text1).toBeInTheDocument()
  })
})
