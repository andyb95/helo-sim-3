const initialState = {
  username: "",
  id: "",
  profile_pic: "",
};

const LOGIN_USER = "LOGIN_USER";

export function loginUser(username, id, profile_pic, first_name, last_name, birthday) {
  return {
    type: LOGIN_USER,
    payload: { username, id, profile_pic, first_name, last_name, birthday },
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        username: action.payload.username,
        id: action.payload.id,
        profile_pic: action.payload.profile_pic,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        birthday: action.payload.birthday,
      };
    default:
      return initialState;
  }
}
