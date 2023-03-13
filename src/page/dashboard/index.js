
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableCustom from '../../components/Table';
import AreaRechartComponent from '../../components/Chart';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Statistics from '../../components/Statistics'
import Layout from '../../components/Layout';
import { Link } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin:'auto',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'87%',
  },
}));

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <Layout>
          <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          <Typography style={{marginTop:"0rem" }}  color="primary"  variant="h4" gutterBottom>
            Dashboard
          </Typography>
        
        </Grid>
         
        <Grid item xs={12} sm={4} lg={4} md={4}>
      
          <Paper className={classes.paper}>
            <Typography  color="primary" variant="h6" gutterBottom>
            Recent Deposits    
            </Typography>
            <Typography style={{color:"black"}} variant="h6" gutterBottom>
                $3,024.00
            </Typography>
            <Typography variant="h6" gutterBottom>
              on 15 March,2022
            </Typography>
            <Typography variant="h6" gutterBottom style={{color:"blue"}}>
            <Link>
              View balance
              </Link>
               
            </Typography>
          </Paper>
         
       
        </Grid>

        <Grid item xs={12} sm={4} lg={4} md={4}>
        <Paper className={classes.paper}>
            <Typography  color="primary" variant="h6" gutterBottom>
            Recent Deposits    
            </Typography>
            <Typography style={{color:"black"}} variant="h6" gutterBottom>
                $3,024.00
            </Typography>
            <Typography variant="h6" gutterBottom>
              on 15 March,2022
            </Typography>
            <Typography variant="h6" gutterBottom style={{color:"blue"}}>
              <Link>
              View balance
              </Link>
               

            </Typography>
          </Paper>
         
     
        </Grid>
        <Grid item xs={12} sm={4} lg={4} md={4}>
        <Paper className={classes.paper}>
            <Typography  color="primary" variant="h6" gutterBottom>
            Recent Deposits    
            </Typography>
            <Typography style={{color:"black"}} variant="h6" gutterBottom>
                $3,024.00
            </Typography>
            <Typography variant="h6" gutterBottom>
              on 15 March,2022
            </Typography>
            <Typography variant="h6" gutterBottom style={{color:"blue"}}>
            <Link>
              View balance
              </Link>
               
            </Typography>
          </Paper>
         
     
        </Grid>
   
        <div style={{maxWidth:600 ,margin:"auto"}}>
        <Statistics/>
        </div>
        < AreaRechartComponent/>
   
        <TableCustom/>

      </Grid>
    </div>
    </Layout>
  
  );
}
