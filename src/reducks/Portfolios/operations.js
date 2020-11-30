import { db, FirebaseTimestamp } from '../../firebase/index';
import { push } from 'connected-react-router';
import { fetchPortfoliosAction } from './actions';


export const savePortfolio = (id, appName, appUrl, githubUrl, backgroundOfCreation, remakablePoints, futureIssue, usability, businessOriented, sociality, images) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()
    const data ={
      appName: appName,
      appUrl: appUrl,
      githubUrl: githubUrl,
      backgroundOfCreation: backgroundOfCreation,
      remakablePoints: remakablePoints,
      futureIssue: futureIssue,
      updated_at: timestamp,
      usability: usability, 
      businessOriented: businessOriented, 
      sociality: sociality,
      images: images
    }

    //今はtrueにしているが、本当はしっかり条件分岐させる必要がある！！
   if(true){
     const ref = db.collection("portfolio").doc();
     id = ref.id
     data.id = id;
     data.created_at = timestamp
   }
   //doc(id)のidは引数で渡ってきたidではない！！ if文内で再代入されたidのこと！！
   return db.collection("portfolio").doc(id).set(data, {merge: true})
      .then(()=>{
        dispatch(push("/"))
      }).catch((error)=>{
        throw new Error(error)
      })

}
}


//取得
export const fetchPortfolios = () => {
  return async (dispatch) => {
    db.collection("portfolio").orderBy("updated_at", "desc").get()
       .then(snapshots => {
         const portfolioList = []
         snapshots.forEach(snapshot => {
           const portfolio = snapshot.data();
           portfolioList.push(portfolio)
         })
         dispatch(fetchPortfoliosAction(portfolioList))
       })
  }
}


// export const evalPortfolio = (id) => {
//   return async (dispatch) => {
//     db.collection("portfolio").doc(id)
//      .then(snapshot => {
//        const data = snapshot.data()
       
//      })
//   }
// }