import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom';


class GameSearch extends Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'FETCH_GAMES', payload: this.state.search })
        console.log(this.props.reduxStore.gameList);
    }
    handleGameClick = (guid) =>{
        this.props.dispatch({type: 'GRAB_GAME' , payload:guid})
        console.log(guid);
        
        // this.props.history.push('/gamepage')
    }
    render() {
        let gameList = this.props.reduxStore.searchlist.map(game =>{
            return <div onClick={() =>this.handleGameClick(game.guid)} key ={game.id}>
                <p>{game.name}</p>
                <p>{game.deck}</p>
                <img src={game.image.medium_url} alt="nothing to see here" />
                <button>hello</button>
                </div>
              
        })
        return (
            <div>
                <input onChange={this.handleChange} type="text" placeholder="search game" />
                <button onClick={this.handleClick}>Submit</button>
                {gameList}
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(withRouter(GameSearch));