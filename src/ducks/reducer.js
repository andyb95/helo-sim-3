const initialState = {
  username: "",
  user_id: "",
  profile_pic: "",
};

const LOGIN_USER = "LOGIN_USER";
const GET_POSTS = "GET_POSTS";
const NEW_POST = "NEW_POST";

export function loginUser(
  username,
  user_id,
  profile_pic,
  first_name,
  last_name,
  birthday
) {
  return {
    type: LOGIN_USER,
    payload: { username, user_id, profile_pic, first_name, last_name, birthday },
  };
}

export function getPosts(
  first_name,
  last_name,
  profile_pic,
  title,
  date,
  text,
  post_img
) {
  return {
    type: GET_POSTS,
    payload: {
      first_name,
      last_name,
      profile_pic,
      title,
      date,
      text,
      post_img,
    },
  };
}

export function newPost(user_id, title, text, date, post_img) {
  return {
    type: NEW_POST,
    payload: { user_id, title, text, date, post_img }
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        username: action.payload.username,
        user_id: action.payload.user_id,
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
        text: action.payload.text,
        post_img: action.payload.post_img,
      };
    case NEW_POST:
      return {
        user_id: action.payload.user_id,
        title: action.payload.title,
        text: action.payload.text,
        date: action.payload.date,
        post_img: action.payload.post_img,
      };
    default:
      return initialState;
  }
}
