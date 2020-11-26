import React,{useEffect} from 'react'
import LightBlueButton from './UIkit/LightBlueButton';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from './reducks/users/operations';
import BoxTextInput from './UIkit/BoxTextInput';
import { fetchPortfolios } from './reducks/Portfolios/operations';
import { getProducts } from './reducks/Portfolios/selector';
import { PortfolioCard } from './components/PortfolioCard';
import { RadioRounded } from '@material-ui/icons';
import { RaderPlot } from './components/RaderPlot';

export const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const portfolios = getProducts(selector) 


  useEffect(() =>{
    dispatch(fetchPortfolios()) 
   }, []);
 
  
  return (
    <div>
      <LightBlueButton
       label={"sign out"}
       onClick={()=> dispatch(signOut())}/>
       <BoxTextInput
       label={"メールアドレス"}/>

         {portfolios.length > 0  && (
         portfolios.map(portfolio => (
          <div>
           <RaderPlot
           points={portfolio.selfEval}
           />
           <PortfolioCard 
             key={portfolio.id} id={portfolio.id}  name={portfolio.name}
           />
         </div>
         ))
       )}   
    </div>
  )
}
