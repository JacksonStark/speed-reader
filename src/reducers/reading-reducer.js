export const initialState = {
  rawData: `To get started, just copy and paste text that you would like to read in this text box. \n
StarkReader will help you read faster by flashing words at you using what is called a Rapid Serial Visual Presentation.`,
  readerData: [],
  readingSpeed: 300,
  excludedWords: '',
  chunkSize: 3,
  readingStatus: false
}

export default function reducer(state, action) {
  switch (action.type) {

    case "SET_RAW_DATA":
      return { ...state, rawData: action.value  };

    case "SET_READER_DATA":
      return { ...state, readerData: action.value };
    
    case "SET_READING_SPEED": 
      return { ...state, readingSpeed: action.value };

    case "SET_EXCLUDED_WORDS":
      return { ...state, excludedWords: action.value };

    case "SET_CHUNK_SIZE":
      return { ...state, chunkSize: action.value };

    case "SET_READING_STATUS":
      return { ...state, readingStatus: action.value };

    default:
      throw new Error(
        `Tried to reduce with an unsupported action type: ${action.type}`
      );
  }
}