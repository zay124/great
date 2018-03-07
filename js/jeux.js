/* Génerer un nombre aléatoire entre un et 100 
et le stocker dans la variable "nombre"
  - demander au jours de saisir un nombre et le stocker 
  dans la variable "saisie
  indiquer si nombre saisie > ou < au nombre generer
  faire tant que le nombre saisie est different du 
  nombre saisie */

  var nombre = console.log(parseInt(Math.ceil(Math.random()*100)));
  //var saisie = prompt("Veuillez saisir un nombre");

  
do {
    var saisie = prompt("Veuillez saisir un nombre");
  if (saisie > nombre){
     alert("c'est moins");
  }
  else if (saisie < nombre){
      alert("c'est plus");
  }
  else if (saisie == nombre){
      alert("Bravo");
  }
  else {
      alert("Saisie un nombre STP");
  }
  
}
 while (nombre != saisie) 

