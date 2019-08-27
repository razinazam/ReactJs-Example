import React, { Component } from "react";
import axios from "axios";

export default class Create_post extends Component {

  state = {
    Author: "",
    Title: "",
    details: ""
  };
  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  };
  onUploadFile = e => {
    this.setState({
      file: e.target.files[0]
    });
  };
  onSubmitHandle = e => {
    e.preventDefault();
    let forms = new FormData();
    forms.append("image", this.state.file);
    forms.append("Author", this.state.Author);
    forms.append("Title", this.state.Title);
    forms.append("details", this.state.details);
    axios.post("/uploads", forms).then(res => {
      console.log(res);
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <form encType="multipart/form-data" id="myform" name="myform">
            <input
              type="text"
              name="Author"
              onChange={this.handelChange}
              placeholder="Author"
            />
            <input
              type="text"
              name="Title"
              onChange={this.handelChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="details"
              onChange={this.handelChange}
              placeholder="details"
            />
            <input
              type="file"
              name="image"
              id="image"
              onChange={this.onUploadFile}
            />
            
            <button onClick={this.onSubmitHandle}>Post</button>
          </form>
        </div>
      </div>
    );
  }
}
