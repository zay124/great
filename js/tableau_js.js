// variable global
var contacts = ["Gaja","Stalyne","Souheila","Yasmina",
"Widad","Emellie","Romain","Christian",
"Aissa","Djamel","Morad","Tsune","Aurelien","Lyslie"];


/*function showContacts(){   
// liste les membre du tableau dans un UL
 
for (var i=0; i<contacts.length; i++){
     document.write('<article class ="articleMetier" >');
     document.write('<img src ="equipe/'+contacts[i].toLowerCase()+'.png"/>');
     document.write('<a href = "equipe/'+contacts[i].toLowerCase()+'/'+contacts[i].toLowerCase()+'.html">'+contacts[i].toLocaleUpperCase()+'</a>');
     document.write('</article>'); 
    }

}*/

function showContactsDOM() {
     var art, img, a, text;
     var div = document.getElementById('articles')
    for (var i=0; i<contacts.length; i++){
        // Article
           art = document.createElement('article');
           art.setAttribute('class','articleMetier');
       // IMG
       img = document.createElement('img');
       img.setAttribute('alt','Photo de '+contacts[i]);
       img.setAttribute('src','equipe/'+contacts[i].toLowerCase()+'.png');
       art.appendChild(img);
       // a
       text = document.createTextNode(contacts[i].toUpperCase());
       a = document.createElement('a');
       a.setAttribute('href','equipe/'+contacts[i].toLowerCase()+'/'
             +contacts[i].toLowerCase()+'.html');
       a.appendChild(text);
       art.appendChild(a);
       div.appendChild(art);      

    }
};