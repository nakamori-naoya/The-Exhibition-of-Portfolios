import React from "react"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles ({
  "button": {
    color: "#000",
    fontSize: 20,
    height: 48,
    marginBottom: 16,
    width: 256
  }
})

const PrimaryButton = (props) => {
     const classes = useStyles();
  return (
  <Button className={classes.button} variant="contained" onClick = {() => props.onClick()} color="Primary">
    {props.label} 
  </Button>
  )
}
export default PrimaryButton