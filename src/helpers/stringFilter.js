export default function stringFilter(stringToFilter, excludedWords, index = 0) {

  let wordsToRemove = excludedWords.split(' ')
  let re = new RegExp(wordsToRemove[index], 'g')
  let filteredString = stringToFilter.replace(re, '')

  if (index === stringToFilter.length - 1) {
    let filterResult = filteredString.split(' ').filter(x => x !== "")

    console.log({filterResult})
    
    return filterResult

  } else {
    return stringFilter(filteredString, excludedWords, index + 1);
  }
}