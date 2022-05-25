{
    var mySidebar = document.getElementById("mySidebar");
    function s6_open() {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
        } else {
            mySidebar.style.display = 'block';
        }
    }
    function s6_close() {
        mySidebar.style.display = "none";
    }
}