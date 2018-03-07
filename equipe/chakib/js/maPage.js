
//Fait apparaitre les rubriques
function apparaitre(id){
    var tempo = document.querySelector(id)

    if (tempo.style.visibility == '') {

        tempo.style.visibility = 'visible';
        
        
    }else{
        tempo.style.visibility = '';
    }
}

//la fonction n'est pas au point
