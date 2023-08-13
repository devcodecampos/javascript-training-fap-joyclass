import promptSync from "prompt-sync";

enum Candidates {
  harry = 889,
  hermione = 847,
  voldemort = 515,
  white = 0,
}

const votesCandidates = [
  { candidate: "harry", numberOfVotes: 0 },
  { candidate: "hermione", numberOfVotes: 0 },
  { candidate: "voldemort", numberOfVotes: 0 },
];

const votes = [
  { candidate: "white", numberOfVotes: 0 },
  { candidate: "nullVotes", numberOfVotes: 0 },
];

let voteOfCandidates = true;

const prompt = promptSync();

while (voteOfCandidates) {
  console.log(`
  ELEIÇÃO
  Harry (889)
  Hermione (847)
  Voldemort (515)
  Votar em Branco (0)
  `);

  let vote = prompt("Digite seu voto: ");

  if (isNaN(parseInt(vote))) {
    vote = prompt("Digite um voto válido: ");
  }

  switch (+vote) {
    case Candidates.harry:
      votesCandidates[0].numberOfVotes += 1;
      break;
    case Candidates.hermione:
      votesCandidates[1].numberOfVotes += 1;
      break;
    case Candidates.voldemort:
      votesCandidates[2].numberOfVotes += 1;
      break;
    case Candidates.white:
      votes[0].numberOfVotes;
      break;
    default:
      votes[1].numberOfVotes;
      break;
  }

  let finalizeVoting = prompt(`
  Deseja finalizar a votação?
  (1) Sim
  (0) Não
  : `);

  if (+finalizeVoting === 1) {
    voteOfCandidates = false;
  }
}

const winner = votesCandidates.reduce((prev, cur) => {
  return prev.numberOfVotes > cur.numberOfVotes ? prev : cur;
});

if (winner.numberOfVotes === 0) {
  console.log("\nEleição Empatada");
} else {
  console.log("\nCandidato Eleito: ");
  console.log(winner);
}

console.log("\nQuantidade de votos da eleição:");
console.log(votesCandidates);
console.log(votes);
