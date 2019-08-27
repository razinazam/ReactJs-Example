import React, { Component } from "react";
import Axios from "axios";
import {Link} from "react-router-dom"
export default class Post extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    Axios.get("/uploads")
      .then(res => {
        this.setState({ data: res.data});
      })
      .catch(e => {
        console.log("eror", e)
      });
  }
  render() {
    console.log(this.state);
    var res = this.state.data.map((res,i)=>{
      console.log("map",res);
      return(
      <div className="col-lg-4 col-md-6" key={i}>
      <div className="single-blog">
        <div className="blog-img">
        <h3>{res.Title}</h3>
        <i class="fas fa-user-tie">Posted by:<span>{res.Author}</span></i>
        <p>{res.Details}</p>
        <p className="likes"><i class="fas fa-thumbs-up"><span className="sp">Like</span></i></p>
          <img
          src={res.path}
            alt="dsvbhsdbvh"
          />
          <div className="mask">
          </div> 
          <div className="post-category">
            <Link to={`/postdetails/${res._id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
      )
    })
    return (
      <div>
       
        <div className="container">
        <h1 className="text-center">Latest Posts</h1>
          <div className="row posts">
            {res}
          </div>
        </div>
      </div>
    );
  }
}
