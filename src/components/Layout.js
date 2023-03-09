import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import BuildIcon from '@mui/icons-material/Build';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import MenuIcon from '@material-ui/icons/Menu';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import AccountMenu from './AccountMenu';
import SearchInput from './SearchInput'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



export default function Layout({ children }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
           <MenuIcon />
          </IconButton>
          <Typography variant="h6"  >
         
         Dashboard
          </Typography>
        <IconButton 
        style={{display:"contents",justifyContent:"flex-end"}}
        color="inherit"
        aria-label="open drawer"
        edge="end"
        // onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
                <SearchInput/>
       <NotificationsActiveIcon/>
       <AccountMenu/>
        </IconButton>
   
        </Toolbar>
        
      </AppBar>
      <Drawer
       
        className={classes.drawer}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
      
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <ViewComfyIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
              <BuildIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
              <LocalGroceryStoreIcon/>
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
            <StackedBarChartIcon/>
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <VerticalSplitIcon/>
              </ListItemIcon>
              <ListItemText primary="Integrations" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WysiwygIcon/>
              </ListItemIcon>
              <ListItemText primary="Current Month" />
            </ListItem>
          </List>
 
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}
