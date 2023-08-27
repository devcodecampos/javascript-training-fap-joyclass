## 🚀 Desafio Listas
- ### Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20. Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação. Codifique a solução mais eficiente para buscar o número 20 no array.

  ```js
  // Trecho do Código
  const arr = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const sortedArr = arr.sort((x, y) => x - y);
  const numberToSearch = 20;

  const binarySearch = (arr, numberToSearch) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === numberToSearch) {
        return mid;
      } else if (arr[mid] < numberToSearch) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  };

  const index = binarySearch(sortedArr, numberToSearch);

  const numberFound = `O número ${numberToSearch} foi encontrado na posição ${index}.`;
  const numberNotFound = `O número ${numberToSearch} não foi encontrado no array.`;

  index !== -1 ? console.log(numberFound) : console.log(numberNotFound);
  ```

- ### Dependencias
  
  [nodemon](https://www.npmjs.com/package/nodemon) 📝🔗
   ```
  npm install -D nodemon
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

    cd modulo-03-algoritmos-estruturas-de-dados/search-algorithm

    npm install

    npm run dev
    ```
