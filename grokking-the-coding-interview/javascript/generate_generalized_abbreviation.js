function generate_generalized_abbreviation(word) {
  const result = [];
  generate_abbreviation_recursive(word, '', 0, 0, result);
  return result;
}


function generate_abbreviation_recursive(word, abWord, start, count, result) {
  if (start === word.length) {
    if (count !== 0) {
      abWord += count
    }
    result.push(abWord)
  } else {
    generate_abbreviation_recursive(word, abWord, start + 1, count + 1, result)

    if (count !== 0) {
      abWord += count
    }

    generate_abbreviation_recursive(word, abWord + word[start], start + 1, 0, result)
  }
}


console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);