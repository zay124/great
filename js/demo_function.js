// // a l'aide de document.write, ecrire une fonction qui
// // "creertableauHTML" qui génère un tableau HTML
// // grâce à deux argements: nb lignes et nb colonne.



// function creertableauHTML(nb_row,nb_col){
//   var l = 100/nb_col;  //pour la largeur de chaque colonne
//   document.write('<table style ="width:100%">');
//   for (var j=0; j <nb_row; j++){
//   document.write('<tr>');
  
//   for (i=0; i < nb_col; i++){
//   document.write('<td style="width:' + l + '%;border: 1px solid black">');
//   document.write(i*j);
//   document.write('</td>');
//   }
//   document.write('</tr>');
// }
//   document.write('</table>');  
// }


/*------------------------------- TTC ---------------------------------------------*/
/*  ecrire une fonction 'ttc' qui converti un montant 'ht' en ttc en appliquant un 'taux 
tester 'ht' est taux : definis et number avec taux 0.05,0.1 et 0.2*/

  /*function ttc(ht,taux){
    //
     if (typeof arguments[0] != 'number'){
       // si HT est numérique
       throw new Error('Le montant HT doit être  numérique');
     } 
     // test si Taux est numérique et vaut 0.05,0.1, ou 0.2)
     else if (arguments[1] !== 0.05 && arguments[1] !== 0.1 && arguments[1] !== 0.2 ){
       throw new Error('Le taux doit être égal à: 5%,10% ou 20%');
     }
     // effectuer le calcul
     else {
      var resultat = ht*(1+taux);

    return resultat;
  }
}
  console.log(ttc(100,0.1));
  console.log(ttc(100,0.2));
  console.log(ttc('ccc',25));
  console.log(ttc(100,0.7));*/

/*----------------------------------Function Date -----------------------------------*/

/* Ecrire une fonction dateDuJour qui renvoi la date de jours sous la forme: 
  // jeudi 22 février 2018 */

 function dateDuJour() {
   var auj = new Date();
     var mois = ["Janvier","Février","Mars","Avril",
     "Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
   var jours = ["Dimanche","Lundi","Mardi","Mercredi",
     "jeudi","Vendredi","Samedi"];
    
     return jours[auj.getDay()]+ " " + auj.getDate() + " " 
               + mois[auj.getMonth()]+ " "+ auj.getFullYear();
              
    }



//-----------creation d'une fonction qui renvoie l'âge grâce à un paramètre DATE-----

function age(naiss){
  // Date de naissance 
    var dateNaiss = new Date(naiss);
    // Date de jour
  var dateJour = new Date();
  // calcul de l'âge en millisecondes ramenées en années   
var result = (dateJour.getTime()- dateNaiss.getTime());
// Ramène l'age en année
  result = result/1000/60/60/24/365.25;
  return  Math.floor(result);
};

// ------------------Fonction pour ecrire des cookies----------------------------------
// la durée sera mis en jour
 function ecrireCookie (nom, val, duree){
   // calcule de la durée de vie de cookies (en jours)
   var exp = new Date();
       exp.setTime(exp.getTime()+(duree*24*60*60*1000));
   // ecrire le cookie
  document.cookie =nom+'='+val+'; expires='+ exp.toUTCString();    
 }

// ----------------------------fonction pour lire des coockies-------------------------
    // cookie recupèrer par document.cookie -----> "aissa=monpote; Tintin=Milou"
    /* 1) methode split avec ;
            document.cookie.split(';') pour avoir:
            aissa= monpote
            Tintin=Milou
            Kader=absent
       2) boucle sur tableau pour chercher Tintin avec INDEXOF
            'aissa=monpote'.indexof('Tintin')
       3) Si coockie trouvé alors récupère la valeur 
            'Tintin = milou'.split('=')  */     
  
/*function lireCookie(nom){
       var valeur = document.cookie.split(';');
        for (var i=0; i< valeur[i].length; i++){
             if (valeur.indexOf('Tintin') > -1){
               return valeur.indexOf('Tintin');
             }
             else  {
               return null;
             }

        return  valeur
        } 
       } ;    */

function lireCookie(nom){
  // récup des cookies dans un tableau
  var cookies = document.cookie.split(';');
  // chaine à chercher dans les membres du tableau
  var cherche = nom + '=';
  var membre; 
   for (var i=0;i <cookies.length;i++){
          membre = cookies[i];
   // si cookie trouvé alors
   if (membre.indexOf(cherche)>=0){
        var valeur = membre.split('=');
        return valeur[1];
   }
   }
   //si cookie pas trouvé
   return ''; 
  };
   
   



