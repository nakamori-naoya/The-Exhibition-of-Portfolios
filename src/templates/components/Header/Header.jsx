import React,{useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import google from "../../../assets/img/google.png"
import { useSelector, useDispatch } from 'react-redux';
import {push} from "connected-react-router" 
import { getIsSignedIn } from '../../../reducks/users/selector';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,   
  },
  menubar: {
    backgroundColor: "#272F57",
    color: "#444",
  },
  toolBar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%"
  },
  iconButtons: {
    margin : "0 0 0 auto",
  }
})

const Header = () => {

  const classes = useStyles();
  const selector = useSelector(state => state); 
  const isSignedIn = getIsSignedIn(selector);
  const dispatch = useDispatch();
  



 return (
   <div  className={classes.root}>
      <AppBar position="fixed"  className={classes.menubar}>
         <Toolbar classNeme={classes.toolBar}>
            <img src={google} alt="ロゴ" width="60px" 
            onClick={() => dispatch(push("/"))}
            />
            {isSignedIn && (
              <div className={classes.iconButtons}>
                <AddToQueueIcon onClick={()=>dispatch(push("/edit"))} color="secondary" fontSize="large" />
              </div>  
            )}
         </Toolbar>
      </AppBar>
   </div>
 )
}
export default Header;
