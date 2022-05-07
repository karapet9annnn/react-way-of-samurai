let initialState = {
  users: [
    { id: 1, name: 'Gor' },
    { id: 2, name: 'Elen' },
    { id: 3, name: 'Arkadi' },
    { id: 4, name: 'Margarita' }

  ],
  messagesData: [
    { message: 'Yoito' },
    { message: 'S vami Yango' },
    { message: 'Helloo' }
  ],
}

const ADD_MESSAGE = 'ADD-MESSAGE'; 

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      return { 
        ...state,
        messagesData: [...state.messagesData,{message:action.newMessage}]
      }
    }
    default:
      return state;
  }
}

export const addMessageActionUpdate = (newMessage) => {
  return {type: ADD_MESSAGE,newMessage}
}



