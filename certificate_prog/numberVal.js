function telephoneCheck(str) {
  let rg =
    /^\d\d\d\-\d\d\d\-\d\d\d\d|\(\d\d\d\)\d\d\d\-\d\d\d\d|\(\d\d\d\)\s\d\d\d\-\d\d\d\d|\d\d\d\s\d\d\d\s\d\d\d\d|^[1-9]\d\d\d\d\d\d\d\d[0-9]$/;
  let res = rg.test(str);
  let lstr = str.split("");
  let reg1 = /\-|\s|\(|\)/;
  // let res = false;
  let sift = [];
  for (let e of lstr) {
    if (!reg1.test(e)) {
      sift.push(e);
    }
  }
  let trStr = sift.join("");
  // let rg =/^\d\d\d\-\d\d\d\-\d\d\d\d|\(\d\d\d\)\d\d\d\-\d\d\d\d|\(\d\d\d\)\s\d\d\d\-\d\d\d\d|\d\d\d\s\d\d\d\s\d\d\d\d|^[1-9]\d\d\d\d\d\d\d\d[0-9]$/;
  if (trStr.length < 10) {
    res = false;
  } else if (trStr.length === 10) {
    // let rg =
    //   /^\d\d\d\-\d\d\d\-\d\d\d\d|\(\d\d\d\)\d\d\d\-\d\d\d\d|\(\d\d\d\)\s\d\d\d\-\d\d\d\d|\d\d\d\s\d\d\d\s\d\d\d\d|^[1-9]\d\d\d\d\d\d\d\d[0-9]$/;
    res = rg.test(str);
  } else if (trStr.length === 11) {
    let rg2 = /^\-/;
    if (rg2.test(str)) {
      res = false;
    } else if (sift[0] === "1") {
      // res = "testing splice()";
      // sift.splice(0, 1);
      // console.log(sift);
      // let strsift = sift.join("");
      // res = rg.test(strsift);

      lstr.splice(0, 1);
      // console.log(lstr);
      let strsift = lstr.join("");

      res = rg.test(strsift);
    } else res = false;
  } else res = false;

  return res;
}

console.log(telephoneCheck("1 555)555-5555"));
