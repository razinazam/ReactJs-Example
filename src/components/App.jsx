import React, { Component } from "react";
import { Route,BrowserRouter, Switch, Redirect, withRouter } from "react-router-dom";
import Nav from "./Header/Nav/Nav";
import Slider from "./Header/Slider/Slider";
import Post from "./Blog/Post/Post";
import Sign from "./Sign_up/Sign-up";
import Create_post from "./Create post/Create_post";
import Login from "./Login/Login";
import Post_Details from "./Blog/Post_Details/Post_Details";
import Profile from "./Profile/Profile"
import { connect } from "react-redux";
import { TokenCheck } from "../action/index";
class App extends Component {
  render() {
    this.props.tokenVerify();
    return (
      <div>
        <Route  path="/" component={Nav} />
        <Route exact path="/" component={Slider} />
        <Route exact path="/" component={Post} />
        <Route exact path="/CreatePost" component={Create_post} />
        <Route exact path="/Sign" component={Sign} />
        <Route
          exact
          path="/Login"
          render={() =>
            this.props.auth == true ? <Redirect to="/" /> : <Login />
          }
        />
        <Route exact path="/postdetails/:id" component={Post_Details} />
        <Route exact path="/profile" component={Profile}></Route>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    tokenVerify: e => {
      dispatch(TokenCheck());
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
