import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserSearch extends Component {
    render(){
        return(
            <div>
                <input type="text"/>
            </div>
        )
    }
}

export default connect()(UserSearch);