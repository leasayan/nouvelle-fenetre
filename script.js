function ouvrirFichierAleatoire() {

    // Ici tu es obligée de lister tous les noms de fichiers html présents dans le dossier
    var fichiersHTML = [
        "jour0.html", "jour1.html", "jour2.html", "jour3.html", "jour4.html", "jour5.html", "jour6.html",
        "lafin.html", "lecommencement.html", "letri.html",
        "mamue.html", "note2.html", "notesdevoyage.html", "poemetraversee.html",
        "saladedughetto.html", "annonce.html", "candidature.html", "coeuracorps.html", 
        "foutraque.html", "laura.html", "notemagique.html", "p162.html", "questcequonvafaire.html",
    ];
    var indexAleatoire = Math.floor(Math.random() * fichiersHTML.length);
    var fichierSelectionne = fichiersHTML[indexAleatoire];
    window.open(fichierSelectionne, "_self");
}

function ouvrirPopin(element) {
    var texte = element.querySelector("span").innerHTML;
    
    var popin = document.createElement("div");
    popin.className = "popin";

    var contenu = document.createElement("div");
    contenu.className = "popin-contenu";
    contenu.innerHTML = texte;

    var fermer = document.createElement("span");
    fermer.className = "popin-fermer";
    fermer.textContent = "Fermer";
    fermer.addEventListener("click", function () {
        popin.parentNode.removeChild(popin);
    });

    popin.appendChild(contenu);
    popin.appendChild(fermer);
    document.body.appendChild(popin);
}
