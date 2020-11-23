import React from 'react'
import BoxTextInput from '../UIkit/BoxTextInput';


export const EditPortofolio = () => {
   
  return (
    <section>
      <h2 className="u-text__headline u-text-center" >商品の登録と編集</h2>
      <div className="c-section-container">
         <BoxTextInput
         fullWidth={true} label={"ポートフォリオ名"} multiline={false} required={true}
         onChange={} rows={1} value={name} type={"text"} placeholder={"Education-Bridge"}
         />
         <BoxTextInput
         fullWidth={true} label={"こだわり"} multiline={true} required={true}
         onChange={} rows={5} value={name} type={"text"} placeholder={"Education-Bridge"}
         />
      </div>
    </section>
  )
}
