import promptSync from "prompt-sync";
const prompt = promptSync();

function celsiusToFahrenheit(celsius: number): number {
  const fahrenheit: number = celsius * 1.8 + 32;
  return fahrenheit;
}

const celsiusToKelvin = (celsius: number): number => {
  const kelvin: number = celsius + 273;
  return kelvin;
};

function app(): void {
  console.log("\n* Temperature Conversion *\n");

  const celsius: string = prompt("Temperature in celsius: ");
  const fahrenheit: number = celsiusToFahrenheit(parseFloat(celsius));
  const kelvin: number = celsiusToKelvin(parseFloat(celsius));

  console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}F \nKelvin: ${kelvin}K`);
}

app();