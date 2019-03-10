const persons = [
	{
		name: 'julie',
		age: 29,
	},
	{
		name: 'nico',
		age: 24,
	},
	{
		name: 'charles',
		age: 25,
	},
	{
		name: 'hippoflyte',
		age: 26,
	},
	{
		name: 'boubou',
		age: 20,
	},
]

for(let i=0; i < persons.length; i++) {
	console.log(persons[i]);
}

function getPersonName(person) {
	return person.name;
}

function getPersonAge(person) {
    return person.age;
}

for(const person of persons) {
    const personName = getPersonName(person);
    const personAge = getPersonAge(person);
    console.log(personName);
    console.log(personAge);
    
    console.log(person);
}

for (const person of persons) {
	const age = getPersonAge(person);
	if (age > 25) {
		console.log(person);
	}
}

