const checkLoto = () => {

    // nombre gagnante
    let success = ["123456", "111111", "555555"]
    let rand = Math.floor(Math.random() * Math.floor(3))

    // nom && prenom
    let prenom = document.querySelector("#prenom")
    if (prenom.value == "") {
        prenom.setCustomValidity("Entrez votre Prénom")
    }
    let nom = document.querySelector("#nom")
    if (nom.value == "") {
        nom.setCustomValidity("Entrez votre Nom")
    }
    //email
    let email = document.querySelector("#email")
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.length === 0 || emailRegExp.test(email.value) == false) {
        email.setCustomValidity("Email Invalide")
    };
    //Numéro du Loto
    loto = document.querySelector("#loto")
    loto_regex = /^[1-9]{6}$/g; // ^ : recherche du debut [1-9] entre 1 à 9 possible aussi avec \d qui match avec que les nombre {6} contient 6 chiffre $ verife quie à la fin de la recherche la condition qu'il à a bien 6 chiffres

    if (loto.value.length === 0 || loto_regex.test(loto.value) == false) {
        loto.setCustomValidity("Numéro du loto invalide")
    } else {
        // Victoire
        (loto.value == success[rand] ? alert("Félicitations, vous avez gagné 1 million !!!!!") : alert(`Vous avez perdu, les nombres gagnants sont ${success[rand].split('').join("x")
    }`))
    }

    btn = document.querySelector(".btn.btn-success.btn-block")
        // Recharge la page si il y a un double click
    btn.addEventListener('dblclick', function(e) {
        document.location.reload()
    });

}




// https://waytolearnx.com/2019/10/afficher-un-message-derreur-a-cote-dun-input-en-javascript.html
// https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire
// https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp