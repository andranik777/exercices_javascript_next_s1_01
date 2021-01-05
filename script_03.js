//Le chiffre d'affaires moyen par utilisateur
result = 0;
users.map(x => result += x.revenue);

ca = Number.parseFloat(result / 100 / users.length).toFixed(2)

console.log(`1) Le chiffre d'affaires moyen par utilisateur est de ${ca} euros`)

//Le pourcentage d'utilisateurs ayant rapporté de l'argent

p2 = () => {
    let a = users.filter(x => x.revenue > 0).length
    let b = users.length
    let result = parseFloat((a / b * 100).toFixed(2))
    console.log(`2) ${result} pourcents des utilisateurs ont rapporté de l'argent`)
}

// Les utilisateurs ayant rapporté de l'argent
p3 = () => {
    let result = 0
    let a = users.filter(x => x.revenue > 0)
    let b = users.filter(x => x.revenue > 0).length
    a.map(x => result += x.revenue)
    let ca = Number.parseFloat(result / 100 / b).toFixed(2)
    console.log(`3) Parmi les utilisateurs ayant rapporté de l'argent le chiffre d'affaire est de ${ca} euros`)


}

// L'agent de l'entreprise gagné au total

p4 = () => {
    result = 0;
    users.map(x => result += x.revenue);
    ca = Number.parseFloat(result / 100).toFixed(2)
    console.log(`4) L'entreprise a gagné au total ${ca} €`)
}

// Nombre d'utilisateurs en France

p5 = () => {
    let a = users.filter(x => x.country == "France").length
    console.log(`5) Nous avons en France ${a} utilisateurs`)
}

p6 = () => {
    let a = users.filter(x => x.country == "France" || x.country == "Germany" || x.country == "United States" || x.country == "United Kingdom")
    let result = 0
    a.map(x => result += x.revenue)
    let ca_total = Number.parseFloat(result / 100 / a.length).toFixed(2)
    console.log(`6) le chiffre d'affaires total réparti dans les 4 pays est de ${ca_total} €`)
}

//La liste de tous les pays dans lesquels nous avons gagné de l'argent
p7 = () => {
    let result = []
    let a = users.filter(x => x.revenue > 0)
    a.map(x => result.push(x.country))
    b = [...new Set(result)]
    console.log(b)
}

// Les 5 utilisateurs qui ont rapporté le plus d'argent

p8 = () => {
    let resultat = []
    users.sort((a, b) => a.revenue - b.revenue)
    for (let i = 1; i <= 5; i++) {
        resultat.push(users[users.length - i])

    }
    console.log("8) Les 5 personnes qui ont rapporté le plus d'argent à l'entreprise sont")
    resultat.map(x => console.log(`${x.firstName} ${x.lastName} avec ${parseFloat((x.revenue /100).toFixed(2))} €`))
}

// Comparer l'agent gagné avec les femmes et les hommes

p9 = () => {
        let hommes = users.filter(x => x.sex == "M")
        let femmes = users.filter(x => x.sex == "F")
        let result_hommes = 0
        let result_femmes = 0

        // faire le CA moyenne des hommes et des femmes
        hommes.map(x => result_hommes += x.revenue)
        let ca_hommes = parseFloat(result_hommes / 100 / hommes.length).toFixed(2)
        femmes.map(x => result_femmes += x.revenue)
        let ca_femmes = parseFloat(result_femmes / 100 / femmes.length).toFixed(2)
        console.log(`9) Le chiffre d'affaire moyenne des femmes est de : ${ca_femmes} € elle est suppirrieur à celle des hommes avec ${(ca_femmes - ca_hommes).toFixed(2)} de difference`)

    }
    // Les utilisateurs qui ont rapporté plus de 75 euros à l'entreprise
p10 = () => {
    let a = users.filter(x => x.revenue > 7500)
    console.log(a)
}

//Le pourcentage qui sont des clients payants, parmi nos 100 premiers utilisateurs

p11 = () => {
    let a = users.filter((x, i) => i <= 100)
        //le pourcentage qui sont des clients payants
    users_payants = a.filter(x => x.revenue > 0).length
    result = (users_payants / a.length) * 100
    console.log(`Le pourcentage des utilisateurs payants parmi les 100 premiers utilisateurs est de ${result.toFixed(2)} % `)
}
p11()
p2()
p3()
p4()
p5()
p6()
p7()
p8()
p9()
p10()
    /*
    La ressource pour enlever les duplicats : https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c 
     */