import { db, FirebaseTimestamp } from '../../firebase/index';
import { push } from 'connected-react-router';

const portfolioRef = db.collection("portfolio")

export const savePortfolio = (id, appName, appUrl, githubUrl, backgroudOfCreation, growth, futureIssue) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()
    const data ={
      appName: appName,
      appUrl: appUrl,
      githubUrl: githubUrl,
      backgroudOfCreation: backgroudOfCreation,
      growth: growth,
      futureIssue: futureIssue,
      updated_at: timestamp
    }
    
    //今はtrueにしているが、本当はしっかり条件分岐させる必要がある！！
   if(true){
     const ref = portfolioRef.doc();
     id = ref.id
     data.id = id;
     data.created_at = timestamp
   }
   //doc(id)のidは引数で渡ってきたidではない！！ if文内で再代入されたidのこと！！
   return portfolioRef.doc(id).set(data, {merge: true})
      .then(()=>{
        dispatch(push("/"))
      }).catch((error)=>{
        throw new Error(error)
      })

}
}