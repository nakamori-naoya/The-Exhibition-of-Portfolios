import React, {useState, useCallback} from 'react'
import { SelectButton } from './UIkit/SelectButton';
import { RaderPlot } from './components/RaderPlot';
import LightBlueButton from './UIkit/LightBlueButton';

export const Test = () => {
  const [usability, setUsability] = useState(0);
  const [businessOriented, setBusinessOriented] = useState(0);
  const [sociality, setSociality] = useState(0);
  const [points, setPoints] = useState(usability, businessOriented,sociality);

  

  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
  }, [setUsability]);

  const  selectBusinessOriented  = useCallback((event) => {
    setBusinessOriented(event.target.value)
  }, [setBusinessOriented]);

  const  selectSociality  = useCallback((event) => {
    setSociality(event.target.value)
  }, [setSociality]);

 

  // const  selectBusinessOriented  = useCallback((event) => {
  //   setBusinessOriented(event.target.value)
  //   setPoints([event.target.value,businessOriented, sociality ])
  // }, [setBusinessOriented]);

  return (
    <div>
      <div className="c-content-display">
      <SelectButton
      label={"Usabilitly"} value={usability} onChange={selectUsability} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
      <SelectButton
      label={"BusinessOriented"} value={businessOriented} onChange={selectBusinessOriented} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"ビジネス性"}   />
      
      <SelectButton
      label={"社会性"} value={sociality} onChange={selectSociality} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
      <LightBlueButton
       onClick = {() => setPoints(usability, businessOriented, sociality)} 
       label={"登録"}
      />
      {console.log(setPoints)}
      <RaderPlot points={points}/>
      </div>
    </div>
  )
}
