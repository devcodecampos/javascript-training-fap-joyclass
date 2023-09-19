const calculator = (
  firstValue: number,
  secondValue: number,
  operator: string
): number => {
  let result = 0;
  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      if (secondValue === 0) {
        result = 0;
        break;
      }
      result = firstValue / secondValue;
      break;
    default:
      result = 0;
  }
  return result;
};

export default calculator;