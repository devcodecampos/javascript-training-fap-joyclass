 ## 🚀 Desafio Calculadora
  - #### Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
    1. Soma
    2. Subtração
    3. Multiplicação
    4. Divisão
    
    Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

    ```js
      // Trecho do Código
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
    ```

- ### Dependencias
  [prompt-sync](https://www.npmjs.com/package/prompt-sync) 📝🔗
   ```
  npm install prompt-sync
   ```
  
  [nodemon](https://www.npmjs.com/package/nodemon) 📝🔗
   ```
  npm install --save-dev nodemon
   ```

  [ESLint](https://eslint.org/docs/latest/use/getting-started) 📝🔗
   ```
  npm init @eslint/config
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

    cd modulo-02-intro-programacao/calculator

    npm install

    npm run dev
    ```

- ### Preview
   ```
    CALCULADORA      
    (1) Soma
    (2) Subtração    
    (3) Multiplicação
    (4) Divisão      
    Escolha a operação: 
    ```