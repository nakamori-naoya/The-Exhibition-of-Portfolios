import React from 'react'
import BoxTextInput from '../UIkit/BoxTextInput';
import TextInput from '../UIkit/TextInput';
import { useState, useCallback } from 'react';
import LightBlueButton from '../UIkit/LightBlueButton';
import { useDispatch , useSelector} from 'react-redux';
import { savePortfolio } from '../reducks/Portfolios/operations';
import { RaderPlot } from '../components/RaderPlot';


export const EditPortofolio = () => {
  
  let id = window.location.pathname.split('/product/edit')[1];
    if (id !== "") {
        id = id.split('/')[1]
   }

  const dispatch = useDispatch(); 
  

  const [appName, setAppName] = useState(""),
        [appUrl, setAppUrl] = useState(""),
        [githubUrl, setGithubUrl] = useState(""),
        [backgroudOfCreation, setBackgroudOfCreation] = useState(""),
        [growth, setGrowth] = useState(""),
        [futureIssue, setFutureIssue] = useState("");

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



  return (
    <section>
      <h2 className="u-text__headline u-text-center" >アプリを出展</h2>
      <div className="c-section-container">
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
         onChange={inputBackgroudOfCreation} rows={3} rowsMax={5} value={backgroudOfCreation} type={"text"} placeholder={"中学生向けの英語教材に音声読み上げ機能がついていないことに以前から・・・"}
         />
         <TextInput
         fullWidth={true} label={"成長した点"} multiline={true} required={true}
         onChange={inputGrowth} rows={3} rowsMax={5} value={growth} type={"text"} placeholder={"前回作成したアプリで実装できなかった○○の実装をすることができた"}
         />
         <TextInput
         fullWidth={true} label={"今後の課題"} multiline={true} required={true}
         onChange={inputFutureIssue} rows={3} rowsMax={5} value={futureIssue} type={"text"} placeholder={"Firebaseでのクエリの投げ方がいまいち分からず、ユーザーが検索する際に・・・"}
         />
         <div className="center">
          <div  className="module-spacer--small"/> 
          <LightBlueButton
          label={"登録"}
          onClick={()=>dispatch(savePortfolio(id, appName, appUrl, githubUrl, backgroudOfCreation, growth, futureIssue))}
          />
        </div>
      </div>
      <RaderPlot></RaderPlot>
    </section>
  )
}
