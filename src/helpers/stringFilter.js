
// DEF: filters data string of excluded words
// IN: stringToFilter (array), excludedWords (array), default index (0)
// OUT: filtered string free of excluded words

export default function stringFilter(stringToFilter, excludedWords, index = 0) {

  let filteredString = stringToFilter.filter(word => word !== excludedWords[index])

  if (index === excludedWords.length - 1) {
    return filteredString;
  } else {
    return stringFilter(filteredString, excludedWords, index + 1);
  }
}