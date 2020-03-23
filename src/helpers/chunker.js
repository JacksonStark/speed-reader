export default function chunker(array, chunkSize) {
  let chunks = [[]];

  array.forEach(word => {
    if (chunks[chunks.length - 1].length !== chunkSize) {
      // if last element hasnt hit the chunkSize limit, add word to last element (chunk)
      chunks[chunks.length - 1].push(word);
    } else {
      // else if the last element has 3 elements already, start new chunk of words
      chunks.push([word]);
    }
  });

  return chunks;
}