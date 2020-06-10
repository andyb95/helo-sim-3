
const initialState = {
  username: '',
  id: '',
  profilepic: ''
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(username, id, profilepic){
  return {
    type: LOGIN_USER,
    payload: {username, id, profilepic}
  }
}

export default function (state = initialState, action) {
  switch (action.type){
    case LOGIN_USER:
      return {...state, username: action.payload.username, id: action.payload.id, profilepic: action.payload.profilepic}
    default:
      return initialState
  }
}

