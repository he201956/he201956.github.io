"use strict"
let variable = document.getElementById("commandePizza");

let commande = [];

function passerCommande() {
    let pizze = [formCommande.nom.value, formCommande.pizzas.value, formCommande.supplement.value]
    commande.push(pizze);
    document.getElementById("tachesAffichageCommande").innerHTML = "<p>Vous avez commandé une pizza " + pizze[1] + ", supplément " + pizze[2] + " au nom de la famille " + pizze[0] + ".</p>";
    return false;
}

function nouvellesCommande() {

}


var menu = {
    P1: {nom: "marinara", prix: 6.00},
    P2: {nom: "Aglio e Olio", prix: 7.00},
    P3: {nom: "Margherita", prix: 9.00},
    P4: {nom: "Funghi", prix: 9.50},
    P5: {nom: "Prosciutto", prix: 9.50},
};


function afficherMenu() {
    var ligne;
    var index = indexMenu();
    for (var i of index) {
        ligne = "<tr>";
        ligne += "<td class=ref>" + i + "</td>";
        ligne += "<td class=nom>" + menu[i].nom + "</td>";
        ligne += "<td class=prx>" + menu[i].prix + "</td>";
        var button = "<input type='button' value='Add' name='" + i + "' onclick='addPizzas(this);'>";
        ligne += "<td class=ajou>" + button + "</td>";
        ligne += "</tr>";
        addElem("tableMenu", ligne);
    }
}

function addElem(id, v){
    // ajoute la valeur v au contenu de l'Ã©lÃ©ment id
    document.getElementById(id).innerHTML += v;
}

function indexMenu() {
    return Object.keys(menu).sort(function (x, y) {
        return menu[x].nom > menu[y].nom ? 1 : menu[x].nom < menu[y].nom ? -1 : 0;
    });
}