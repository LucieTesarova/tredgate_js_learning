const array = ["first", "second", "third"];
console.log(array);
console.log(array[0]);

//procykleni for
for (let i = 0; i < array.length; i++) {
  console.log("Cyklim array index prvku: " + i + " hodnota prvku: " + array[i]);
}

//procykleni for each
//prijde cely array
array.forEach((element, index) => {
  console.log("Hodnota prvku: " + element + " Index: " + index);
});

// ! Název arraye: množné číslo, název prvku ve forEach: jednotné číslo
const passwords = ["p1", "p2"];
passwords.forEach((password) => {});
