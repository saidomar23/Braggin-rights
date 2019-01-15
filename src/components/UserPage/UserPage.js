import React, {Component} from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount(){
    this.props.dispatch({type: 'GET_FRIENDS' , payload: this.props.reduxStore.user.id})
    this.props.dispatch({type: 'GET_FAVORITE' , payload: this.props.reduxStore.user.id})
    
  }


  render(){
    console.log(this.props.reduxStore.favorite);
    
    this.props.dispatch({type: 'DISPLAY_FAVORITE' , payload:this.props.reduxStore.favorite})
    return(
  <div>
    <h1 id="welcome">
      Welcome, { this.props.reduxStore.user.username }!
    </h1>
    <p>Your ID is: {this.props.reduxStore.user.id}</p>
    <h2>Friend List</h2>
    {this.props.reduxStore.friends.map((friend , i )=>{
          return <p key={i}>{friend.user2}</p>
    })}
    <LogOutButton className="log-in" />
  </div>
  )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (reduxStore) => ({
  reduxStore
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
