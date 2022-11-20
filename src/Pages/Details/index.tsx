import React, { useState } from "react"
import { Details } from "./style"

import Converter from "../../Shared/Core/Converter"
import Header from "../../Shared/Core/Header"
import Chart from "../../Shared/Components/Chart"

function DetailsPage() {
  const [, setRecent] = useState([])

  return (
    <>
      <Header />
      <Details>
        {/* <div className='title'>Currency Exchanger</div>  */}
        <Converter setRecent={(recent: any) => setRecent(recent)} />

        <div className="chart">
          <Chart />
        </div>
      </Details>
    </>
  )
}

export default DetailsPage
