window.onload = function () {
    showRSS();
    setInterval(showRSS, 60000);
};



// requête AJAX
//'http://www.lemonde.fr/rss/une.xml'

function showRSS() {
    //Instancie l'objet XHR (IE vs W3C)

    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // fonction qui récupére la réponse de la requête
    xhr.onreadystatechange = function () {
        // si requête trouvée et finie
        if (xhr.readyState == 4 && xhr.status == 200) {
            // récupére les items du xml 
            var items = xhr.responseXML.documentElement.getElementsByTagName('item');
            // Boucle  sur chaque items 
            var noeud, par, img;
            for (var i = 0; i < items.length; i++) {
                // Titre 
                noeud = items[i].getElementsByTagName('title');
                par = document.createElement('p');
                par.textContent = noeud[0].textContent;
                document.getElementById('news').appendChild(par);
                // Photo
                try {
                    noeud = items[i].getElementsByTagName('enclosure');
                    img = document.createElement('img');
                    img.src = noeud[0].getAttribute('url');
                    document.getElementById('news').appendChild(img);


                } catch (e) {
                    console.log(e);
                }
                
            }


        }



    };

    //Prépare la requête
    xhr.open('get', 'http://www.lemonde.fr/rss/une.xml', true);

    // envoie la requête
    xhr.send();

};