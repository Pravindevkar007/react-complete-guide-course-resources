import { Component } from "react";
import classes from "./User.module.css";
import { render } from "@testing-library/react";

class User extends Component {

  componentWillUnmount(){
    console.log('User will unmount...')
  }
  render() {
    console.log(this.props);
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
