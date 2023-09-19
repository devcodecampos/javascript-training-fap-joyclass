## 🚀 Desafio Listas
- ### Você deve criar três listas em JavaScript:
    1. para guardar os nomes de dez pessoas <br />
    2. para guardar as suas idades <br />
    3. para guardar as suas cores favoritas <br />
    
  ### Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.


    ```js
      // Trecho do Código
        const peopleNames = [
          "Matheus",
          "Carlos",
          "José",
          "Roger",
          "João",
          "David",
          "Ronaldo",
          "Ted",
          "Messi",
          "Romario",
        ];

        const peopleAges = [25, 23, 78, 32, 41, 14, 53, 31, 36, 44];

        const peopleFavoriteColors = [
          "blue",
          "red",
          "yellow",
          "black",
          "white",
          "purple",
          "pink",
          "orange",
          "red",
          "yellow",
        ];

        console.log(peopleNames);
        console.log(peopleAges);
        console.log(peopleFavoriteColors);

        peopleAges[0] = 100;
        peopleFavoriteColors[0] = "pink";

        console.log(peopleNames);
        console.log(peopleAges);
        console.log(peopleFavoriteColors);
    ```

- ### Dependencias
  
  [nodemon](https://www.npmjs.com/package/nodemon) 📝🔗
   ```
  npm install --save-dev nodemon
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

    cd modulo-03-algoritmos-estruturas-de-dados/people-lists

    npm install

    npm run dev
    ```
