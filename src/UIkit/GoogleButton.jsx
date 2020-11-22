import React from "react"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/styles"
import { Icon } from "@material-ui/core"

const useStyles = makeStyles ({
  button: {
    color: "#000",
    fontSize: 18,
    height: 48,
    width: 256
  },
  icon: {
    height: 48,
    width: 48,
  }
})

const GoogleButton = (props) => {
     const classes = useStyles();
  return (
    <label>
      <Button className={classes.button} 
          variant="contained" 
          onClick = {() => props.onClick()} 
          color="secondary"
          >
      {props.label} 
      </Button>
  </label>
  )
}
export default GoogleButton;