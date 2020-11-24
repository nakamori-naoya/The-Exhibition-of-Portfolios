import React,{useState, useCallback} from 'react'
import {Radar} from "react-chartjs-2"
import { makeStyles } from '@material-ui/core/styles';
import { SelectButton } from '../UIkit/SelectButton';


const data = {
  labels: [
    "Usability",
    "Functions",
    "Design",
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
    data: []
  },

  {
    label: "みんなの評価",
    backgroundColor: "rgba(179,181,198,0.2)",
    borderColor: "#ff1493",
    pointBackgroundColor:  "f1493",
    pointBorderColor: "#fff",
    data: [3, 3, 5, 2, 4, 3]
  }
]
}

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

export const RaderPlot = () => {
  const classes = useStyles()

  const [usability, setUsability] = useState('');

  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
  }, [setUsability]);

  return (
    <div  className={classes.size} >
      <Radar data={data}  options={options}/>

      <SelectButton
      label={"Usabilitly"} value={usability} onChange={selectUsability} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
      <SelectButton
      label={"Usabilitly"} value={usability} onChange={selectUsability} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
    </div>
  )
}
