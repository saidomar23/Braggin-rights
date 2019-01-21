import React, {Component} from 'react'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import Button from '@material-ui/core/Button'
import './UserSearch.css'
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
               <form className="usersearch">
                   <input onChange={this.handleChange} type="text" placeholder="Search for Friends"/>
                   <Button color="primary" variant="contained" type="submit" onClick={this.handleClick} >Submit</Button>
               </form>
                    {usernames.map(user =>{
                        return <div key={user.id}>
                             <h3 className="searchresult" >{user.username}:</h3> 
                             <p className="searchresult">{user.bio}</p>
                             <Button size="small" color="secondary" variant="outlined" className="addButton" onClick={() => this.addFriend(user)}>Add</Button >
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