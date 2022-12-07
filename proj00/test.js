// var str = "N$%#A'a hed::";
// function palindrome(str) {
//   str = str.replace(/[^a-zA-Z0-9 ]/g, "");
//   str = str.replace(/[" "]/g, "");
//   str = str.toLowerCase();

//   var lst = str.split("");
//   str = lst.join("");
//   console.log("rearranged str", lst);
//   lst2 = lst.reverse();
//   var str2 = lst2.join("");
//   console.log(str2);
//   if (str === str2) {
//     return true;
//   } else return false;
// }
// // console.log("lst: ", lst2);
// console.log(palindrome("five|_/|four"));
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop === "artist" && value != "") {
    records[id].artist = value;
  } else if (prop === "artist" && value === "") {
    delete records[id].artist;
  } else if (prop === "tracks" && value) {
    if (records[id].tracks) {
      records[id].tracks.push(value);
    } else {
      console.log(value);
      records[id].tracks = [];
      records[id].tracks.push(value);
      records[id].tracks.push("my first");
    }
  }
  // else if(records[id].hasOwnProperty(prop) && value===''){
  //   delete records[id].artist
  // }else if(records[id].tracks=== prop)

  return records;
}

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// console.log("wem are here");
// console.log(updateRecords(recordCollection, 5439, "artist", ""));

// console.log("new line");
// console.log(updateRecords(recordCollection, 5439, "tracks", "hit  ABBA"));
// updateRecords(recordCollection, 5439, "artist", "ABBA");
// updateRecords(recordCollection, 5439, "artist", "ABBA");
// let myArray = [];
// for (let i = 1; i < 10; i += 2) {
//   console.log(i);
//   myArray.push(i);
// }

// console.log(myArray);

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      for (j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    } else {
      product *= arr[i];
    }
  }
}

// Only change code above this line
//   return product;
// }

// console.log(
//   multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ])
// );
// console.log(multiplyAll([[1], [2], [3]]));
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else return sum(arr, n - 1) + arr[n - 1];
  // Only change code above this line
}
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 6, 3, 4], 2));
// console.log(sum([2, 3, 4, 5], 3));
// console.log(sum([2, 3, 4], 1));

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

function lookUpProfile(name, prop) {
  // Only change code below this line
  let res = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      res = true;
      res1 = "";
      if (contacts[i].hasOwnProperty(prop)) {
        // console.log(prop);
        res1 = contacts[i][prop];
        // return co
        // ntact[i].;
      } else res1 = "No such property";
    }
  }
  if (res) {
    return res1;
  } else return "No such contact";
  // if (res) {
  //   return name + " exist";
  // } else {
  //   return name + " does not belong";
  // }
  // Only change code above this line
}

// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));

// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));

function countdown(n) {
  if (n < 1) {
    return [];
  }
  let resArr = countdown(n - 1);
  resArr.unshift(n);
  return resArr;
}

// console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  let resArr = [];
  if (startNum === endNum) {
    resArr.unshift(startNum);
    return resArr;
  }

  resArr = rangeOfNumbers(startNum, endNum - 1);
  resArr.push(endNum);
  return resArr;
}

// console.log(rangeOfNumbers(1, 5));
const sum1 = (...args) => {
  let s = 0;
  for (let e of args) {
    s += e;
  }
  return s;
};
// console.log(sum1(1, 2, 3));

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
const { min, max } = stats;
console.log(min);
const half = (stats) => {
  const { min, max } = stats;
  return (max + min) / 2.0;
};
// console.log();

// console.log(half(stats));

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  for (let e of arr) {
    let n = `<li class="text-warning">${e}</li>`;
    failureItems.push(n);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
// console.log(failuresList);

// Only change code below this line
class Thermostat {
  constructor(temp) {
    this.far = temp;
  }
  get temperature() {
    return (5.0 / 9.0) * (this.far - 32);
  }
  set temperature(temp) {
    this.far = (temp * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius

console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
