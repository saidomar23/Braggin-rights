import React, {Component} from 'react'
import {connect} from 'react-redux'


class ResultsPage extends Component{
    componentDidMount(){
        this.props.dispatch({type: 'GET_RESULTS' , payload: this.props.reduxStore.instance})
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) =>{
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(ResultsPage)