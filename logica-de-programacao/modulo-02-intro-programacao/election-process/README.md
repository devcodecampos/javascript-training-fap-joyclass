## 🚀 Desafio Eleição de Candidatos
- ### Desenvolva um código que simule uma eleição com três candidatos.
    - candidato_X => 889
    - candidato_Y => 847
    - candidato_Z => 515
    - branco => 0

  ###    O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente. Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 


- ### Dependencias
  [prompt-sync](https://www.npmjs.com/package/prompt-sync) 📝🔗
   ```
  npm install prompt-sync
   ```
  
  [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) 📝🔗
   ```
  npm install --save-dev ts-node-dev
   ```
  
  [typescript](https://www.typescriptlang.org/download) 📝🔗
   ```
  npm install --save-dev typescript
   ```

- ### Execução do Projeto
    ```
    git clone https://github.com/devcodecampos/javascript-training-fap-joyclass.git

    cd modulo-02-intro-programacao/election-process

    npm install

    npm run dev
    ```
- ### Preview
  ```
    ELEIÇÃO
      Harry (889)
      Hermione (847)
      Voldemort (515)
      Votar em Branco (0)
      
      Digite seu voto: 889

      Deseja finalizar a votação?
      (1) Sim
      (0) Não
      : 0

      ELEIÇÃO
      Harry (889)
      Hermione (847)
      Voldemort (515)
      Votar em Branco (0)
      
      Digite seu voto: 0

      Deseja finalizar a votação?
      (1) Sim
      (0) Não
      : 0

      ELEIÇÃO
      Harry (889)
      Hermione (847)
      Voldemort (515)
      Votar em Branco (0)
      
      Digite seu voto: 6575

      Deseja finalizar a votação?
      (1) Sim
      (0) Não
      : 1

    Candidato Eleito: 
    { candidate: 'harry', numberOfVotes: 1 }

    Quantidade de votos da eleição:
    [
      { candidate: 'harry', numberOfVotes: 1 },
      { candidate: 'hermione', numberOfVotes: 0 },
      { candidate: 'voldemort', numberOfVotes: 0 }
    ]
    [
      { candidate: 'white', numberOfVotes: 1 },
      { candidate: 'nullVotes', numberOfVotes: 1 }
    ]
  ```