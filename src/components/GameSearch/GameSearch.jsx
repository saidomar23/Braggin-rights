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
        console.log(this.props.reduxStore.imagesList);
    }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text" placeholder="search game" />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}


export default connect()(GameSearch);