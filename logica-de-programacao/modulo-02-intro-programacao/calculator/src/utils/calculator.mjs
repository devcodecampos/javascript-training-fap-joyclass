export function calculator(firstNumber, secondNumber, operationNumber) {
  let result = 0;
  switch (operationNumber) {
    case 1:
      result = firstNumber + secondNumber;
      break;
    case 2:
      result = firstNumber - secondNumber;
      break;
    case 3:
      result = firstNumber * secondNumber;
      break;
    case 4:
      if (secondNumber === 0) {
        result = 0;
        break;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      result = 0;
  }
  return result;
}
