const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Liste des titres des livres du CDI

// Mettre dans un tableau
result = []
books.map(x => result.push(x.title))

// Afficher en sortie de console

books.map(x => console.log(x.title))

// Oui tous les livres ont été remprenté car la requette envoie un array vide 
books.filter(x => x.rented < 1)


books.sort((a, b) => a.rented - b.rented)

//Livre le plus emprunté

console.log(`le livre le plus emprunté est ${books[books.length - 1].title} emprenté ${books[books.length - 1].rented} fois`)

// Livre le moins emprunté 

console.log(`le livre le plus emprunté est ${books[0].title} emprenté ${books[0].rented} fois`)


// Suprimer le livre avec l'ID 133712

for (let i in books) {
    if (books[i].id == 133712) {
        delete books[i]
    }
}