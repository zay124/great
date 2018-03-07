
// Renvoi dans le document les info demandé:

document.write('<p><strong>Navigateur: </strong>' +navigator.appName +" " 
+navigator.appCodeName +" " +navigator.appVersion);
document.write('<p><strong>Date de jours: </strong>' + dateDuJour());
document.write('<p> Domaine: ' +location.hostname);
var cook = navigator.cookieEnabled ? 'Vrai' : 'Faux'
document.write('<p>cookies actif:' +' '+cook);   
document.write('<p> Online:' +' '  +(navigator.onLine ? 'Vrai' : 'Faux'));


  