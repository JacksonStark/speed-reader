export const initialState = {
  rawData: `According to the US Centers for Disease Control and Prevention, the virus spreads from person to person when people are within about 6 feet of each other "through respiratory droplets produced when an infected person coughs or sneezes."
  Fineberg told CNN this is true, but that research shows that aerosolized droplets produced by talking or possibly even by just breathing can also spread the virus.
  His letter explains that research at a hospital in China shows the virus can be suspended in the air when doctors and nurses remove protective gear, or when floors are cleaned, or when staff move around.
  Research by the University of Nebraska shows that genetic material from the virus was found in patients' rooms more than 6 feet away from the patients, according to the letter.
  Fineberg said it's possible that aerosolized coronavirus droplets can hang in the air and potentially infect someone who walks by later.
  He added, however, that coronavirus is not as infectious as measles or tuberculosis.
  How long coronavirus lingers in the air depends on several factors, including how much virus an infected individual puts out when breathing or talking, and also on the amount of circulation in the air, he said."`,
  readerData: [],
  readingSpeed: 300,
  excludedWords: 'Control and Prevention, the virus spreads from person to person when people are',
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