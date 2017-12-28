var slideIndexSalon = 1;

window.onload= function(){
    showDivsSalon(slideIndexSalon);

}
function pasarDivsSalon(n) {
    showDivsSalon(slideIndexSalon += n);
}

function showDivsSalon(n) {
    var i;
    var x = document.getElementsByClassName("slideSalon");
    if (n > x.length) {slideIndexSalon = 1} 
    if (n < 1) {slideIndexSalon = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndexSalon-1].style.display = "block"; 
}