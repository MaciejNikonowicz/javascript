import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res.data);
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    let users = this.state.users.map(user => {
      return (
        <div className='col'>
          <div className='card center-align'>
            <div className='card-content'>
              <h2 className='card-title'>{user.name}</h2>
              <p className='card-text'>{user.username}</p>
              <p style={{ marginBottom: '5px' }}>
                <small>{user.email}</small>
              </p>
              <div className='card-action'>
                <button className='btn btn-dark block'>Details</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className='container'>{users}</div>;
  }
}

export default Users;
