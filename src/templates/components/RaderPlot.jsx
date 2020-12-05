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
  maxWidth: "500px"
}
})  

export const RaderPlot = (props) => {
  const classes = useStyles()
  console.log(props.usability)

  const sumUsability = props.usability.reduce((a,b)=>{
    return (a + b) 
  })

const datas = {
  
  labels: [
    "使いやすさ",
    "ビジネス性",
    "社会貢献性",
    "創造性",
    "技術力",
    "総合評価"
  ],
  datasets: [{
    label: "自己評価",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#008b8b",
    pointBackgroundColor:  "#008b8b",
    pointBorderColor: "#fff",
    data: props.selfEval
  },

  {
    label: "みんなの評価",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#ff1493",
    pointBackgroundColor:  "f1493",
    pointBorderColor: "#fff",
    data: [sumUsability / props.usability.length , 2, 2]
  }
]
}

  return (
    <div  className={classes.size} >
      <Radar data={datas}  options={options}/>
    </div>
  )
}
