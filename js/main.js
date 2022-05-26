{
    var mySidebar = document.getElementById("mySidebar");
    function s6_open() {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            // menubar.style.display = 'block';
        } else {
            mySidebar.style.display = 'block';
            menubar.style.display = 'block';
        }
    }
    function s6_close() {
        mySidebar.style.display = "none";
    }
}
{
    window.addEventListener('mouseup', function (event) {
        var box = document.getElementById('mySidebar');
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = 'none';
        }
    });
}

