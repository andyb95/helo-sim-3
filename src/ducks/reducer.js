const initialState = {
  username: "",
  id: "",
  profile_pic: "",
};

const LOGIN_USER = "LOGIN_USER";
const GET_POSTS = "GET_POSTS";

export function loginUser(username, id, profile_pic, first_name, last_name, birthday) {
  return {
    type: LOGIN_USER,
    payload: { username, id, profile_pic, first_name, last_name, birthday },
  };
}

export function getPosts(first_name, last_name, profile_pic, title, date, text){
  return{
    type: GET_POSTS,
    payload: {first_name, last_name, profile_pic, title, date, text}
  }
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
    case GET_POSTS:
      return {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        profile_pic: action.payload.profile_pic,
        title: action.payload.title,
        date: action.payload.date,
        text: action.payload.text
      }
    default:
      return initialState;
  }
}
