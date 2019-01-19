import React, {Component} from 'react'
import {connect} from 'react-redux'
import swal from 'sweetalert'
class UserSearch extends Component {
    state = {
        user: ''
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            user: event.target.value
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'SEARCH_USERS', payload: this.state.user })
    }

    addFriend = (user) =>{
    this.props.dispatch({type: 'ADD_FRIEND' , payload: {userID: this.props.reduxStore.user.id , friendID:user.id}} )
    swal(`Good Job`, `${user.username} has been added`, 'success' )
    }
    render(){
        let usernames = this.props.reduxStore.userSearch
        return(
            <div>
               <form>
                   <input onChange={this.handleChange} type="text" />
                   <input onClick={this.handleClick} type="submit"/>
               </form>
                    {usernames.map(user =>{
                        return <div key={user.id}>
                             <h3>{user.username}</h3> 
                             <p>{user.bio}</p>
                             <button onClick={() => this.addFriend(user)}>Add</button>
                             </div>
                    })}
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) =>{
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(UserSearch);