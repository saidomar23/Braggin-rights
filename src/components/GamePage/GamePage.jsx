import React, {Component} from 'react'
import {connect} from 'react-redux'

class GamePage extends Component {
    render(){
        return(
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default connect()(GamePage);