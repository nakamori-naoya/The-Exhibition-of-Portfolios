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
import AndroidIcon from '@material-ui/icons/Android';
import LightBlueButton from '../UIkit/LightBlueButton';
import snsIcon from '../assets/img/snsIcon.png'; 
import { SelectButton } from '../UIkit/SelectButton';



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

  const [usability, setUsability] = useState(0);
  const [businessOriented, setBusinessOriented] = useState(0);
  const [sociality, setSociality] = useState(0);

  const  selectUsability  = useCallback((event) => {
    setUsability(event.target.value)
  }, [setUsability]);

  const  selectBusinessOriented  = useCallback((event) => {
    setBusinessOriented(event.target.value)
  }, [setBusinessOriented]);

  const  selectSociality  = useCallback((event) => {
    setSociality(event.target.value)
  }, [setSociality]);


 return (
   <>
            {portfolio && (
              <>
              <Grid container spacing={5}>  
                <Grid  item xs={4} >
                    <div className={classes.detail}>
                        <h2 className="u-text__headline">{portfolio.appName}</h2>

                      <a href={portfolio.appUrl} className={classes.linkDecoration}>
                       <AndroidIcon className={classes.icon}/>
                      </a>
                       <a href={portfolio.githubUrl} className={classes.linkDecoration}>
                        <GitHubIcon className={classes.icon}/>
                       </a>
                       <a href={portfolio.githubUrl} className={classes.linkDecoration}>
                         <img alt="" src={snsIcon} className={classes.icon} />
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
             </Grid>  
             
      <div className="c-content-display c-section-wrapin">
      <SelectButton
      label={"Usability"} value={usability} onChange={selectUsability} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"使いやすさを評価して下さい"}   />
      <SelectButton
      label={"Sociality"} value={sociality} onChange={selectSociality} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"社会貢献性を評価して下さい"}   />
      <SelectButton
      label={"Businness Oriented"} value={businessOriented} onChange={selectBusinessOriented} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"ビジネス性を評価して下さい"}   />
      </div> 

      <div className="c-content-display c-section-wrapin">
      <SelectButton
      label={"Creativity"} value={businessOriented} onChange={selectBusinessOriented} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"発想の柔軟性を評価して下さい"}   />
      <SelectButton
      label={"Technological Strength"} value={businessOriented} onChange={selectBusinessOriented} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"技術力を評価して下さい　　　"}   />
      <SelectButton
      label={"Total Count"} value={businessOriented} onChange={selectBusinessOriented} 
      datas={[1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0]} description={"総合評価を教えて下さい"}   />
      </div>
    </>  
            )}
  </>
 )
};

export default PortfolioDetail;