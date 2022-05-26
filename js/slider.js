var sldid = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    sldid++;
    if (sldid > x.length) { sldid = 1 }
    x[sldid - 1].style.display = "block";
    setTimeout(carousel, 4000);
}