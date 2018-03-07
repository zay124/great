var prenom = "AIT HABIB";

console.log(prenom);



document.write("Bonjour je m'appel " + prenom);

// Demander le prénom et l"affiche


// var result = prompt('Comment t\'appelles-tu ?', 'ton prènom');
// console.log(result);
  

// variable numérique
var age = 50;
console.log(age);
age--;
console.log(age);
console.log(++age);
console.log(age % 25);


var calcule = 10*4/2.5-6/10-54/27;
console.log(calcule);

var test = 57 > 27
console.log(test);

var test2 = '17' == 17;
console.log(test2);
console.log(17 + 10 + '89');

// conversion (parsing)

var calc2 = parseInt( '17') + parseFloat('10');
console.log(calc2*5);

var calc3 = Number('17')+ Number('10');

   console.log(calc3*5);



   //test elaborer
   // 0.''.nul ===> false

   var test4 = (("17" >= 17) && (''==0)) 
   
       || (!(4<6) && (8 === '8'));

   console.log(test4);    

   // operateur ternaire

   test4 ? console.log('le test est vrai')     // comme la fonction de si de excel
   : console.log("le test est faux");


   // Type JS

   var testType = "Paris est magique !";
   console.log(typeof(testType));
console.log(testType instanceof(String));

//exploitatation des propriétés et méthode


console.log("hello word".toLocaleUpperCase());
console.log("hello word".substr(6,5).toLocaleUpperCase());


var aissa = "je suis grand";

console.log(aissa.charAt(0).toUpperCase() + aissa.substring(1).toLowerCase());

//structure de contrôle 
// if (test4) {
//     if (testType) {
//         document.write('<p>TEST VRAI');
//     }
//     document.write('<p>test vrai');

// }

// else {
//     document.write("<p>test faux");
// }



// Exercice:
// 1.Afficher un prompt
//2.Si valeur saisie est un nombre, afficher  dans la console "nombre"
//3. si la valeur saisie est string, afficher  dans la console "CHAINE"  
//4. si la valeur saisie est booléen, afficher  dans la console "BOOL"  
//4. sinon afficher  dans la console "N/A"
console.clear();

console.log("Exercice 1");


//var aissa = prompt("Veuillez saisir quelque chose");
   
if (isNaN(aissa)== false) {
    console.log("Nombre");
}
else if (aissa.toLowerCase() == "true" || aissa.toLowerCase() == "false"){
    console.log("Bouleen");
}
else {
    console.log("Chaine");
}


// Exercice 3:

console.clear();

console.log("Exercice 3");

var jour = prompt('Jour de la semaine');

switch (jour.toLowerCase()) {
    case 'lundi':
        console.log("comme un lundi");
        break;
    case 'mardi':
    console.log("c'est Ravioli");
        break;
    case 'mercredi':
    case 'jeudi':
    console.log('On tient le coup');
        break;
    case 'vendredi':
    console.log('Tout est permis');
        break;
    case 'samedi':
    case 'dimanche':
      console.log("Bon WEEK-END");
       break;
    default:
      console.log(jour +" Ce n'est pas un jours de la semaine")
        break;
}
console.clear();

//fonction math

console.log(parseInt(Math.ceil(Math.random()*100)));

