## 🚀 Desafio Calculadora
- ### Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
    (1) Soma <br />
    (2) Subtração <br />
    (3) Multiplicação <br />
    (4) Divisão <br />
    (0) Sair
    
    Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

    Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

    É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 


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
              if (secondNumber === 0) {
                result = 0;
                break;
              }
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
    (0) Sair      
    Escolha a opção: 
    ```
