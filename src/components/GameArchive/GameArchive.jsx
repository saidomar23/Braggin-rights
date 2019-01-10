import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class GameArchive extends Component {
    componentDidMount(){
        this.props.dispatch({type: 'GET_GAMES'})
    }
    handleGameClick = (guid) =>{
        this.props.dispatch({type: 'GRAB_GAME' , payload:guid})
        console.log(guid);
        this.props.history.push('/gamepage')
    }
    render(){
        const gameList = this.props.reduxStore.archive.map(game =>{
            return <div onClick={() =>this.handleGameClick(game.guid)} key={game.id}>
                <h3>{game.name}</h3>
                <p>{game.deck}</p>
                <img src={game.image.medium_url} alt="nothing to see here"/>
            </div>
        })
        return(
            <div>
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
export default connect(mapStateToProps)(withRouter(GameArchive));