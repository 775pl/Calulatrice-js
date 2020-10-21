function jeVerifie(entree) { // va visiter les entrées dans le input 
    var caracteresValides ="0123456789-+*/."; 
    for (var i = 0; i < entree.length; i++)
        if (caracteresValides.indexOf(entree.charAt(i))<0 ) //La méthode charAt () renvoie le caractère à l'index spécifié dans une chaîne
        alert('Oups! Vous ne pouvez pas effectuer cette opération');
    return true;
}

function leResultat() {
    var stock = 0; //on initialise une variable stock
    if (jeVerifie(window.document.calculatrice.rentrer.value)) // après verifiation, stock
    stock = eval(window.document.calculatrice.rentrer.value);
    window.document.calculatrice.rentrer.value = stock;
}

function ajouter(caracteres) {
    window.document.calculatrice.rentrer.value = //valeur du champ actuel
    window.document.calculatrice.rentrer.value + caracteres; // ajoute la valeur du champ actuel et ajoute la nouvelle 
                                                             // qui est envoyé à la fonction comme paramètre dans la fonction
}
