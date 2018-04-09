/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global i */

getMyXml();

function getMyXml() {
    var netflotXMLDocument = new XMLHttpRequest();
    netflotXMLDocument.onreadystatechange = function () {
        //si la requete est terminé et la reponse est ok
        if (this.readyState === 4 && this.status === 200) {
            //on appel la fonction readDAta, avec en parametre la reponse de nore projet netflotXMLDocument.
            readData(netflotXMLDocument.responseXML);

        }
    };
    //on prépare la requete, avec la méthode "GET" + l'url vers le fichier et le paramètre true or false pour l'asyncrome
    netflotXMLDocument.open("GET", "netflotXMLDocument.xml", true);
    //on envoie larequête;
    netflotXMLDocument.send();
//console.log(getMyXml);
}
;

function readData(netflotXMLDocument) {


//console.log(myXml);
    //var cln=""  ; 

    var films = netflotXMLDocument.getElementsByTagName("film");

//console.log(films);
    for (var i = 0, c = films.length; i < c; i++) {
        console.log(films[i]);
        //var itm = document.getElementById("mabalise");

        var cln = "";

//document.getElementById("réalisateur").innerHTML = myXml.getElementsByTagName("réalisateur")[i].childNodes[0].nodeValue;
//document.getElementById("mabalise").innerHTML = netflotXMLDocument.getElementsByTagName("realisateur")[i].childNodes[0].nodeValue;
//getAttribute(enfants[0, 1 ])

        cln = document.getElementById("mabalise").innerHTML = netflotXMLDocument.getElementsByTagName("nom")[i].childNodes[0].nodeValue;
//getAttribute(enfants[0, 1 ])

//document.getElementById("mabalise").innerHTML = netflotXMLDocument.getElementsByTagName("genre")[i].childNodes[0].nodeValue;
//getAttribute(enfants[0, 1 ])
//console.log(genre);
//document.getElementById("mabalise").innerHTML= netflotXMLDocument.getElementsByTagName("dateSortie")[i].childNodes[0].nodeValue;
//getAttribute(enfants[0, 1 ])
//console.log(sortie);
//document.getElementById("mabalise").innerHTML = netflotXMLDocument.getElementsByTagName("resumer")[i].childNodes[0].nodeValue;
//getAttribute(enfants[0, 1 ])
//console.log(resumer);

        //je récupere tous les noms de film
        var titre = films[i].getElementsByTagName("nom");
        for (var debut = 0, fin = titre.length; debut < fin; debut++) {
            console.log(titre[debut]);

        }

        //je récupere tous les genres
        var genre = films[i].getElementsByTagName("genre");
        for (var debut = 0, fin = genre.length; debut < fin; debut++) {
            console.log(genre[debut]);


        }
        //je récupere les dates de sortie
        var sortie = films[i].getElementsByTagName("dateSortie");
        for (var debut = 0, fin = titre.length; debut < fin; debut++) {
            console.log(sortie[debut]);
        }
        //je récupere tous les résumer
        var resum = films[i].getElementsByTagName("resumer");
        for (var debut = 0, fin = resum.length; debut < fin; debut++) {
            console.log(resum[debut]);
        }

    }

}




















