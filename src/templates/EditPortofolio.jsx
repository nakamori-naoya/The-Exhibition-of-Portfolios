import React from 'react'
import BoxTextInput from '../UIkit/BoxTextInput';
import TextInput from '../UIkit/TextInput';
import { useState, useCallback } from 'react';


export const EditPortofolio = () => {
  const [appName, setAppName] = useState(""),
        [appUrl, setAppUrl] = useState(""),
        [backgroudOfCreation, setBackgroudOfCreation] = useState(""),
        [growth, setGrowth] = useState(""),
        [futureIssue, setFutureIssue] = useState("");

  const  inputAppName  = useCallback((event) => {
    setAppName(event.target.value)
  }, [setAppName]);

  const  inputAppUrl  = useCallback((event) => {
    setAppUrl(event.target.value)
  }, [setAppUrl]);

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
      <h2 className="u-text__headline u-text-center" >商品の登録と編集</h2>
      <div className="c-section-container">
         <BoxTextInput
         fullWidth={true} label={"アプリ名"} multiline={false} required={true}
         onChange={inputAppName} rows={1} value={appName} type={"text"} placeholder={"Education-Bridge"}
         />
         <BoxTextInput
         fullWidth={true} label={"アプリのURL"} multiline={false} required={true}
         onChange={inputAppUrl} rows={1} value={appUrl} type={"text"} placeholder={"Education-Bridge"}
         />
         <TextInput
         fullWidth={true} label={"作成の動機"} multiline={true} required={true}
         onChange={inputBackgroudOfCreation} rows={5} value={backgroudOfCreation} type={"text"} placeholder={"技術面・デザイン面"}
         />
         <TextInput
         fullWidth={true} label={"成長点"} multiline={true} required={true}
         onChange={inputGrowth} rows={5} value={growth} type={"text"} placeholder={"前回作成したアプリで実装できなかった○○の実装をすることができた"}
         />
         <TextInput
         fullWidth={true} label={"今後の課題"} multiline={true} required={true}
         onChange={inputFutureIssue} rows={5} value={futureIssue} type={"text"} placeholder={"Firebaseでのクエリの投げ方がいまいち分からず、ユーザーが検索する際に・・・"}
         />

      </div>
    </section>
  )
}
