import { Grid } from '@material-ui/core';
import React, {useMemo} from 'react'; 

const sliceByNumber = (array , number) => {
  const length = Math.ceil(array.length / number)
  //配列の要素が10で、numberが3のときは、ceilで切り上げするので、lengthは4で新たな配列の要素数が4になる。

  return new Array(length).fill()
    .map((_, i) =>array.slice(i * number, (i + 1) * number)
     //slice(begin, end)で使い、endのindexは含まない
  )
}

const CardList = ({dataSet}) => {

  const dividedDataSet = useMemo(() => sliceByNumber(dataSet, 3),[]);
   
   return (
     <>
       
          <Grid container direction="row" justify="center" alignItems="center">
          {dividedDataSet.map((datas) =>(
             datas.map((data) => (
               <Grid item  xs={4} color="primary">
               {data.name}
               </Grid>
             ))
       ))}
          </Grid>
     </>
   )
}
export default CardList;