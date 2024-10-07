const actualAge = 18;
const drinkingAgeLimit = 18;
const fullName = "Jirka Novak";

if (actualAge >= drinkingAgeLimit) {
  console.log(`${fullName} už může pít alkohol.`); // stejné jako: fullname + " už může pít alkohol."
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } rok/let.`
  );
} else {
  console.log("Neplatny vek");
}
