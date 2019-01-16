import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'


const styles = theme => ({
  card: {
    width: 345,
  },
  media: {
    height: 140,
  },
  divroot: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
  },
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
});
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount(){
    this.props.dispatch({type: 'GET_FRIENDS' , payload: this.props.reduxStore.user.id})
    this.props.dispatch({type: 'GET_FAVORITE' })
    
  }


  handleGameClick = (guid) =>{
    this.props.dispatch({type: 'GRAB_GAME' , payload:guid})
    console.log(guid);
    this.props.history.push('/gamepage')
}
  render(){
    const { classes } = this.props;
    return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.reduxStore.user.username }!
    </h1>
    <h2>Friend List</h2>
    {this.props.reduxStore.friends.map((friend , i )=>{
          return <p key={i}>{friend.user2}</p>
    })}
    <h2>Favorite List</h2>
    {this.props.reduxStore.favorite.map(game =>{
     return  <div key={game.id}><Card className={classes.card} onClick={() =>this.handleGameClick(game.guid)}>
     <CardActionArea>
              <CardMedia className={classes.media} image={game.image.medium_url} title="game image"/>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >{game.name}</Typography  >
                  <Typography component="p" >{game.deck}</Typography>
                  </CardContent>
                  </CardActionArea>
             <CardActions>
              <IconButton><DeleteIcon className={classes.icon}/></IconButton>
              </CardActions>
              </Card>
              </div>
    })}
    <LogOutButton className="log-in" />
  </div>
  )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxStore) => ({
  reduxStore
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(UserPage));
