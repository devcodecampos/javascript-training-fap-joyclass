export function calculator(firstNumber, secondNumber, operationNumber) {
  let result = 0
  switch (operationNumber) {
    case 1:
      result = firstNumber + secondNumber
      break
    case 2:
      result = firstNumber - secondNumber
      break
    case 3:
      result = firstNumber * secondNumber
      break
    case 4:
      result = firstNumber / secondNumber
      break
    default:
      result = 0
  }
  return result
}