import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
    },
  },
}));




const BoxTextInput = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"  variant="outlined"  color="secondary" margin="normal"
        fullWidth={props.fullWidth}  label={props.label}  multiline={props.multiline} rows={props.rows}
        type={props.type}  value={props.value} required={props.required} onChange={props.onChange} placeholder={props.placeholder}
      />
    </form>
  );
}

export default BoxTextInput;

