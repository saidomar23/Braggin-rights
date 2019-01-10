import React, { Component } from 'react'
import { connect } from 'react-redux'
let challenge;
class GamePage extends Component {


    handleClick = () =>{
        
    }

    challengeButton = (genre) => {
        if (genre === "Fighting") {
            challenge = <button onClick={this.handleClick}>Challenge</button>
        }
        else {
            return
        }
    }



    render() {
        let game = this.props.reduxStore.gamePage
        let genre = this.props.reduxStore.genre
        this.challengeButton(genre)
        return (
            <div key={game.id}>
                <h1>{game.name}</h1>
                <h3>{genre}</h3>
                <p>{game.deck}</p>
                {game.image && <img src={game.image.medium_url} alt="" />}

                {challenge}
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}
export default connect(mapStateToProps)(GamePage);