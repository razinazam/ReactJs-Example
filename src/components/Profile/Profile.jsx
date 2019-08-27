import React, { Component } from "react";
// import {withRouter} from "react-router-dom";
import Axios from "axios";
// import Axios from "axios";
import { connect } from "react-redux";
class Profile extends Component {
  state = {};
  onclick = () => {
    localStorage.clear();
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);

    return (
      <div>
        <div className="container bootstrap snippets">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="panel rounded shadow">
                <div className="panel-body">
                  <div className="inner-all">
                    <ul className="list-unstyled">
                      <li className="text-center">
                        <img
                          data-no-retina=""
                          className="img-circle img-responsive img-bordered-primary"
                          src={this.props.image}
                          alt="John Doe"
                          style={{height:"200px",width:"200px"}}
                        />
                      </li>
                      <li className="text-center">
                        <h4 className="text-capitalize">
                          {this.props.fullname}
                        </h4>
                        <p className="text-muted text-capitalize">
                          {this.props.username}
                        </p>
                      </li>
                      <li>
                        <a
                          href=""
                          className="btn btn-success text-center btn-block"
                        >
                          PRO Account
                        </a>
                      </li>
                      <li>
                        <br />
                      </li>
                      <li>
                        <div className="btn-group-vertical btn-block">
                          <a href="" className="btn btn-default">
                            <i className="fa fa-cog pull-right" />
                            Edit Account
                          </a>
                          <a href="" className="btn btn-default">
                            <i className="fa fa-sign-out pull-right" />
                            <h1 onClick={this.onclick}>Logout</h1>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(Profile);
