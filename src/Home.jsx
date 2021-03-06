import React,{useEffect} from 'react'
import LightBlueButton from './UIkit/LightBlueButton';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from './reducks/users/operations';
import BoxTextInput from './UIkit/BoxTextInput';
import { fetchPortfolios } from './reducks/Portfolios/operations';
import { getProducts } from './reducks/Portfolios/selector';
import { PortfolioCard } from './templates/components/PortfolioCard';
import { RaderPlot } from './templates/components/RaderPlot';
import SimpleTabs from './UIkit/SimpleTab';

export const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const portfolios = getProducts(selector) 


  useEffect(() =>{
    dispatch(fetchPortfolios()) 
   }, []);
 
  
  return (
    <div>
        <div className="p-grid__row">
         {portfolios.length > 0  && (
         portfolios.map(portfolio => (
           <PortfolioCard
             key={portfolio.id} id={portfolio.id}  appName={portfolio.appName}
             images={portfolio.images}
           />
         ))
       )}   
      </div>
    </div>
  )
}
