import React from "react";
import {connect} from 'react-redux';
import auth from "./auth.js";
import hasAdmins from "./Login";
import "./Update.css";
class Update extends React.Component {
  handleChange = event => {
  };
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
console.log(hasAdmins);
    const values =this.props;
    const val=values.pros[5];
    return (
<div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>USER DETAILS</h1>
            <div className="firstname">
              <label htmlFor="username">UserName</label>
              <input
                name="name"
                defaultValue={val.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="text"
                defaultValue={val.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email"> Email</label>
              <input
                name="email"
                type="email"
                defaultValue={val.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="update">
              <button type="submit" onSubmit={this.handleSubmit}>Update</button>
            </div>
            <div className="logout">
              <button  onClick={() => {
          auth.logout(() => {
          this.props.history.push("/Login");
          });
        }} >Logout</button>
            
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    pros:state.users
  }
  
}

export default connect(mapStateToProps) (Update);
