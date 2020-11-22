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
   type={props.type} 
   value={props.value}
   required={props.required}
   onChange={props.onChange}
   />
 )
}
export default TextInput;