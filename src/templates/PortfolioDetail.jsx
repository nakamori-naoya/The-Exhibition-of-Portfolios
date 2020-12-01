import React, {useState, useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {db, FirebaseTimestamp} from "../firebase/index"
import { makeStyles } from '@material-ui/styles';
import { ImageSwiper } from './components/ImageSwiper';
import {Grid, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import { RaderPlot } from './components/RaderPlot';
import ControlledAccordions from '../UIkit/ControlledAccordion';
import EmailIcon from '@material-ui/icons/Email';
import BottomAppBar from '../UIkit/BottomAppBar';



const useStyles = makeStyles(() => ({
  detail: {
      textAlign: 'left',

      },
  icon: {
    height: 96,
    width: 96,
    marginRight: 48
  },
  linkDecoration:{
     color: "inherit"
  },

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
              <Grid container spacing={5}>  
                <Grid  item xs={4} >
                    <div className={classes.detail}>
                        <h2 className="u-text__headline">{portfolio.appName}</h2>

                      <a href={portfolio.appUrl} className={classes.linkDecoration}>
                       <DesktopMacIcon className={classes.icon}/>
                      </a>

                       <a href={portfolio.githubUrl} className={classes.linkDecoration}>
                        <GitHubIcon className={classes.icon}/>
                       </a>
                       <a href={portfolio.githubUrl} className={classes.linkDecoration}>
                        <EmailIcon className={classes.icon}/>
                       </a>
                       <div  className='module-spacer--small' />
                       <RaderPlot/>
                    </div>
                </Grid>
                <Grid  item xs={4} >              
                       <ImageSwiper images={portfolio.images}/>
                </Grid>
                <Grid item xs={4}>
                   <ControlledAccordions
                    backgroundOfCreation={portfolio.backgroundOfCreation} 
                    remakablePoints={portfolio.remakablePoints}
                    futureIssue={portfolio.futureIssue}
                    />
                </Grid>  
                <Grid  item xs={4} >              
                  <BottomAppBar PortfolioId={portfolio.id}/>
                </Grid>
             </Grid>  
            )}
  </>
 )
};

export default PortfolioDetail;