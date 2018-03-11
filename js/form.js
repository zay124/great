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
       var inputs = document.querySelectorAll('[name]');
       // objet qui va contenir les elements du formulaire
       var objet = {};
       for (var i=0; i< inputs.length; i++){
           //selon le type d'input 
           console.log(inputs[i].type);
           switch (inputs[i].type) {
              // si radio ou checkbox   
            case 'radio':
            case 'checkbox':
                if (inputs[i].checked){
                    
               objet[inputs[i].name] = inputs[i].value;
              
                  }
             break;
               // si select-multiple
               case 'select-multiple':
                var opts=[];
               var jours = document.querySelectorAll('#'+inputs[i].id+'>option');
               for (var j=0;j<jours.length;j++){
                      if (jours[j].selected){
                          opts.push(jours[j].value);
                      }
               }
               objet[inputs[i].name]= opts;
               break;
               //sinon
               default:
               objet[inputs[i].name] = inputs[i].value;
           }
           
       }
       return objet;
   }

  /* var stock = document.getElementById("saveWs");
   stock.onclick = function(){
    var result = toJSON();
    var valeur = JSON.stringify(result)
    var webstorage = sessionStorage.setItem('formContent', valeur) ; 
    return webstorage;    
};*/

// attache l'évenement click au bouton saveWs
    document.getElementById('saveWs').onclick = function(){
        localStorage.setItem('formContent',JSON.stringify(toJSON()));
      location.href = 'index.html';
    };
  

//attache l'event blur a l'input CP
document.getElementById('cp').addEventListener('blur', getVille, true);

function getVille(){
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange=function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
        var rep = JSON.parse(xhr.responseText);
        document.getElementById('ville').value = rep['places'][0]['place name'];
    
    
        }
        else if (xhr.status == 404){
            document.getElementById('ville').style.color = 'red';
            document.getElementById('ville').value = 'cp introuvable';
        } else {
            return true;
        }
    };
    xhr.open('get', 'http://www.zippopotam.us/fr/' + document.getElementById('cp').value, true);
    xhr.send();
}

