import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
class GamePage extends Component {

    handleClick = () => {
        this.props.history.push('/roundpage')
    }

    challengeButton = (genres) => {
        // if (genre === "Fighting") {
        //     challenge = <button onClick={this.handleClick}>Challenge</button>
        // }
        // else {
        //     return
        // }

        let challenge = null;

        genres.map(genre => {
            console.log(genre)
            switch (genre) {
                case 'Fighting':
                case 'Sports':
                case 'Driving/Racing':
                case 'Wrestling':
                case 'Trivia/Board Game':
                case 'Boxing':
                case 'Basketball':
                case 'Tennis':
                case 'Billiards':
                case 'Vehicular Combat':
                case 'Baseball':
                case 'Hockey':
                case 'Soccer':
                case 'Gambling':
                case 'MOBA':
                case 'First-Person Shooter':
                    challenge = <button onClick={this.handleClick}>Challenge</button>
                    // break;
            }
        })
        return challenge;

    }



    render() {
        let game = this.props.reduxStore.gamePage
        let genres = this.props.reduxStore.genre

        let challenge = this.challengeButton(genres)
        console.log(challenge)
        return (
            <div key={game.id}>
                <h1>{game.name}</h1>
                <h3>{genres}</h3>
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
export default connect(mapStateToProps)(withRouter(GamePage));