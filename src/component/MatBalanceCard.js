
import * as React from "react"
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    chip: {
      marginRight: theme.spacing(1),
     // color: rgb(7, 123, 34),
      height: 18,
      width: 36,
      marginTop: '3%'
     
    },
    section1: {
      margin: theme.spacing(1,2),
    },
    section2: {
      margin: theme.spacing(2),
    },
    section3: {
      margin: theme.spacing(3, 1, 1),
    },
    HeadType:{
        fontFamily:'Avanta Garde',
      },
      cardBorder:{
        //  borderTop:'3px solid',
        borderWidth:1,
       // borderTopColor:'#155724',
        border:'1px solid rgb(7, 123, 34)'
      },
      cardBorderTop:{
          borderTop:'3px solid',
        borderWidth:2,
        borderTopColor:'#3f51b5',
        //border:'2px solid'
      },
  }),
);



export default function MatBalanceCard(props) {
  console.log(props);
  const classes = useStyles();
if(props.fullborder === true && props.allprice===false){
    return (
        <Card className={classes.root} className={classes.cardBorder}>
          <div className={classes.section1}>
            <Grid container alignItems="center" >
              <Grid item xs>
                <Typography gutterBottom variant="h5" className={classes.HeadType}>
                Available Rewards Balance
                </Typography>
              </Grid>
             
            </Grid>
          </div>
          <Divider variant="middle" />
          <div className={classes.section1}>
            <Grid container alignItems="center">
              <Grid container xs={6}>
              <Typography gutterBottom variant="h6" style={{color:'rgb(7, 123, 34)'}}>
                  $0.00
                </Typography>
              <Chip className={classes.chip} style={{color:'rgb(7, 123, 34)'}} label="YTD" />
              </Grid>
              {/* <Grid container xs={6}>
              <Typography gutterBottom variant="h6">
                  $0.00
                </Typography>
              <Chip className={classes.chip} label="YTD" />
              </Grid> */}
            </Grid>
          </div>
        </Card>
    );
}else 
    return (
        <Card className={classes.root} className={classes.cardBorderTop}>
          <div className={classes.section1}>
            <Grid container alignItems="center" >
              <Grid item xs>
                <Typography gutterBottom variant="h5" className={classes.HeadType}>
                {props.titile}
                </Typography>
              </Grid>
             
            </Grid>
          </div>
          <Divider variant="middle" />
          <div className={classes.section1}>
            <Grid container alignItems="center">
              <Grid container xs={6}>
              <Typography gutterBottom variant="h6">
                  $0.00
                </Typography>
              <Chip className={classes.chip} label="YTD" />
              </Grid>
              {props.allprice !== false?<Grid container xs={6}>
              <Typography gutterBottom variant="h6">
                  $0.00
                </Typography>
              <Chip className={classes.chip} label="MTD" />
              </Grid>:<Grid container xs={6}></Grid>}
            </Grid>
          </div>
        </Card>
    );

}