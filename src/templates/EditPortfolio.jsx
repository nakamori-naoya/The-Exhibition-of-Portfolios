import React from 'react'
import BoxTextInput from '../UIkit/BoxTextInput';
import TextInput from '../UIkit/TextInput';
import { useState, useCallback } from 'react';
import LightBlueButton from '../UIkit/LightBlueButton';
import { useDispatch } from 'react-redux';
import { savePortfolio } from '../reducks/Portfolios/operations';
import { SelectButton } from '../UIkit/SelectButton';
import ImageArea from './components/ImageArea';



export const EditPortofolio = () => {

  let id = window.location.pathname.split('/edit')[1];
    if (id !== "") {
        id = id.split('/')[1]
   }

  const dispatch = useDispatch(); 
  

  const [appName, setAppName] = useState(""),
        [appUrl, setAppUrl] = useState(""),
        [githubUrl, setGithubUrl] = useState(""),
        [backgroudOfCreation, setBackgroudOfCreation] = useState(""),
        [growth, setGrowth] = useState(""),
        [futureIssue, setFutureIssue] = useState(""),
        [images, setImages] = useState([])

  const  inputAppName  = useCallback((event) => {
    setAppName(event.target.value)
  }, [setAppName]);

  const  inputAppUrl  = useCallback((event) => {
    setAppUrl(event.target.value)
  }, [setAppUrl]);

  const  inputGithubUrl  = useCallback((event) => {
    setGithubUrl(event.target.value)
  }, [setGithubUrl]);

  const  inputBackgroudOfCreation  = useCallback((event) => {
    setBackgroudOfCreation(event.target.value)
  }, [setBackgroudOfCreation]);

  const  inputGrowth  = useCallback((event) => {
    setGrowth(event.target.value)
  }, [setGrowth]);

  const  inputFutureIssue  = useCallback((event) => {
    setFutureIssue(event.target.value)
  }, [setFutureIssue]);

  const [usability, setUsability] = useState(0);
  const [businessOriented, setBusinessOriented] = useState(0);
  const [sociality, setSociality] = useState(0);

  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
  }, [setUsability]);

  const  selectBusinessOriented  = useCallback((event) => {
    setBusinessOriented(event.target.value)
  }, [setBusinessOriented]);

  const  selectSociality  = useCallback((event) => {
    setSociality(event.target.value)
  }, [setSociality]);
  

  return (
    <section>
      <h2 className="u-text__headline u-text-center" >アプリを出展</h2>
      <div className="c-section-container">

        <ImageArea images={images} setImages={setImages} />
        
         <BoxTextInput
         fullWidth={true} label={"アプリ名"} multiline={false} required={true} 
         onChange={inputAppName} rows={1} value={appName} type={"text"} placeholder={"Education-Bridge"}
         />
         <BoxTextInput
         fullWidth={true} label={"アプリのURL"} multiline={false} required={true}
         onChange={inputAppUrl} rows={1} value={appUrl} type={"text"} placeholder={"https://ec-app-b602f.firebaseapp.com/"}
         />
         <BoxTextInput
         fullWidth={true} label={"GithubのURL"} multiline={false} required={true}
         onChange={inputGithubUrl} rows={1} value={githubUrl} type={"text"} placeholder={"https://github.com/nakamori-naoya"}
         />
         <TextInput
         fullWidth={true} label={"作成の動機"} multiline={true} required={true} 
         onChange={inputBackgroudOfCreation} rows={3} rowsMax={5} value={backgroudOfCreation} type={"text"} placeholder={"あなたがなぜこのアプリを作成したのかをご記入ください。"}
         />
         <TextInput
         fullWidth={true} label={"ここに注目"} multiline={true} required={true}
         onChange={inputGrowth} rows={3} rowsMax={5} value={growth} type={"text"} placeholder={"あなたがこのアプリの特にここ見て欲しいという部分をご記入ください"}
         />
         <TextInput
         fullWidth={true} label={"今後の課題"} multiline={true} required={true}
         onChange={inputFutureIssue} rows={3} rowsMax={5} value={futureIssue} type={"text"} placeholder={"Firebaseでのクエリの投げ方がいまいち分からず、ユーザーが検索する際に・・・"}
         />
         <div className="c-content-display">
      <SelectButton
      label={"Usabilitly"} value={usability} onChange={selectUsability} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
      <SelectButton
      label={"BusinessOriented"} value={businessOriented} onChange={selectBusinessOriented} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"ビジネス性"}   />
      <SelectButton
      label={"sociality"} value={sociality} onChange={selectSociality} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを教えてください"}   />
      </div>

      <div className="center">
        <div  className="module-spacer--small"/> 
          <LightBlueButton
          label={"登録"}
          onClick={()=>dispatch(savePortfolio(id, appName, appUrl, githubUrl, backgroudOfCreation, growth, futureIssue, usability, businessOriented, sociality))}
          />
        </div>
      </div>
    </section>
  )
}
