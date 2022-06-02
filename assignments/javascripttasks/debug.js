// PROBELM SET 1 STARTS HERE......

// NUMBER 1 QUESTION

let time = 12;
let greeting;
if (time < 6) {
  greeting = "early in the morning";
} else if (time < 12) {
  greeting = "good morning";
} else if (time < 16) {
  greeting = "good afternoon";
} else if (time < 20) {
  greeting = "good evening";
} else greeting = "good night";

console.log(greeting);

// NUMBER 2 QUESTION

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

for (let i = 0; i <= 11; i++) {
  if (i === 4) {
    continue;
  }
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Number 3 QUESTION
