import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
    margin: 110
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: -12,
  },
};
class Nav extends Component {


  
  render() {
    

    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar color="primary" position="fixed">
      <Toolbar>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
        <Button className={classes.menuButton} >
        <Link to="/home">
          <h2 className="nav-title">Bragging Rights</h2>
        </Link>
        </Button>
        <div className={classes.menuButton}>
          {this.props.reduxStore.user.id && (
            <>
              <Button className={classes.menuButton}>     
              <Link  to="/home">
                {/* Show this link if they are logged in or not,
                but call this link 'Home' if they are logged in,
                and call this link 'Login / Register' if they are not */}
                {this.props.reduxStore.user.id ? 'Home'  : 'Home'}
              </Link>
              </Button>   
              <Button className={classes.menuButton} >   
              <Link to="/gamearchive">
                Game Archive
          </Link>
          </Button>
          <Button className={classes.menuButton} >
              <Link  to="/gamesearch">
                Game Search
          </Link>
          </Button>
          <Button className={classes.menuButton} >
              <Link  to="/usersearch">
                User Search
          </Link>
          </Button>
          <LogOutButton className={classes.menuButton} />
            </>
          )}
          {/* Always show this link since the about page is not protected */}
        </div>
        </Toolbar>
        </AppBar>
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
