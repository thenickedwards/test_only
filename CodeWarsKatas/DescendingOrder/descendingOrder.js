function descendingOrder(n){

  let result = n.toString().split('').sort().reverse().join('')

  let maxNum = parseInt(result);

  console.log(maxNum);
  return maxNum;
}

descendingOrder(42145);
descendingOrder(145263);
descendingOrder(123456789);

/// LOOK AT THIS BEAUTY

function descendingOrder2(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}