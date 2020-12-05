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

export const RaderPlot = React.memo((props) => {
  const classes = useStyles()

  const userEval =() =>{
    if(props.usability.length === 0 || props.sociality.length === 0 || props.businessOriented.length === 0 || props.creativity.length === 0 || props.skill.length === 0 || props.totalCount.length === 0 ){
      return [0,0,0,0,0,0]
    }else{
      const sumUsability = props.usability.reduce((a,b)=>{
        return (a + b) 
      })
    
      const sumSociality = props.sociality.reduce((a,b)=>{
        return (a + b) 
      })
    
      const sumBusinessOriented = props.businessOriented.reduce((a,b)=>{
        return (a + b) 
      })
    
      const sumCreativity = props.creativity.reduce((a,b)=>{
        return (a + b) 
      })
    
      const sumSkill = props.skill.reduce((a,b)=>{
        return (a + b) 
      })
    
      const sumTotalCount = props.totalCount.reduce((a,b)=>{
        return (a + b) 
      })

     return [sumUsability / props.usability.length , sumBusinessOriented / props.businessOriented.length, 
        sumSociality / props.sociality.length, sumCreativity / props.creativity.length,
        sumSkill / props.skill.length, sumTotalCount / props.totalCount.length]
    }
}
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
    data: userEval()
  }
]
}

  return (
    <div  className={classes.size} >
      <Radar data={datas}  options={options}/>
    </div>
  )
}
)
