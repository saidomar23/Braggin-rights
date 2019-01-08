import React, {Component} from 'react'
import {connect} from 'react-redux'

class GameArchive extends Component {
    componentDidMount(){
        this.props.dispatch({type: 'GET_GAMES'})
    }
    render(){
        return(
            <div>
                {JSON.stringify(this.props.reduxStore.archive)}
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return{
        reduxStore
    }
}
export default connect(mapStateToProps)(GameArchive);