import React, {useState, useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {db, FirebaseTimestamp} from "../firebase/index"
import { makeStyles } from '@material-ui/styles';
import { ImageSwiper } from './components/ImageSwiper';
import {Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import {push } from 'connected-react-router';


const useStyles = makeStyles(() => ({
  sliderBox:{
          margin: '0 auto',
          height: 400,
          width: 400
      },
  detail: {
      textAlign: 'left',
          margin: '0 auto 16px auto',
          height: 320,
          width: 320

      },
  icon: {
    height: 48,
    width: 48
  }
}))




const PortfolioDetail = () => {
  const dispatch = useDispatch(); 
  const classes = useStyles()
  const selector = useSelector((state) => state)
  const path = selector.router.location.pathname
  const id = path.split('/portfolio/')[1]


  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
      db.collection('portfolio').doc(id).get()
          .then(doc => {
          const data = doc.data()
          setPortfolio(data)
      })
  },[])


 return (
   <>
            {portfolio && (
              <Grid container spacing={3}>
                <Grid container item xs={4} spacing={1}>
                    <div className={classes.sliderBox}>
                       <ImageSwiper images={portfolio.images}/>
                    </div>
                </Grid>    
                <Grid container item xs={4} spacing={3}>
                    <div className={classes.detail}>
                        <h2 className="u-text__headline">{portfolio.appName}</h2>
                        <a href={portfolio.appUrl}>アプリはこちら</a>
                        <div className="module-spacer--small"/>
                       
                       <a href={portfolio.githubUrl}>
                          <GitHubIcon className={classes.icon}/>
                       </a>
                       
                    </div>
                </Grid>


             </Grid>  
            )}
  </>
 )
};

export default PortfolioDetail;