let testStr = "Repeat, repeat, Repeat";
let ourRegex = /Repeat/;
res = testStr.match(ourRegex);
if (res) {
  console.log(" find repeat string");
} else " repeat does not exist";
let ourRegex2 = /repeat/gi;
// console.log("repeat search until it finish", testStr.match(ourRegex2));

let str2 = " hum , rum , fum , kum";
let myRregex = /.um/;
if (myRregex.test(str2)) {
  // console.log("exist");
}
let resTest = myRregex.test(str2);
// console.log(resTest);

console.log("Match Single Character with Multiple Possibilities");
// console.log(res1);
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);

console.log("match a range of charachter inside a string");
let quoteSampleChar = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // match all the chatacter
let resultChar = quoteSample.match(alphabetRegex);
console.log(resultChar);

console.log("Negated character");
let quoteSampleNeg = "3 blind mice.";
let myNegRegex = /[^aeiou0-9]/gi; // Change this line
let resultneg = quoteSampleNeg.match(myNegRegex);

console.log(resultneg);
console.log();
console.log("Find charachter with lazy Matching");
let text = "<hh21>Winter is coming</hh21>";
let text2 = "<h2>Winter is coming</h2>";
let myRegexlazy = /<[a-z].*?[0-9]>/; // Change this line
let resultlazy = text.match(myRegexlazy);
let resultlazy2 = text2.match(myRegexlazy);
console.log(resultlazy);
console.log(resultlazy2);

let reCriminals = /C+/gi;
let crimiString = "P1P5P4CCCcP2P6P3";
let resCrim = crimiString.match(reCriminals);
console.log(resCrim);
let fifcrim =
  "P2P1P5P4CCCCCCCCCCCCCCCCCCCCbbbesCCCCCCCCCCCCCCCCbgtCCCCCCCCCCCCCCP3";
let fifres = fifcrim.match(reCriminals);
console.log(fifres);

console.log("Match Beginning String Patterns");

let rickyAndCal = "Cal and Ricky calboth like racing.";
let calRegex = /^Cal/; // Change this line
let resultCal = calRegex.test(rickyAndCal);
console.log(resultCal);

console.log();
console.log("Match All Letter and Numbers");
let quoteSampleAll1 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultAll = quoteSampleAll1.match(alphabetRegexV2).length;
let resultAll1 = quoteSampleAll1.match(alphabetRegexV2);
console.log(resultAll);
console.log(resultAll1);

console.log();
console.log("Match everything but letters");

let quoteSampleev = "The five boxing wizards jump quickly.";
let nonAlphabetRegexev = /\W/g; // Change this line
let resultev = quoteSampleev.match(nonAlphabetRegexev).length;
console.log(resultev);

// let usernametest = "2JackOfAllTrades";
let usernametest = "Jo";
let userChecktest = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let resulttest = userChecktest.test(usernametest);
let resulttest11 = usernametest.match(userChecktest);
console.log(resulttest);
console.log(resulttest11);
let r1 = userChecktest.test(usernametest);
console.log(r1);
let r2 = userChecktest.test("BadUs3rnam3");
console.log(r2);
let r3 = userChecktest.test("Jo");
console.log(r3);

let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)|(\s*)$/; // Change this line
let resulthell = hello.replace(wsRegex, "");
console.log(resulthell);

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  let e = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);

      // Pushes n zeroes into the current row to create the columns
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

function filteredArray(arr, elem) {
  let newArr = [];
  let id = 0;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    if (arr[i].indexOf(elem) < 0) {
      id = 1;
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
);
console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
console.log("new test");
console.log();
function isEveryoneHere(userObj) {
  // Only change code below this line
  let ref = true;
  let namelist = ["Alan", "Jeff", "Sarah", "Ryan"];
  console.log("length", userObj.length);
  console.log("length namelist", namelist.length);
  for (let i = 0; i < namelist.length; i++) {
    if (userObj.hasOwnProperty(namelist[i]) === false) {
      ref = false;
    }
  }
  return ref;
  // Only change code above this line
}
console.log(isEveryoneHere(users));

console.log("Reverse String Function");

function reverseString(str) {
  let arrStr = [];
  for (let i = 0; i < str.length; i++) {
    arrStr.unshift(str[i]);
  }
  let newStr = "";
  for (let e of arrStr) {
    newStr += e;
  }
  return newStr;
}

console.log(reverseString("hello"));

console.log();
console.log();
console.log("Find the longest word in a string");

function findLongestWordLength(str) {
  let longWord = "";
  let wordlist = str.split(" ");
  for (let e of wordlist) {
    if (e.length > longWord.length) {
      longWord = e;
    }
  }
  return longWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

function confirmEnding(str, target) {
  let worlist = str.split(" ");
  let tleg = target.length;
  if (worlist[worlist.length - 1] === target) {
    return true;
  } else {
    let lastword = worlist[worlist.length - 1].split("");
    let slicedElm = lastword.slice(-tleg, lastword.length).join("");
    if (slicedElm === target) {
      return true;
    } else return false;
  }
}

console.log(confirmEnding("Bastian this is manit", "it"));

function truncateString(str, num) {
  let listStr = str.split("");
  let newList = [];
  for (let i = 0; i < num; i++) {
    newList.push(listStr[i]);
  }
  let newstr = newList.join("") + "...";
  return newstr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

console.log();
console.log("truth test function");
console.log();
function findElement(arr, func) {
  let num = undefined;
  for (let e of arr) {
    if (func(e)) {
      if (num === undefined) {
        num = e;
      }
    }
  }

  return num;
}

console.log(findElement([1, 3, 5, 7, 8], (num) => num % 2 === 0));
console.log(findElement([1, 3, 5], (num) => num % 2 === 0));

function booWho(bool) {
  console.log(typeof bool);
  if (typeof bool === "boolean") {
    return true;
  } else return false;
}

console.log(booWho(null));
console.log(booWho(true));

function titleCase(str) {
  let newArr = [];
  str = str.toLowerCase();
  newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === " ") {
      newArr[i + 1] = newArr[i + 1].toUpperCase();
    } else if (i === 0) {
      newArr[i] = newArr[i].toUpperCase();
    }
  }
  return newArr.join("");
}

console.log(titleCase("i'm a little tEa pot"));

function frankenSplice(arr1, arr2, n) {
  let l1 = [...arr1];
  let l2 = [...arr2];
  for (let i = 0; i < l1.length; i++) {
    l2.splice(i + n, 0, l1[i]);
  }

  return l2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

// function getIndexToIns(arr, num) {
//   arr.sort();
//   let arr2 = [...arr];
//   console.log(arr2);
//   let min = 0;
//   for (let e in arr2) {
//     if (arr2[e] > num) {
//       arr2.splice(e, 0, num);
//       break;
//     } else if (arr2[e] === num) {
//       break;
//     }
//   }
//   let resnum = 0;
//   for (let e in arr2) {
//     if (num === arr2[e]) {
//       resnum = e;
//     }
//   }
//   return resnum;
// }

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
//   });
//   console.log(arr);
//   let resnum = 0;

//   if (arr[arr.length - 1] <= num) {
//     resnum = arr.length;
//   } else {
//     console.log(arr);
//     for (let e = 0; e < arr.length; e++) {
//       // console.log(arr[e]);
//       console.log(e, ": ", arr[e]);
//       if ((arr[e] < num) & (arr[e + 1] >= num)) {
//         console.log("position should be:", e + 1);
//         console.log("element before:", arr[e]);
//         resnum = e + 1;
//       } else if (arr[e] === num) {
//         console.log("I'm in equal: ", arr[e], "position:", e);
//         resnum = e;
//       }
//     }
//   }
//   return resnum;
// }
// console.log(getIndexToIns([3, 10, 5], 3));
// function getIndexToIns(arr, num) {
//   // let min = 0;
//   // let max = 0;

//   for (let e = 0; e < arr.length; e++) {
//     // arr[e] = min;
//     // arr[e + 1] = max;
//     while (arr[e] > arr[e + 1]) {
//       console.log("while loop:", arr[e], ":", arr[e + 1]);
//     }
//   }
//   return arr;
// }

// console.log(getIndexToIns([90, 50, 40, 60], 50));

function mutation(arr) {
  let fEl = arr[0];
  let sEl = arr[1];
  let firstWord = {};
  let secondWord = {};
  fEl = fEl.toLowerCase().split("");
  sEl = sEl.toLowerCase().split("");

  for (let i = 0; i < fEl.length; i++) {
    firstWord[fEl[i]] = i;
  }
  for (let j = 0; j < sEl.length; j++) {
    secondWord[sEl[j]] = j;
  }

  let res = 1;
  for (let e = 0; e < sEl.length; e++) {
    if (firstWord.hasOwnProperty(sEl[e])) {
      res *= 1;
    } else {
      res *= 0;
    }
  }
  if (res === 0) {
    return false;
  } else return true;
}

console.log(mutation(["hello", "Heo"]));
console.log(mutation(["Alien", "linel"]));

console.log("Chunky Monkey");
function chunkArrayInGroups(arr, size) {
  let resArr = [];
  let arrName = [];
  let numbOfSubArr = arr.length / size;
  for (let i = 0; i < numbOfSubArr; i++) {
    arrName.push([]);
  }

  let pos = 0;
  for (let j = 0; j < arrName.length; j++) {
    resArr.push(arr.splice(pos, pos + size));
  }

  return resArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

let ltest1 = ["f", "g", "i", "j"];
let index = 2;
let newl1 = ltest1.splice(index + 1);
console.log("newArray: ", newl1);
console.log("Array after splicing: ", ltest1);

let newl2 = ltest1.splice(0, index);
console.log(newl2);
let finalRes = newl2.concat(newl1);
console.log(finalRes);

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(l, bookName) {
  // let bookListCopy=[...bookList]
  let bl = [...l];
  bl.push(bookName);
  return bl;

  // Change code above this line
}

// Change code below this line
function remove(l, bookName) {
  // console.log(bookList)
  let booklist1 = [...l];
  console.log("the list work with: ", l);
  const book_index = booklist1.indexOf(bookName);
  console.log("index element: ", book_index);
  if (book_index >= 0) {
    booklist1.splice(book_index, 1);
    console.log("here the spliced list: ", booklist1);
    return booklist1;

    // Change code above this line
  }
}

// console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"));
console.log(
  remove(
    add(bookList, "A Brief History of Time"),
    "On The Electrodynamics of Moving Bodies"
  )
);

console.log("Create my Own map function");
console.log("Very Important by using for loop  and this");
// / The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }

  // Only change code above this line

  return newArray;
};
// Only change code above this line

const new_s = s.myMap(function (item) {
  return item * 2;
});
const new_s1 = s.myMap((item) => {
  return item + 2;
});
console.log("First solution: ", new_s);
console.log("First solution: ", new_s1);
console.log();
console.log("Create my Own map function 2");
console.log("Using forEach");

Array.prototype.myMap2 = function (callback) {
  const newArray = [];
  this.forEach((a) => newArray.push(callback(a)));

  return newArray;
};

const new_s10 = s.myMap2((item) => {
  return item + 3;
});
console.log("Adding 3 to sarr", new_s10);

console.log("Extract Data from an Array");
console.log("");

const watchList2 = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

// Only change code below this line

const filteredList = watchList2
  .map((watchl) => {
    return {
      title: watchl.Title,
      rating: watchl.imdbRating,
    };
  })
  .filter((watchl) => watchl.rating >= 8.0);

// Only change code above this line

console.log(filteredList);

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));

console.log(" Use reduce method:");
console.log("");

function getRating(watchList2) {
  // Only change code below this line
  let averageRating;
  let watchfilter = watchList2
    .filter((w) => w.Director === "Christopher Nolan")
    .map((w) => {
      return {
        Director: w.Director,
        imdbRating: w.imdbRating,
      };
    });
  console.log("watchfilter: ", watchfilter);
  let getRate = watchfilter.reduce(
    (sum, wat) => sum + parseFloat(wat.imdbRating),
    0
  );
  averageRating = getRate / watchfilter.length;

  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList2));

let lx = [1, 2, 1, 3, 4, 1, 5];

let lxNew = [...lx];
while (lxNew.some((e) => e === 1)) {
  let lbefore = lxNew.slice(0, lxNew.indexOf(1));
  console.log("before", lbefore);
  let lafter = lxNew.slice(lxNew.indexOf(1) + 1);
  console.log("After: ", lafter);
  lxNew = lbefore.concat(lafter);
  console.log("new lx: ", lxNew);
}
console.log(lxNew);
console.log();
console.log("Seek and Destroy");

function destroyer(arr, ...arg) {
  for (let e of arr) {
    // console.log(e);
    for (let x of arg) {
      // console.log(x);
      if (e === x) {
        let arrBefore = arr.slice(0, arr.indexOf(e));
        let arrAfter = arr.slice(arr.indexOf(e) + 1);
        arr = arrBefore.concat(arrAfter);
      }
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log();

console.log("***Wherefore thou challenge***");
function whatIsInAName(collection, source) {
  let arr = [];

  const soureceKeys = Object.keys(source);

  return collection.filter((o) => {
    for (let i of soureceKeys) {
      if (!o.hasOwnProperty(i) || o[i] !== source[i]) {
        return false;
      } else return true;
    }
  });

  // console.log(prd);

  //   for (let n of collection) {
  //     console.log(n[e], " : ", source[e]);
  //     if (n.hasOwnProperty(e) & (n[e] === source[e])) {
  //       arr.push(collection[n]);
  //     }
  //   }
  // });
  // source.forEach((item) => console.log(item));
  // Only change code above this lineconso
  // console.log(arr);
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

function spinalCase(str) {
  let regex11 = /([a-z])([A-Z])/g;
  text1 = str.replace(regex11, "$1 $2");
  let regex12 = /\s+|_+/g;
  text1 = text1.replace(regex12, "-").toLowerCase();

  // console.log(text1);
  let l = [];

  return text1;
}
// console.log(separateString_bySpace("treGreatJob"));
// console.log(separateString_bySpace("TreGreatJob"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));

console.log("***Pig Latin ***");
function translatePigLatin(str) {
  // regex1 to match if the string str starts with a vowel
  let regex1 = /^((a)|(e)|(i)|(o)|(u))/;
  let regex3 = /[aeiou]/;
  // let regex2 = /[^aeiou]/g;

  if (str.match(regex1)) {
    str += "way";
  } else {
    // create an exist variable for vowel existing in a string
    let exist = false;
    let bef = "";
    let aft = "";
    for (let e of str) {
      if (e.match(regex3)) {
        //  if e variable is a vowel we start making the first part and the second
        //  part of the new string
        bef = str.slice(0, str.indexOf(e));
        aft = str.slice(str.indexOf(e));
        exist = true;

        break;
      }
    }
    if (exist === false) {
      str += "ay";
    } else {
      str = aft.concat(bef + "ay");
    }
  }
  return str;
}

// console.log(translatePigLatin("onsonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rhythm"));
// console.log(translatePigLatin("rhythm"));

console.log();
console.log("my replace function");
function myReplace(str, before, after) {
  let l = str.split(/\s/);

  for (let e of l) {
    if (e.toLowerCase() === before.toLowerCase()) {
      if (e.match(/^[A-Z]/)) {
        console.log("Start with capital");
        let reg44 = /^[a-z]/;
        let reg45 = /^([A-Z])/;
        let newChar = after[0].toUpperCase();
        after = after.replace(reg44, newChar);
        console.log(after);
        l[l.indexOf(e)] = after;
        str = l.join(" ");
      } else {
        console.log("don't start with Capital");
        after = after.toLowerCase();
        l[l.indexOf(e)] = after;
        str = l.join(" ");
      }
    }
  }
  return str;
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
console.log(myReplace("I think we should look up there", "up", "Down"));

console.log();
console.log("DNA Pairing");
function pairElement(str) {
  let l = str.split("");
  let newList = [];
  let dnaCha = ["A", "T", "C", "G"];
  for (let e of l) {
    if (dnaCha.some((e1) => e1 === e)) {
      if (e === "T") {
        newList.push([e, "A"]);
      } else if (e === "A") {
        newList.push([e, "T"]);
      } else if (e === "G") {
        newList.push([e, "C"]);
      } else {
        newList.push([e, "G"]);
      }
    } else {
      newList = [];
      console.log("Entred string does not belong to the DNA Char");
    }
  }

  return newList;
}

console.log(pairElement("TAGCGf"));
console.log(pairElement("ATCGA"));
console.log();
console.log("Missing Letters");
console.log();
// console.log("a".charCodeAt());
// console.log("z".charCodeAt());
function fearNotLetter(str) {
  // let alpha = "abcdefghijklmnopqrstuvwxyz";
  // let listAlpha = alpha.split("");
  // console.log(listAlpha);
  let l = str.split("");
  let listOfCode = [];
  let missingChar = "";
  for (let e of l) {
    listOfCode.push(e.charCodeAt(0));
  }
  let find = false;
  for (let x of listOfCode) {
    if (listOfCode[listOfCode.indexOf(x) + 1] - x > 1) {
      // console.log("Missing Character: ", String.fromCharCode(x + 1));
      missingChar = String.fromCharCode(x + 1);
      find = true;
    }
  }
  if (find) {
    return missingChar;
  } else return undefined;
}

console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

console.log();
console.log();
console.log("Sorted Union");
console.log();
function uniteUnique(...arr) {
  let res = [];
  for (let e of arr) {
    for (let c of e) {
      if (res.indexOf(c) < 0) {
        res.push(c);
      }
    }
  }
  res = res.sort((a, b) => a - b);

  return res;
}

console.log(uniteUnique([5, 3, 1, 2], [6, 2, 1, 4], [2, 1]));
console.log();
console.log("Convert HTML Entities");
console.log();

function convertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let newStr = "";
  let reg = /[&<>"']/g;
  if (str.match(reg)) {
    for (let e of str) {
      if (htmlEntities.hasOwnProperty(e)) {
        str = str.replace(e, htmlEntities[e]);
      }
    }
  }
  return str;
  // console.log(htmlEntities.hasOwnProperty("<"));
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("List"));

console.log();
console.log("Fibunacci number");
console.log();
console.log();

function sumFibs(num) {
  let l1 = [];
  let l = [];
  let i = 0;
  let nextE = 0;
  let sum = 0;
  for (let j = 0; j < num; j++) {
    l1.push(j);
  }
  if (l1.length > 1) {
    while (i <= num) {
      if (i <= 1) {
        l.push(1);
        i += 1;
      } else {
        nextE = l[i - 1] + l[i - 2];
        l.push(nextE);

        i += 1;
      }
    }
    let newL = l.filter((item) => item <= num).filter((i) => i % 2 === 1);
    if (newL.length > 1) {
      sum = newL.reduce((a, e) => a + e);
    }
    console.log(newL);
    return sum;
  } else {
    return num;
  }
}

console.log(sumFibs(10));
console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
console.log();
console.log();
console.log("Sum of All Primes Numbers");
function sumPrimes(num) {
  let lStart = [];
  let lprimes = [];
  let res = 0;
  // generate a list of the numbers under num
  for (let i = 1; i <= num; i++) {
    lStart.push(i);
  }
  // looking for the prime numbers under a certain number
  let divisible = (n) => {
    let divlist = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        divlist.push(i);
      }
    }
    if (divlist.length > 2) {
      return false;
    } else return true;
  };
  // loop through the first array looking if for the prime numbers inside it
  // and greater than one
  for (let e of lStart) {
    if (divisible(e) & (e > 1)) {
      lprimes.push(e);
    }
  }
  res = lprimes.reduce((a, b) => b + a);
  console.log("prime numbers", lprimes);
  return res;
}

console.log(sumPrimes(10));

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let elList = [];
  let elListTot = [];

  let l = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    elList.push(i);
  }
  elListTot = elList.reduce((m, e) => m * e);

  // console.log(mult_of_big);

  // 9674121600
  let c = 0;
  for (let i = elList[0]; i <= elListTot; i += elList[0]) {
    c += 1;
    let t = 0;
    for (let e of elList) {
      // console.log(i, ":", e);
      if (i % e === 0) {
        t += 1;
      }
    }
    // console.log(
    //   i,
    //   " the number t: ",
    //   t,
    //   ": numbre of time ====>",
    //   elList.length
    // );

    if (t === elList.length) {
      l = i;
      break;
    }
  }
  console.log(elList, "start List");
  console.log(elListTot, "reduced nu,eber");
  // console.log(c, ": element list");
  // console.log(mult_of_big);

  return l;
}

// console.log(smallestCommons([5, 1]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
console.log("flatten a nested array");
console.log();

function steamrollArray(arr) {
  let flattenArr = [];
  let count = 0;
  // for (let e of arr) {
  //   if (typeof e === "object") {
  //     console.log(e, "is an array");
  //     count += 1;
  //   } else {
  //     console.log(e, "is not array");
  //   }
  // }

  for (let e of arr) {
    if (Array.isArray(e)) {
      flattenArr.push(...steamrollArray(e));
    } else {
      flattenArr.push(e);
    }
  }
  console.log(flattenArr);
  return flattenArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(flattenArr);
console.log();
console.log("Binary Agent");
console.log();

function binaryAgent(str) {
  let lpr = [];
  let l = str.split(" ");
  let lstr = [];
  for (let e of l) {
    let lsec = reverseString(e);

    let count = 0;
    for (let i = 0; i < lsec.length; i++) {
      // console.log(lsec[i]);
      count = count + 2 ** i * lsec[i];
      // }
    }
    lpr.push(count);
  }
  for (let e of lpr) {
    lstr.push(String.fromCharCode(e));
  }

  return lstr.join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
console.log(
  binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
  )
);

console.log();
console.log("Everything is true");
console.log();

function truthCheck(collection, pre) {
  let count = 0;
  let collLength = collection.length;
  for (let e of collection) {
    if (
      e.hasOwnProperty(pre) & (e[pre] !== 0) & e[pre] ||
      e.hasOwnProperty(pre) & (typeof e[pre] === "object") ||
      e.hasOwnProperty(pre) & (typeof e[pre] === "string") & (e[pre] !== "")
    ) {
      // console.log(e[pre]);
      count += 1;
    }
  }
  if (count === collLength) {
    return true;
  } else return false;
}
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
);

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number"
  )
);
console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "caught"
  )
);
console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number"
  )
);
console.log(
  truthCheck(
    [
      { name: "Quincy", username: "QuincyLarson" },
      { name: "Naomi", username: "nhcarrigan" },
      { name: "Camperbot" },
    ],
    "username"
  )
);
console.log(
  truthCheck(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users"
  )
);
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "data"
  )
);
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "id"
  )
);
console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
);

console.log();
console.log("********Currying function*********");
console.log();
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);
console.log(curriedSum(1)(2));
console.log();
console.log();

function addTogether() {
  const [ar, arn] = arguments;
  if (typeof ar !== "number") {
    return undefined;
  }
  if (arguments.length === 1) {
    return (arn) => addTogether(ar, arn);
  }

  if (typeof arn !== "number") {
    return undefined;
  }
  return ar + arn;
}

console.log(addTogether(2, 3));
console.log(addTogether(4)(5));

const Person = function (firstAndLast) {
  function setFirstName(first) {
    this.first = first;
  }
  function getFirstName() {
    return this.first;
  }
  function setLastName(last) {
    this.last = last;
  }
  function getLastName() {
    return this.last;
  }

  function setFullName(firstAndLast) {
    let l = firstAndLast.split(" ");
    this.firstName = l[2];
    this.lastName = l[1];
  }
  // Complete the method below and implement the others similarly
  this.getFullName = function (full) {
    return getFirstName(), " ", getLastName();
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());

console.log();
console.log();
console.log("Map the Debris");

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let p = 2 * Math.PI;
  let newArr = [];
  for (ob of arr) {
    let newob = {};
    let a = Math.pow(earthRadius + ob.avgAlt, 3);
    let T = p * Math.sqrt(a / GM);
    newob.name = ob.name;
    newob.orbitalPeriod = Math.round(T);
    newArr.push(newob);
  }
  return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
