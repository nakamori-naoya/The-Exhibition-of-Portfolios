import { db, FirebaseTimestamp } from '../../firebase/index';
import { push } from 'connected-react-router';
import { fetchPortfoliosAction } from './actions';
import firebase from "firebase/app"


export const savePortfolio = (id, appName, appUrl, githubUrl, snsUrl, backgroundOfCreation, remakablePoints, futureIssue, usability, businessOriented, sociality, creativity, skill, totalCount, images) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()
    const data ={
      appName: appName,
      appUrl: appUrl,
      githubUrl: githubUrl,
      snsUrl: snsUrl,
      backgroundOfCreation: backgroundOfCreation,
      remakablePoints: remakablePoints,
      futureIssue: futureIssue,
      updated_at: timestamp,
      selfEval: [usability, sociality, businessOriented, creativity, skill, totalCount],
      usability: [],
      sociality: [],
      businessOriented: [],
      creativity: [],
      skill: [],
      totalCount: [],
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


export const saveEvaluation = (id, usability, sociality, businessOriented, creativity, skill, totalCount ) => {
  return async (dispatch) => {
   const portfolioRef =  db.collection("portfolio").doc(id)
   portfolioRef.update({
    usability: firebase.firestore.FieldValue.arrayUnion(usability),
    sociality: firebase.firestore.FieldValue.arrayUnion(sociality),
    businessOriented: firebase.firestore.FieldValue.arrayUnion(businessOriented),
    creativity: firebase.firestore.FieldValue.arrayUnion(creativity),
    skill: firebase.firestore.FieldValue.arrayUnion(skill),
    totalCount: firebase.firestore.FieldValue.arrayUnion(totalCount),
})
   .then(()=>{
    let id = window.location.pathname
    console.log(id)
     dispatch(push(id))
   })
  }
}