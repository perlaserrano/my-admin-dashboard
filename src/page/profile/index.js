
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from '../../components/Layout';
import ActionAreaCard from '../../components/Cards'
import MyButton from '../../components/Button'
// import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'12px',
    backgroundColor:'#f3f3fb',
  },
  paper: {
    margin:'auto',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:'87%',
  },
}));

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <Layout>
          <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} >
          <Typography style={{marginTop:"0rem" }}  color="primary"  variant="h4" gutterBottom>
            Profile
          </Typography>
        </Grid>
       
        <Grid item xs={12} sm={4} lg={4} md={4}>
      <ActionAreaCard/>
  
          <h5>WORK LINK</h5> 
        <Typography  variant="h6" gutterBottom>
        Website Link
        </Typography>
        <Typography variant="h6" gutterBottom>
        Bootsnipp Profile
        </Typography>
        
        <Typography variant="h6" gutterBottom>
        Bootply Profile
        </Typography>

          <h5>SKILLS</h5> 

        <Typography variant="h6" gutterBottom>
        Web Designer
        </Typography>
        
        <Typography variant="h6" gutterBottom>
        Web Developer
        </Typography>
        
        <Typography variant="h6" gutterBottom>
        WordPress
        </Typography>
        
        <Typography variant="h6" gutterBottom>
        WooCommerce
        </Typography>
        
        <Typography variant="h6" gutterBottom>
        PHP, .Net
        </Typography>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} md={4}>
        <Typography  color="" variant="h6" gutterBottom>
       Perla Serrano  
        </Typography>
        <Typography color="primary" variant="h6" gutterBottom>
        Web Developer and Designer
        </Typography>
        <Typography variant="h6" gutterBottom>
        RANKINGS : 8/10
        </Typography>
        <h3>About</h3>    
        <hr/>    

        <Typography variant="h6" gutterBottom>
        User Id
        </Typography>

        <Typography variant="h6" gutterBottom>
        Name
        </Typography>

        <Typography variant="h6" gutterBottom>
        Email
        </Typography>

        <Typography variant="h6" gutterBottom>
        Phone
        </Typography>
        <Typography variant="h6" gutterBottom>
        Profession
        </Typography>

         </Grid>
     
         <Grid item xs={12} sm={4} lg={4} md={4}>
         <MyButton/>
          <div className="text-profile">  
         <Typography variant="h6" gutterBottom>
          Perla123
        </Typography>
         <Typography variant="h6" gutterBottom>
          Perla Serrano
        </Typography>
         <Typography variant="h6" gutterBottom>
          PerlaSerrano@example.com
        </Typography>
         <Typography variant="h6" gutterBottom>
        85232145
        </Typography>
         <Typography variant="h6" gutterBottom>
         Web Developer and Designer
        </Typography>
        </div>
         </Grid>
      
        </Grid>
         </div>
    </Layout>
  
  );
}
