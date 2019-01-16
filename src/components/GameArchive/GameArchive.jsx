import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './GameArchive.css'

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
    }
  });

class GameArchive extends Component {
    state = { expanded: false };

    handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    };
    componentDidMount(){
        this.props.dispatch({type: 'GET_GAMES'})
    }
    handleGameClick = (guid) =>{
        this.props.dispatch({type: 'GRAB_GAME' , payload:guid})
        console.log(guid);
        this.props.history.push('/gamepage')
    }
    handleClick = (guid) =>{
        this.props.dispatch({type: 'ADD_GAME', payload:{ user_id:this.props.reduxStore.user.id , game_id: guid}})
    }
    render(){
        const { classes } = this.props;

        const gameList =  this.props.reduxStore.archive.map(game =>{
            return  <div key={game.id}><Card className={classes.card} onClick={() =>this.handleGameClick(game.guid)}>
   <CardActionArea>
            <CardMedia className={classes.media} image={game.image.medium_url} title="game image"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >{game.name}</Typography  >
                <Typography component="p" >{game.deck}</Typography>
                </CardContent>
                </CardActionArea>
           <CardActions>
            <IconButton onClick={() =>this.handleClick(game.guid)}><FavoriteIcon/></IconButton>
            </CardActions>
            </Card>
            </div>

        })
        return(
            <div className={classes.divroot}>
            {gameList}
         </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return{
        reduxStore
    }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(GameArchive)));