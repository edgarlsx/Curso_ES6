const gender = {
    Mam: Symbol('M'),
    Woman: Symbol('W')
}
const persons = [
    {
        name: 'Edgar',
        age: 26,
        gender: gender.Mam
    },
    {
        name: 'Guilherme',
        age: 30,
        gender: gender.Mam
    },
    {
        name: 'Raquel',
        age: 19,
        gender: gender.Woman
    }
];

persons.forEach((persons, index, arr) => {
    console.log(`Nome: ${persons.name} index:${index}`, arr);
})

const mens = persons.filter(persons => persons.gender == gender.Mam);
const woman = persons.filter(persons => persons.gender == gender.Woman);

console.log('Lista de Homens: ', mens)
console.log('Lista de Mulheres', woman)


const totalAges = persons
                    .filter(persons => persons.age % 2 === 0)
                    .reduce((age, persons) => {
                        age += persons.age;
                        return age;
                    }, 0);
console.log('Soma das idades pares: ', totalAges);

paresAge = persons.filter(persons => persons.age % 2 === 0);
console.log('total com idade pares: ', paresAge);


reduceAge= persons.reduce((age, persons) => {
    age += persons.age;
    return age;
});
console.log('total das idades: ', reduceAge);

persons.forEach(p => {
    if (p.age % 2 == 0) {
        console.log(`Nome ${p.name} é par.`);
    }else{
        console.log(`Nome ${p.name} é impar.`);
    }
});

