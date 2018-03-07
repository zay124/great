var pays = ['Inde','Algérie','Centrafrique','Hengri','Allemagne',
             'Esthiopie','Japon','Irland','Maroc','Réunion','Iran'];
pays.unshift('Mada');             

// titre de doc
var h1 = document.createElement('h1');
var titre = document.createTextNode('Pays à visiter');
h1.appendChild(titre);
document.body.appendChild(h1);

// liste des pays dans un div
var div, texte;
for (var i= 0; i<pays.length;i++) {
     div = document.createElement('div');
    texte = document.createTextNode(pays[i]);
    div.appendChild(texte);
    document.body.appendChild(div);  
}