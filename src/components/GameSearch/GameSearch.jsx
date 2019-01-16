import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './GameSearch.css'

const styles = theme => ({
    card: {
      width: 345,
      order: 0
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

class GameSearch extends Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            search: event.target.value
        })
    }
    handleClick = (game) =>{
        this.props.dispatch({type: 'ADD_GAME', payload:{ user_id:this.props.reduxStore.user.id , game_id: game.guid}})
    }
    handleSubmitClick = () => {
        this.props.dispatch({ type: 'FETCH_GAMES', payload: this.state.search })
    }
    handleGameClick = (guid) =>{

        this.props.dispatch({type: 'GRAB_GAME' , payload:guid})
        console.log(guid);
        this.props.history.push('/gamepage')
    }
    render() {
        const { classes } = this.props;
        let gameList = this.props.reduxStore.searchlist.map(game =>{
            return <div key={game.id} className="container"><Card className={classes.card} onClick={() =>this.handleGameClick(game.guid)}>
            <CardActionArea>
                     <CardMedia className={classes.media} image={game.image.medium_url} title="game image"/>
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="h2" >{game.name}</Typography  >
                         <Typography component="p" >{game.deck}</Typography>
                         </CardContent>
                         </CardActionArea>
                    <CardActions>
                     <IconButton onClick={() =>this.handleClick(game)}><FavoriteIcon/></IconButton>
                     </CardActions>
                     </Card>
                     </div>
              
        })
        return (
            <div>
            <div>
                <form >
                    <input onChange={this.handleChange} type="text"/>
                    <input onClick={this.handleSubmitClick} type="submit"/>
                </form>
                {/* <input onChange={this.handleChange} type="text" placeholder="search game" />
                <button onClick={this.handleClick}>Submit</button> */}
                </div>
                <div className={classes.divroot}>
                {gameList}
           </div>
           </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(GameSearch)));