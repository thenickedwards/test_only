function solution(number) {
  let finalSum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      finalSum += i;
    }
  }
  console.log(finalSum);
  return finalSum;
}

solution(10);
