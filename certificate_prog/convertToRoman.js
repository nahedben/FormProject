console.log("Convert to Roman");
// let remaintenth = num % 10;

function convertToRoman(num) {
  function convertPrimery(num) {
    let res = "";
    if (num < 4) {
      for (let i = 1; i <= num; i++) {
        res += "I";
      }
    } else if (num === 4) {
      res = "IV";
    } else if ((num >= 5) & (num < 9)) {
      res = "V";
      for (let i = num; i > 5; i--) {
        res += "I";
      }
    } else if (num === 9) {
      res = "IX";
    }
    return res;
  }

  function twoDigits(num) {
    let res = "";
    let resprim = "";
    let prim = num % 10;
    let tenth = (num - prim) / 10;
    // console.log(tenth, ":::", prim);
    if (num < 40) {
      for (let i = tenth; i > 0; i -= 1) {
        res += "X";
      }
    } else if ((num >= 40) & (num < 50)) {
      res = "XL";
    } else if ((num >= 50) & (num < 90)) {
      if (tenth === 5) {
        res = "L";
      } else {
        res = "L";
        for (let i = tenth - 5; i > 0; i--) {
          res += "X";
        }
      }
    } else if (num >= 90) {
      res = "XC";
    }
    resprim = convertPrimery(prim);
    return res + resprim;
  }

  function threeDigits(num) {
    let res = "";
    let remain = num % 100;
    let resRemain = "";

    let hundreds = (num - remain) / 100;
    if (hundreds < 4) {
      for (let i = hundreds; i > 0; i--) {
        res += "C";
      }
    } else if (hundreds === 4) {
      res = "CD";
    } else if ((hundreds >= 5) & (hundreds < 9)) {
      res = "D";
      for (let i = hundreds - 5; i > 0; i--) {
        res += "C";
      }
    } else if (hundreds === 9) {
      res = "CM";
    }

    return res + twoDigits(remain);
  }

  let res = "";
  let remain = num % 1000;
  let thousands = (num - remain) / 1000;

  if (thousands < 4) {
    for (let i = thousands; i > 0; i--) {
      res += "M";
    }
  } else return "Number out of range";
  return res + threeDigits(remain);
}

console.log(convertToRoman(36));
// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(1));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(6));
// console.log(convertToRoman(7));
// console.log(convertToRoman(8));
// console.log(convertToRoman(9));
// console.log(convertToRoman(10));
console.log(convertToRoman(14));
// console.log(convertToRoman(15));
// console.log(convertToRoman(16));
// console.log(convertToRoman(18));
// console.log(convertToRoman(49));
// console.log(convertToRoman(45));
// console.log(convertToRoman(44));
// console.log(convertToRoman(42));
// console.log(convertToRoman(41));
// console.log();
// console.log();
// console.log(convertToRoman(40));
// console.log("starting fiftenth");
// console.log(convertToRoman(50));
// console.log(convertToRoman(55));
// console.log(convertToRoman(60));
// console.log(convertToRoman(66));
// console.log(convertToRoman(85));
// console.log(convertToRoman(70));
// console.log(convertToRoman(74));
// console.log(convertToRoman(89));
// console.log();
// console.log();
// console.log(convertToRoman(90));
// console.log(convertToRoman(92));
// console.log(convertToRoman(94));
// console.log(convertToRoman(99));
// console.log(convertToRoman(95));
console.log();
console.log(convertToRoman(325));
console.log(convertToRoman(495));
console.log(convertToRoman(500));
console.log(convertToRoman(650));
console.log(convertToRoman(860));
console.log("900");
console.log(convertToRoman(900));
console.log(convertToRoman(950));
console.log(convertToRoman(990));
console.log(convertToRoman(999));
console.log(convertToRoman(3999));
console.log(convertToRoman(1000));
console.log(convertToRoman(2500));
