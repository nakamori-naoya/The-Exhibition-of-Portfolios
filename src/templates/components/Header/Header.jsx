import React,{useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';
import { useSelector, useDispatch } from 'react-redux';
import {push} from "connected-react-router" 
import { getIsSignedIn } from '../../../reducks/users/selector';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signOut } from '../../../reducks/users/operations';
import SmsIcon from '@material-ui/icons/Sms';

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
  },
  iconStyle: {
    color: "gold",
    marginRight: "20px",
  },
  goldColor:{
    color: "gold",
    marginLeft: "10px"
  },
  title:{
    fontFamily: 'Times New Roman',
    color: "gold",
    margin: "0 0 0 450px",
    fontSize: "30px"

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
         <HomeIcon onClick={()=>dispatch(push("/"))} className={classes.iconStyle} fontSize="large" />
         <SmsIcon onClick={()=>dispatch(push("/"))} className={classes.goldColor} fontSize="large" />

            <h2 className={classes.title}>The &thinsp; Exibition &thinsp; of &thinsp; Portfolios</h2>
            
            {isSignedIn && (
              <div className={classes.iconButtons}>
                <AddToPhotosIcon onClick={()=>dispatch(push("/edit"))} className={classes.iconStyle} fontSize="large" />
                <ExitToAppIcon onClick={()=>dispatch(signOut())} className={classes.goldColor} fontSize="large" />
              </div>  
            )}
         </Toolbar>
      </AppBar>
   </div>
 )
}
export default Header;
