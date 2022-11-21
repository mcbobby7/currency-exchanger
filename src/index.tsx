import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./Pages/Home"
import Details from "./Pages/Details"
import reportWebVitals from "./reportWebVitals"
import { requestInterceptor } from "./interceptor"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import GlobalStyle from "./globalStyles"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:fromCurrency/:toCurrency/:toAmount",
    element: <Details />,
  },
])
requestInterceptor()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
