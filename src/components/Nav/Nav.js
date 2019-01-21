import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';


const drawerWidth = 240;


const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    margin: 110
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: 'primary'
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'primary'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  grow: {
    flexGrow: 1,
  },
  arrowButton: {
    width: 200,
    marginTop: 30
  },
  button: {
    width: 200
  }
});

class Nav extends Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;;
    return (
      <div className={classes.root}>
        <AppBar color="primary" position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton 
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}>
              <MenuIcon color="secondary" onClick={this.handleClick} />
            </IconButton>
            <Button component={Link} to="/home" className={classes.menuButton} >
                <h2 className="nav-title">Bragging Rights</h2>
            </Button>
       
              {this.props.reduxStore.user.id && (
                <>
                
                
                  <LogOutButton className={classes.menuButton} />
                  
                </>
              )}
              {/* Always show this link since the about page is not protected */}
         
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Button variant="outlined" color="secondary" className={classes.arrowButton} onClick={this.handleDrawerClose}>
                <ChevronRightIcon />
            </Button>
          </div>
          <Divider />
          <List color="primary">  
          <center>
            <ListItem>
            <h2 className="nav-title">Welcome, {this.props.reduxStore.user.username}</h2>
            </ListItem>
          <ListItem >
            <Button className={classes.button} variant="text"  color="secondary" component={Link} to="/home" onClick={this.handleDrawerClose} >
                {/* Show this link if they are logged in or not,
                but call this link 'Home' if they are logged in,
                and call this link 'Login / Register' if they are not */}
                {this.props.reduxStore.user.id ? 'Home' : 'Home'}
              </Button>
            </ListItem>
            <ListItem onClick={this.handleDrawerClose}>
            <Button  className={classes.button} variant="text" color="secondary" component={Link} to="/gamearchive" onClick={this.handleDrawerClose}>
                Game Archive
          </Button>
            </ListItem>
            <ListItem >
            <Button className={classes.button} variant="text" color="secondary" component={Link} to="/gamesearch" onClick={this.handleDrawerClose} >
                Game Search
          </Button>
            </ListItem>
            <ListItem >
            <Button className={classes.button} variant="text" color="secondary" component={Link} to="/usersearch" onClick={this.handleDrawerClose} >
                Braggart Search
          </Button>
            </ListItem>
            </center>
          </List>
          <Divider />
        </Drawer>
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
};

export default connect(mapStateToProps)(withStyles(styles)(Nav));
