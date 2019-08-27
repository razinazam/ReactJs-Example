import React, { Component } from "react";
import Axios from "axios";

export default class Signup extends Component {
  state = {};
  handelchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let Form = new FormData()
    Form.append("images",this.state.imageupload)
    Form.append("Phone",this.state.Phone)
    Form.append("Fullname",this.state.Fullname)
    Form.append("Email",this.state.Email)
    Form.append("password",this.state.password)
    Axios.post("/SignUp", Form).then(res => {
      console.log(res);
    });
  };

FlleChange=(e)=>{
this.setState({
  [e.target.name]:e.target.files[0]
})
}
  render() {
    console.log(this.state);

    return (
      <div>
        <div className="Sign">      
        <div class="container">

        <p class="h2 text-center">Form</p>
        <form onSubmit={this.onSubmit}>
            <div class="preview text-center">
                <img class="preview-img" src="http://simpleicon.com/wp-content/uploads/account.png" alt="Preview Image" width="200" height="200"/>
                <div class="browse-button">
                    <i class="fa fa-pencil-alt"></i>
                    <input class="browse-input" type="file" name="imageupload" onChange={this.FlleChange} required id="UploadedFile"/>
                </div>
                <span class="Error"></span>
            </div>
            <div class="form-group">
                <label>Full Name:</label>
                <input class="form-control" type="text" name="Fullname" onChange={this.handelchange}  required placeholder="Enter Your Full Name"/>
                <span class="Error"></span>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input class="form-control" type="text" name="Email" onChange={this.handelchange}  required placeholder="Enter Your Email"/>
                <span class="Error"></span>
            </div>
           
            <div class="form-group">
                <label>Password:</label>
                <input class="form-control" type="phone" name="password" onChange={this.handelchange} required placeholder="Enter Password"/>
                <span class="Error"></span>
            </div>
            <div class="form-group">
                <label>Phone:</label>
                <input class="form-control" type="number" name="Phone" onChange={this.handelchange} required placeholder="Enter Your Email"/>
                <span class="Error"></span>
            </div> 
            <div class="form-group">
                <input class="btn btn-primary btn-block" type="submit" value="Submit"/>
            </div>
        </form>
    </div>
    </div>
      </div>

    );
  }
}
