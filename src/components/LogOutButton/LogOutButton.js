import React , {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
const styles = theme => ({
button:{
diplay: "inline",
float: 'right',
marginLeft: 900
}
})


class LogOutButton extends Component{
  
  render(){
    const { classes } = this.props;
    return(
  <Button color='secondary' variant='outlined'   // This Button shows up in multiple locations and is styled differently
    // because it's styled differently depending on where it is used, the className
    // is passed to it from it's parents through React props
    className={classes.button}
    onClick={() => this.props.dispatch({ type: 'LOGOUT' }) }
    
  >
    Log Out
  </Button>
    )
  }
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withRouter(withStyles(styles)(LogOutButton)));
