import React, {useState, useCallback} from 'react'
import { SelectButton } from './UIkit/SelectButton';
import { RaderPlot } from './components/RaderPlot';

export const Test = () => {
  const [usability, setUsability] = useState(0);
  const [businessOriented, setBusinessOriented] = useState(0);
  const [sociality, setSociality] = useState(0);

  const [points, setPoints] = useState([usability, businessOriented, sociality])


  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
    return setPoints([event.target.value, businessOriented, sociality])
  }, [setUsability]);

  const  selectBusinessOriented  = useCallback((event) => {
    setBusinessOriented(event.target.value)
    return setPoints([usability, event.target.value, sociality])
  }, [setBusinessOriented]);

 

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
      label={"Usabilitly"} value={usability} onChange={selectUsability} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
      <RaderPlot points={points}/>
      </div>
    </div>
  )
}
