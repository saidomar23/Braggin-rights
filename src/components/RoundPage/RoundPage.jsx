import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button'

class RoundPage extends Component {
    state = {
        player : '',
        stat: true
    }

    handleNext = () =>{
        this.props.dispatch({type: 'GET_RESULTS' , payload: this.props.reduxStore.instance.id})
        
        
        setTimeout(() => {
            this.props.history.push('/resultspage')
            }, 5000)
    }

    handleChange = (event) =>{
        this.setState({
            player : event.target.value
        })
    }

    handleStatChange = (event) =>{
        this.setState({
            stat: event.target.value
        })
    }
    handleClick = () =>{
        this.props.dispatch({type: 'ADD_ROUND' , payload: {player: this.state.player, stat: this.state.stat , round: this.props.reduxStore.instance.id  } })
    }
    render(){
        return(
            <div>
                <div>
                <h1>Who's Playing</h1>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return  <select key={i} onChange={this.handleChange}>
                 <option value="--">--</option> 
                 <option value={this.props.reduxStore.user.id}>{this.props.reduxStore.user.username}</option>
                 <option value={friend.user2_id} key={i}>{friend.user2}</option> 
                 </select>
             })}
             <select onChange={this.handleStatChange}> 
             <option value="--">--</option> 
                 <option value={true}>Winner</option>
                 <option value={false}>Loser</option>
             </select>
             <button onClick={this.handleClick}>Submit</button>
             </div>
             <div>
                <h1>Who's Playing</h1>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return  <select onChange={this.handleChange}>
                 <option value="--">--</option> 
                 <option value={friend.id}>{this.props.reduxStore.user.username}</option>
                 <option value={friend.user2_id} key={i}>{friend.user2}</option> 
                 </select>
             })}
             <select onChange={this.handleStatChange}> 
             <option value="--">--</option> 
                 <option value={true}>Winner</option>
                 <option value={false}>Loser</option>
             </select>
             <button onClick={this.handleClick}>Submit</button>
             </div>
             <div>
                <h1>Who's Playing</h1>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return  <select onChange={this.handleChange}>
                 
                 <option value="--">--</option> 
                 <option value={friend.id}>{this.props.reduxStore.user.username}</option>
                 <option value={friend.user2_id} key={i}>{friend.user2}</option> 
                 </select>
             })}
             <select onChange={this.handleStatChange}> 
             <option value="--">--</option> 
                 <option value={true}>Winner</option>
                 <option value={false}>Loser</option>
             </select>
             <button onClick={this.handleClick}>Submit</button>
             </div>
             <div>
                <h1>Who's Playing</h1>
             {this.props.reduxStore.friends.map((friend, i)=>{
                 return  <select onChange={this.handleChange}>
                 <option value="--">--</option> 
                 <option value={friend.id}>{this.props.reduxStore.user.username}</option>
                 <option value={friend.user2_id} key={i}>{friend.user2}</option> 
                 </select>
             })}
             <select onChange={this.handleStatChange}> 
             <option value="--">--</option> 
                 <option value={true}>Winner</option>
                 <option value={false}>Loser</option>
             </select>
             <button onClick={this.handleClick}>Submit</button>
             </div>
             <Button onClick={this.handleNext}>Next</Button>

             </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
return {
    reduxStore
}
}

export default connect(mapStateToProps)(withRouter(RoundPage))