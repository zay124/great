// au chargement de doc, branchement des evenements
window.onload= function(){
       //recupère un tableau des images
        var  pics = document.querySelectorAll('article.articleMetier>img');
// passe en revue chaque img
 for (var i = 0; i < pics.length;i++){
     // branche 3 ecouteurs d'evenement à l'image
     pics[i].addEventListener('mouseover',creerPrev,true);
     pics[i].addEventListener('mousemove',deplacerPrev,true);
     pics[i].addEventListener('mouseout', supprPrev, true);
 }
};


// fonction qui gère l'entree de la souris sur la zone de l'image
function creerPrev(evt){
     // creer un la volet un div 
     var prev = document.createElement('div');
       prev.id = 'preview';
       prev.style.position = 'absolute';
       prev.style.left=(evt.pageX + 10 ) + 'px';
       prev.style.top=(evt.pageY + 10) + 'px';
       prev.style.width = '200px';
       prev.style.height = '150px';
       prev.style.zIndex = '999';
       //prev.style.backgroundColor = 'red !important';
       prev.style.border = 'black solid 1px';
       // Rattache au doc
       document.body.appendChild(prev);
       // créer à la volée un IFRAME
       var vue = document.createElement('iframe');
       vue.src = evt.target.nextSibling.href
       vue.frameBoder =0;
       vue.style.backgroundColor ='white';
       prev.appendChild(vue);
    //    prev.textContent =evt.target.nextSibling.href;
    
     

}

// fonction qui gère le diplacement de la souris

function deplacerPrev(evt){
var prev = document.getElementById('preview');
prev.style.left = (evt.pageX+ 10)+'px';
prev.style.top = (evt.pageY+ 10)+'px';

}

// fonction qui gère la sortie de la souris

function supprPrev(){
    var prev =document.getElementById('preview');
    document.body.removeChild(prev);

}
