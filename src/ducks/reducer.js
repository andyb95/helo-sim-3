import axios from 'axios'

const initialState = {
  username: '',
  id: '',
  profilePicUrl: ''
}

const LOGIN_USER = 'LOGIN_USER'

export function loginUser(username, id, profilePicUrl){
  return {
    type: LOGIN_USER,
    payload: {username, id, profilePicUrl}
  }
}

export default function (state = initialState, action) {
  switch (action.type){
    case LOGIN_USER:
      return {...state, username: action.payload.username, id: action.payload.id, profilePicUrl: action.payload.profilePicUrl}
    default:
      return initialState
  }
}

