console.log("Caesars Cipher");
console.log();
let anum = "A".charCodeAt();
let anum2 = "a".charCodeAt();
let znum = "Z".charCodeAt();
let znum2 = "z".charCodeAt();
console.log(anum, ":", znum);
console.log(anum2, ":", znum2);
function rot13(str) {
  let liststr = str.split("");
  let rotlist = [];
  let num = 0;
  let rotnum = 0;
  let s = "";
  let res = "";
  for (let e of liststr) {
    num = e.charCodeAt();
    if ((num >= 65) & (num <= 90)) {
      if (num + 13 > 90) {
        rotnum = num + 13 - 90 + 64;
      } else rotnum = num + 13;
    } else if ((num >= 97) & (num <= 122)) {
      if (num + 13 > 122) {
        rotnum = num + 13 - 122 + 96;
      } else rotnum = num + 13;
    } else rotnum = num;
    s = String.fromCharCode(rotnum);
    rotlist.push(s);
  }
  res = rotlist.join("");

  return res;
}
console.log(rot13("ABZ"));
console.log(rot13("abz"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
