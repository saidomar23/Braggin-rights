import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import swal from 'sweetalert'
import './UserPage.css'



const styles = theme => ({
  card: {
    backgroundColor: 'secondary',
    width: 345,
    height : 400,
    margin : 5
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
  state = {
    open: false,
    bio: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.dispatch({ type: 'UPDATE_BIO', payload: this.state.bio })
  };

  handleCancelClose = () => {
    this.setState({ open: false });
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_FRIENDS', payload: this.props.reduxStore.user.id })
    this.props.dispatch({ type: 'GET_FAVORITE' })
    this.setState({
      bio: this.props.reduxStore.user.bio
    })

  }
  handleChange = (event) => {
    this.setState({
      bio: event.target.value
    })
  }

  handleDeleteClick = (game) => {
    this.props.dispatch({ type: 'DELETE_FAVORITE', payload: game.guid })
    swal(`Good Job`, `${game.name} has been deleted`, 'success' )
  }

  handleGameClick = (guid) => {
    this.props.dispatch({ type: 'GRAB_GAME', payload: guid })
    console.log(guid);
    this.props.history.push('/gamepage')
  }
  render() {
    const { classes } = this.props;
    return (
      <center>
      <div>
        <div className="userbox">
        <h1  className="username">
        {this.props.reduxStore.user.username}!
        </h1>
        <h3 className="username">
        {this.props.reduxStore.user.bio}
        </h3>
        
          <Button color="secondary" variant="outlined" onClick={this.handleClickOpen}>
            Edit Bio
        </Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Bio"
                type="textarea"
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCancelClose} >
                Cancel
            </Button>
              <Button onClick={this.handleClose} >
                Submit
            </Button>
            </DialogActions>
          </Dialog>
        </div>
          <div className="friendbox">
        <h2 className="username" > Friends List:</h2>
        {this.props.reduxStore.friends.map((friend, i) => {
          return <h3 className="username" key={i}>{friend.user2}</h3>
        })}
        <h2 className="username" >Favorite List:</h2>
        {this.props.reduxStore.favorite.map(game => {
          return <div key={game.id}><Card className={classes.card} >
            <CardActionArea>
              <CardMedia onClick={() => this.handleGameClick(game.guid)} className={classes.media} image={game.image.medium_url} title="game image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >{game.name}</Typography  >
                <Typography component="p" >{game.deck}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <IconButton onClick={() => this.handleDeleteClick(game)} ><DeleteIcon className={classes.icon} /></IconButton>
            </CardActions>
          </Card>
            
          </div>
        })}
        </div>
      </div>
      </center>
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
