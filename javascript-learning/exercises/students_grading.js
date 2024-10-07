const points = 100;
const fullName = "Viktor Bohaty";
let grade;

if (points > 100 || points < 0) {
  console.log("Nespravna hodnota");
} else {
  if (points >= 90) {
    grade = "A";
  } else if (points >= 85) {
    grade = "B";
  } else if (points >= 75) {
    grade = "C";
  } else if (points >= 70) {
    grade = "D";
  } else if (points >= 60) {
    grade = "E";
  } else {
    grade = "F";
  }

  console.log(`${fullName} ma znamku ${grade}`);
}
