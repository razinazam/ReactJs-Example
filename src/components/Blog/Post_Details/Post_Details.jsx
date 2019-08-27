import React, { Component } from "react";
import Axios from "axios";
export default class Post_Details extends Component {
  state = {
    post: []
  };
  componentDidMount() {
    Axios.get("/uploads")
      .then(res => {
        let post = res.data.filter(d => d._id == this.props.match.params.id)[0];
        this.setState({ post: post});
      })
      .catch(e => {
        console.log("error", e);
      });
  }
  
  
  render() {
    console.log(this.state.post.Title);
  // let res = this.post.map((res,i)=>{
  //   return(
  //     <div>

  //     </div>
  //   )
  // })
    
    return (
      <div>
      <div className="container">

<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2>{this.state.post.Title}</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div className="fakeimg" style={{"height":"200px"}}>
        <img src={"/"+this.state.post.path} alt="sandjkvnds"/>
      </div>
      <p>Some text..</p>
      <p>{this.state.post.Details}</p>
    </div>
    
   
  </div>
  
  <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg" style={{"height":"100px"}}>Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg">Image</div><br/>
      <div className="fakeimg">Image</div><br/>
      <div className="fakeimg">Image</div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

</div>
      </div>
    );
  }
}
