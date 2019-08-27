import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { log } from "util";
class Nav extends Component {
  Navi(props)   {
    if (this.props.auth == false) {
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/sign" href="#">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link " href="#">
              Login
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      console.log(this.props);
      return (
        <React.Fragment>
          <li className="nav-item">
            <Link to="/profile" className="nav-link" href="#">
              {this.props.fullname}
            </Link>
          </li>
        </React.Fragment>
      );
    }
    
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light main-nav">
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#toggle"
            aria-controls="toggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container" id="toggle">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CreatePost" className="nav-link" href="#">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src="/images/64207573_412230516171404_786529943507959808_n.png"
                    style={{ height: "60px", width: "80" }}
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav Pa">
              {this.Navi()}
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
// const mapDispatchToProps = dispatch =>{
//   return({
//     dispatch()
//   })
// }
export default connect(mapStateToProps)(Nav);
