function objectify(names) {
  return names.reduce( (acc, cur) => {
    acc[cur] = cur.split('').reverse('').join('');
    return acc;
  }, {})
}

console.log("RESULT ✅", objectify(['john', 'james', 'karen', 'brenda', 'vern', 'andrew']));