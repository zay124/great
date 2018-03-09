window.onload= function(){
    // Récupère l'attitude et longetude
    if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(succes,echec);
    } else {
      alert("Géolocalisation non supportée");
    }
     // branche go en onclick
    document.getElementById('go').addEventListener('click',affiche,true);
    
};

// ecrire la fonction succes qui prend en paramètre position (pos)

function succes(pos){
  document.getElementById('lat').value = pos.coords.latitude;
  document.getElementById('long').value = pos.coords.longitude;
}
function echec(){
    alert('une erreur est survenue');
}

function affiche(){
    // récupurer les coordonnés 
    var lat = document.getElementById('lat').value;
    var long = document.getElementById('long').value;
    var pos = new google.maps.LatLng(lat,long);
    // creer les options d'affichage
    var opt = {
        center : pos,
        zoom : 16,
        scrollWheel : false,
        mapTypeId : google.maps.MapTypeId.TERRAIN // ROADMPAS, SATELLITE, HYBRID
    };

    // affiche la carte 
    var carte = new google.maps.Map(document.getElementById('carte'),opt);


}

