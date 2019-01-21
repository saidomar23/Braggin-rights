import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
    noLabel: {
      marginTop: theme.spacing.unit * 3,
    },
    submitButton: {
    marginTop:20
    },
    nextButton:{
        marginTop: 50
    }
  });

class RoundPage extends Component {
    state = {
        player1 : '',
        stat1: '',
        player2: '',
        stat2: ''
    }

    handleNext = () =>{
        this.props.dispatch({type: 'GET_RESULTS' , payload: this.props.reduxStore.instance.id})
        
        
        setTimeout(() => {
            this.props.history.push('/resultspage')
            }, 3000)
    }

    handlePlayer1Change = (event) =>{
        this.setState({
            player1 : event.target.value
        })
    }

    handlePlayer2Change = (event) =>{
        this.setState({
            player2 : event.target.value
        })
    }
     
    handleStat1Change = (event) =>{
        this.setState({
            stat1: event.target.value
        })
    }
    handleStat2Change = (event) =>{
        this.setState({
            stat2: event.target.value
        })
    }
    handlePlayer2Click = () =>{
        this.props.dispatch({type: 'ADD_PLAYER2' , payload: {player: this.state.player2, stat: this.state.stat2 , round: this.props.reduxStore.instance.id  } })
    }
    handlePlayer1Click = () =>{
        this.props.dispatch({type: 'ADD_PLAYER1' , payload: {player: this.state.player1, stat: this.state.stat1 , round: this.props.reduxStore.instance.id  } })
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div>
                <h1>Player 1:</h1>
                <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple">Name</InputLabel>
                <Select value={this.state.player1} onChange={this.handlePlayer1Change}>
                <MenuItem value="--">--</MenuItem>
                <MenuItem value={this.props.reduxStore.user.id}>{this.props.reduxStore.user.username}</MenuItem>
             {this.props.reduxStore.friends.map(friend =>{
                 return( <MenuItem value={friend.user2_id} key={friend.user2_id}>{friend.user2}</MenuItem>) 
                 })}
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">Win/Loss</InputLabel> 
             <Select value={this.state.stat1} onChange={this.handleStat1Change}>
             <MenuItem value="--">--</MenuItem> 
                 <MenuItem value={true}>Winner</MenuItem>
                 <MenuItem value={false}>Loser</MenuItem>
             </Select>
             </FormControl>
             <Button className={classes.submitButton} variant="outlined" color="secondary" onClick={this.handlePlayer1Click}>Submit</Button>
             </div>
             <div>
                <h1>Player 2:</h1>
                <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple">Name</InputLabel>
                <Select value={this.state.player2} onChange={this.handlePlayer2Change}>
                <MenuItem value="--">--</MenuItem>
                <MenuItem value={this.props.reduxStore.user.id}>{this.props.reduxStore.user.username}</MenuItem>
             {this.props.reduxStore.friends.map(friend =>{
                 return( <MenuItem value={friend.user2_id} key={friend.user2_id}>{friend.user2}</MenuItem>) 
                 })}
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">Win/Loss</InputLabel> 
             <Select value={this.state.stat2} onChange={this.handleStat2Change}>
             <MenuItem value="--">--</MenuItem> 
                 <MenuItem value={true}>Winner</MenuItem>
                 <MenuItem value={false}>Loser</MenuItem>
             </Select>
             </FormControl>
             <Button className={classes.submitButton} variant="outlined" color="secondary" onClick={this.handlePlayer2Click}>Submit</Button>
             </div>
             <Button className={classes.nextButton} color="primary" variant="contained" onClick={this.handleNext}>Next</Button>

             </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
return {
    reduxStore
}
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(RoundPage)))