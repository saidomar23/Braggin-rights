import React, { Component } from 'react'
import {connect} from 'react-redux'


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
    render() {
        let gameList = this.props.reduxStore.gamelist.map(game =>{
            return <div key ={game.id}>
                <p>{game.name}</p>
                <p>{game.deck}</p>
                <img src={game.image.medium_url} alt="nothing to see here" />
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

export default connect(mapStateToProps)(GameSearch);