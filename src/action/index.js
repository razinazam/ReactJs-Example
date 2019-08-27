import * as types from "../constant/index";
import Axios from "axios";
import jwt from "jsonwebtoken";
export const LOGIN = e => {
  console.log(e);
  return dispatch => {
    Axios.post("/Login", {
      Email: e.Email,
      password: e.password
    }).then(res => {
      let token = res.data.token.split(" ")[1];
      localStorage.clear();
      localStorage.setItem("token", token);
      dispatch({
        type: types.LOGIN
      });
    });
  };
};
export const TokenCheck = e => {
  return dispatch => {
    let token = localStorage.getItem("token");
    if (token) {
      jwt.verify(token, "Hello", (err, response) => {
        dispatch({
          type: types.TOKENVERIFY,
          payload: response
        });
      });
    }
  };
};
