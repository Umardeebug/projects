// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // // before
// // for (let i = 0; i < items.length; i++) {
// //   copyItems.push(items[i]);
// // }

// // after
// items.forEach((items) => {
//   copyItems.push(items);
// });

// console.log(copyItems);

// AN ARRAY OF OBJECTS

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// A FUNCTION THAT CHECKS FOR THE LIKES OF PEOPLE

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }

  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));

// let elem = document.getElementById("animate");
// console.log(elem);
// function myMove() {
//   let id = null;
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// myMove();

// THE REST OF THE SPACE BELOW IS FOR PRACTICING THE SLIDES
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }
// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());
