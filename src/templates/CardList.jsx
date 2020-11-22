// import { Grid } from '@material-ui/core';
// import React, {useMemo} from 'react'; 
// import {makeStyles} from "@material-ui/styles"
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: "1000px",
//     margin: "0 auto",
//     marginTop: "60px"
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
// }));

// const CardList = ({dataSet}) => {
//   const classes = useStyles();
//    return (
//      <div className={classes.root}>
//       <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
//           {dataSet.map((datas) =>(
//           <Grid item  xs={6} >
//             <Card>
//               <CardMedia
//                 className={classes.media}
//                 image="../images/aa.png"
//               />
//               <Typography variant="body2" color="textSecondary" component="p">
//                {datas.lesson}
//                This impressive paella is a perfect party dish and a fun meal to cook together with your
//                guests. Add 1 cup of frozen peas along with the mussels, if you like.
//              </Typography>
//             </Card>  
//           </Grid>
//        ))}
//       </Grid>
//      </div>
//    )
// }

// export default CardList;