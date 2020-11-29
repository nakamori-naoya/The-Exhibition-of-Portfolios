import React from 'react'
import {Radar} from "react-chartjs-2"
import { makeStyles } from '@material-ui/core/styles';



const options = {
  scale: {
    ticks: {
      suggestedMin: 0,
      suggestedMax: 5.0
  }
  }}

const useStyles = makeStyles( {
size:{
  width: "600px"
}
})  

export const RaderPlot = (props) => {
  const classes = useStyles()

const datas = {
  labels: [
    "ユーザーエクスペリエンス",
    "ビジネス生",
    "社会性",
    "Business-oriented",
    "課題解決",
    "満足度"
  ],
  datasets: [{
    label: "自己評価",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#008b8b",
    pointBackgroundColor:  "#008b8b",
    pointBorderColor: "#fff",
    data: [props.usability, props.businessOriented, props.sociality]
  },

  {
    label: "みんなの評価",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#ff1493",
    pointBackgroundColor:  "f1493",
    pointBorderColor: "#fff",
    data: [1,2,2]
  }
]
}

  return (
    <div  className={classes.size} >
      <Radar data={datas}  options={options}/>
    </div>
  )
}