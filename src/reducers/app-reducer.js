export const initialState = {
  rawData: "last night i went to the bar and found something fancy",
  readerData: '',
  readingSpeed: 300,
  excludedWords: 'the',
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