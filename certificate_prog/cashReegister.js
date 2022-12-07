function checkCashRegister(price, cash, cid) {
  const monVal = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];
  function State(status, change) {
    this.status = status;
    this.change = change;
  }
  let rest = cash - price;
  let cashlist = [];
  total = 0;
  for (let e of cid) {
    total += e[1];
  }
  if (total === rest) {
    stat = "CLOSED";
    stat1 = new State(stat, cid);
    return stat1;
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      for (let k = 0; k < monVal.length - 1; k++) {
        if (monVal[k][0] === cid[i][0]) {
          if (rest < cid[i][1]) {
            let valtaken = (rest - (rest % monVal[k][1])).toPrecision(5);
            rest = (rest - valtaken).toPrecision(5);
            if (parseFloat(valtaken) !== 0) {
              cashlist.push([cid[i][0], parseFloat(valtaken)]);
            }
          } else {
            let rem = (rest - cid[i][1]).toPrecision(8);
            rest = rem;
            cashlist.push([cid[i][0], cid[i][1]]);
          }
        }
      }
    }

    let stat1 = {};
    // console.log("rest value::::::", cashlist);
    if (parseFloat(rest) === 0) {
      stat = "OPEN";
      stat1 = new State(stat, cashlist);
    } else if (rest > total) {
      stat = "INSUFFICIENT_FUNDS";
      stat1 = new State(stat, []);
    } else {
      stat = "INSUFFICIENT_FUNDS";
      stat1 = new State(stat, []);
    }

    return stat1;
  }
}

// console.log(
//   "1",
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );

// console.log(
//   "2",
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );

// console.log(
//   "3",
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
