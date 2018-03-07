// attache l'evenement clic sur la case TOUS
var tous = document.getElementById('tous');
     tous.onclick = function () {
         //recupère via selecteur css, les input de type checkox ayant un intribut name
        var element = document.querySelectorAll('input[type="checkbox"][name]');
        for (var i=0; i<element.length; i++){
        // si la case avec id= tous est cocher alors coucher le reste
        element[i].checked = tous.checked;
    
    };
}

// ---------------attache l'evenement clic sur la date naiss--------------------

var naiss = document.getElementById('naiss');

   naiss.onchange = function () {
       var oAge = document.getElementById('age');
       if (!isNaN(age(naiss.value))){
       oAge.textContent = age(naiss.value)+' ans';
       } else {
           oAge.textContent ='';
       }
   };

   //-----------------attache l'evement clic au boton savecookie-------------

   var btnCook = document.getElementById('saveCookie');

   btnCook.onclick = function(){
        // objet contenu le formulaire
       var result = toJSON();
        // objet transformer en chaine (sérialisation)
       var chaine = JSON.stringify(result);
        // sauvgarde la chaine dans le cookie
        ecrireCookie('formContent',chaine, 10); 
        // Rediriger par index 
        location.href = 'index.html';       
   };

   // ecrire une fonction qui transfert le coutenu de form en JSON 
   function toJSON() {
       //ecrire tableau de input ayant un attribu name
       var inputs = document.querySelectorAll('input[name]');
       // objet qui va contenir les elements du formulaire
       var objet = {};
       for (var i=0; i< inputs.length; i++){
           objet[inputs[i].name] = inputs[i].value;
       }
       return objet;
   }