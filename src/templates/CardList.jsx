import React from 'react'; 

const sliceByNumber = (array , number) => {
  const length = Math.ceil(array.length / number)
  //配列の要素が10で、numberが3のときは、ceilで切り上げするので、lengthは4で新たな配列の要素数が4になる。

  return new Array(length).fill()
    .map((_, i) =>array.slice(i * number, (i + 1) * number)
     //slice(begin, end)で使い、endのindexは含まない
  )
}

const  CardList = ({dataSet}) => {
  const newDatas = sliceByNumber(dataSet, 5)
  console.log(newDatas)

  return (
      { }
  )
 
}

export default CardList