import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/home">
          <h2 className="nav-title">Bragging Rights</h2>
        </Link>
        <div className="nav-right">
          {this.props.reduxStore.user.id && (
            <>
              <Link className="nav-link" to="/home">
                {/* Show this link if they are logged in or not,
                but call this link 'Home' if they are logged in,
                and call this link 'Login / Register' if they are not */}
                {this.props.reduxStore.user.id ? 'Home'  : 'Home'}
              </Link>
              <Link className="nav-link" to="/gamearchive">
                Game Archive
          </Link>
              <Link className="nav-link" to="/gamesearch">
                Game Search
          </Link>
              <Link className="nav-link" to="/usersearch">
                User Search
          </Link>
          <LogOutButton className="nav-link" />
            </>
          )}
          {/* Always show this link since the about page is not protected */}
        </div>
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (reduxStore) => {
  return {
    reduxStore
  }
};

export default connect(mapStateToProps)(Nav);
