import React, {useState, useEffect, useCallback} from 'react';
import { useSelector } from 'react-redux';
import {db, FirebaseTimestamp} from "../firebase/index"
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { ImageSwiper } from './components/ImageSwiper';


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
}))




const PortfolioDetail = () => {

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
                <div className="p-grid__row">
                    <div className={classes.sliderBox}>
                       <ImageSwiper images={portfolio.images}/>
                    </div>
                    <div className={classes.detail}>
                        <h2 className="u-text__headline">{portfolio.appName}</h2>
                        <a src={portfolio.appUrl}>aaa</a>
                        <div className="module-spacer--small"/>
                    </div>
                </div>
            )}
  </>
 )
};

export default PortfolioDetail;