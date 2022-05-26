/* Modified from open source For personal and community use by https://github.com/subbrat/ */
// but API thing isn't easy, kindly use with caution!
{
    const countE0 = document.getElementById('cto');
    updateVisitCount();

    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/amrita/api/?amount=+1')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
}