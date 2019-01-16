import React, {Component} from 'react'
import {connect} from 'react-redux'

class RoundPage extends Component {
    render(){
        return(
            <div>
                <h1>Who's Playing</h1>
                <select >
                    <option value="--">--</option>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return <option key={i}>{friend.user2}</option>
             })}
             </select>
             <select >
                    <option value="--">--</option>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return <option key={i}>{friend.user2}</option>
             })}
             </select>
             <select >
                    <option value="--">--</option>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return <option key={i}>{friend.user2}</option>
             })}
             </select>
          
          
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
return {
    reduxStore
}
}

export default connect(mapStateToProps)(RoundPage)