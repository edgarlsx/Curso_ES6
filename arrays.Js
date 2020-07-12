const family = Array.of('Edgar', 'Raquel', 'Eliabe');

console.log(family);

const frutas = ['banana', 'maça'];
const salgados = ['cochinha', 'esfiha']

frutas.push('abacate'); // Push - Adiciona o elemento no final do Array
console.log(frutas);

frutas.pop(); // Pop - Remove o ultimo item do Array
console.log(frutas);

frutas.unshift('melancia'); // Unshift - Adiciona o elemento no inicio do Array
console.log(frutas);

frutas.shift(); // Shift - Remove o elemento no inicio do Array
console.log(frutas);

const misturados = frutas.concat(salgados);
console.log(misturados);

frutas.splice(1, 0, 'laranja') // Splice - Remove ou Adiciona um alemento ao Array => adicionando um elemento.

console.log(frutas)

misturados.forEach(misturados => console.log(misturados)); //varrer o Array
misturados.forEach((misturados, index) => console.log(index, misturados)); //varrer o Array com o index do elemento.
misturados.forEach((misturados, index, arr) => console.log(index, misturados, arr)); //varrer o Array com o index do elemento e Arrey para cada elemento.

misturados.map((misturados, index) => console.log(`${index} - ${misturados}`)) //Map - Retorna um novo array a partir do Array informado.

console.log(misturados.find(elemento => elemento == 'esfiha')) // find - busca o elemento no Array... misturados.find( frutas => fruitas.name === 'cerejas' );
