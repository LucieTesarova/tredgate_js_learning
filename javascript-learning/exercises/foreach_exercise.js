const usernames = ["John", "Emma", "George", "Tim", "Anna"];

usernames.forEach((username, index) => {
  console.log("Index: " + index + " = " + username);
});

//Challenge:
const firstNames = ["Petr", "Adam"];
const secondNames = ["Novák", "Husár"];

firstNames.forEach((firstName, firstIndex) => {
  console.log(`${firstName}, ${secondNames[firstIndex]}`);
});
