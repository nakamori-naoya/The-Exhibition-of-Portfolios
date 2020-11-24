import React from 'react'
import {Radar} from "react-chartjs-2"

const data = {
  labels: [
    "Usability",
    "機能満足",
    "デザイン",
    "ビジネス視点",
    "課題解決",
    "満足度"
  ],
  datasets: [{
    label: "Person A",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#008b8b",
    pointBackgroundColor:  "#008b8b",
    pointBorderColor: "#fff",
    data: [1, 2, 3, 4, 5, 2]
  },
  {
    label: "Person B",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#ff1493",
    pointBackgroundColor:  "#ff1493",
    pointBorderColor: "#fff",
    data: [3, 3, 5, 2, 4, 3]
  }
  
]
}

export const RaderPlot = () => {
  return (
    <div>
      <Radar data={data}/>
    </div>
  )
}
