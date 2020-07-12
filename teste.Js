const colaboradores = [
  { nome: "Cris", horasTrabalhadas: 220 },
  { nome: "Rebeca", horasTrabalhadas: 210 }
];

function adicionaSalario(colaborador) {
  const salario = colaborador.horasTrabalhadas * 50;
  colaborador.salario = salario;

  return {
    salario: salario
  };
}

const colaboradoresComSalario = colaboradores.map(adicionaSalario);

console.log(colaboradoresComSalario);

const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);
const alunos = [
    { nome: "Cris", nota: 10 },
    { nome: "Alexandre", nota: 7 },
    { nome: "Pablo", nota: 4 }
  ];
  
  function alunoAprovado(aluno) {
    return aluno.nota >= 7;
  }
  
  console.log(alunos.filter(alunoAprovado));
  console.log(alunos.some(alunoAprovado));
  console.log(alunos.every(alunoAprovado));

const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));

fruta "melancia" e removendo as frutas "abacaxi" e "caju":

class Pessoa {
    #nome = '';
  
    constructor(nome) {
      this.#nome = nome;
    }
  
    get nome() {
      return `Seu nome é: ${this.#nome}.`;
    }
  
    set nome(novoNome) {
      this.#nome = novoNome;
    }
  }
  
  const pessoa = new Pessoa();
  
  console.log(pessoa);
  console.log(pessoa.nome);
  pessoa.nome = 'Foo';
  console.log(pessoa.nome);