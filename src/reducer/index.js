import * as types from "../constant/index";
const Init = {
  auth: false
};
export const Reducer = (state = Init, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        auth: true
      };
    case types.TOKENVERIFY:
      const data = action.payload;
      return {
        ...state,
        auth:true,
        email: data.email,
        username: data.username,
        fullname: data.fullName,
        image:data.image
      };
    default:
      return state;
  }
};
