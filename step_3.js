//this would be O(n) because the exercise is determined by the length of string
find_longest_word = function (string) {
  let str = string.split(" ");
  let longest = 0;
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      //if longest is less than 0
      longest = str[i].length; //then show the length of string (split)
      word = str[i]; //word is = to longest length
    }
  }
  return word; //return longest word
};
console.log(find_longest_word("I am testing this out"));
console.log(find_longest_word("What is the longest word in here"));
console.log(find_longest_word("apple banana orange strawberry"));

//this would be O(n2) because there is a nested loop
function uniqueChr(str) {
  console.log(str);
  let splitStr = str.toString().split(""); //split words by letter

  for (i = 0; i < splitStr.length; i++) {
    for (
      let j = 0;
      j < str[i].length;
      j++ //nested loop so each letter could be compared next to eachother
    )
      if (splitStr[i] === splitStr[j]) {
        return false;
      } else {
        return true;
      }
  }
}

console.log(uniqueChr("aab"));
console.log(uniqueChr("cab"));
console.log(uniqueChr("johnson"));
console.log(uniqueChr("tesssssting"));
