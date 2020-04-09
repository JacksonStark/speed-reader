export const initialState = {
  pausePress: false,
  backPress: false,
  forwardPress: false,
  displayChunk: false,
  finished: false
}

export default function reducer(state, action) {
  switch (action.type) {

    case "SET_PAUSE_PRESS":
      return { ...state, pausePress: action.value  };

    case "SET_BACK_PRESS":
      return { ...state, backPress: action.value };
    
    case "SET_FORWARD_PRESS": 
      return { ...state, forwardPress: action.value };

    case "SET_DISPLAY_CHUNK":
      return { ...state, displayChunk: action.value };

    case "SET_FINISHED":
      return { ...state, finished: action.value };

    default:
      throw new Error(
        `Tried to reduce with an unsupported action type: ${action.type}`
      );
  }
}