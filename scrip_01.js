const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// une array qui ne contient que le prénom et le nom des entrepreneurs

let result = []

for (let i in entrepreneurs) {
    result.push([entrepreneurs[i].first, entrepreneurs[i].last])
}

// Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui

entrepreneurs.map(x => {
    x.age = 2020 - x.year;
    delete x.year;
})

for (let i = 0; i < entrepreneurs.length; i++) {
    entrepreneurs[i].age = 2020 - entrepreneurs[i].year;
    delete entrepreneurs[i].year
}
// Remplacer first et last par firstName et lastName

//function renemer les keys des object
/*
const renameKey = (object, key, newKey) => {

    const clonedObj = clone(object);

    const targetKey = clonedObj[key];

    delete clonedObj[key];

    clonedObj[newKey] = targetKey;

    return clonedObj;

};

const clone = (obj) => Object.assign({}, obj);

renameKey(entrepreneurs, "first", "firstName")
*/

entrepreneurs.map(x => {
    x.firstName = x.first;
    delete x.first;
    x.lastName = x.last;
    delete x.last;
    x.age = 2020 - x.year;
    delete x.year;
})

// les entrepreneurs qui sont nés dans les années 70

entrepreneurs.filter(x => x.age >= 50)