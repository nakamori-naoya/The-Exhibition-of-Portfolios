import React from 'react';
import {TextField} from "@material-ui/core"

const TextInput = (props) => {

 return (
   <TextField
   fullWidth={props.fullWidth}
   label={props.label}
   margin="normal"
   multiline={props.multiline}
   rows={props.rows}
   type={props.type} //typeはimage,text・・・ https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
   value={props.value}
   required={props.required}
   />
 )
}
export default TextInput;