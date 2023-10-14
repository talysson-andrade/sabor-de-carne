var inputtelefone = document.getElementById('phone');

inputtelefone.addEventListener('input',function (e){
    var x= e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

});

document.addEventListener('DOMContentLoaded', function() {
    const btnReservar = document.getElementById('btnReservar');
    const popup = document.getElementById('popup');
    const fecharPopup = document.getElementById('fecharPopup');

    btnReservar.addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'block';
    });

    fecharPopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});

var links = document.querySelectorAll('a');

links.foreach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        var destino = link.getAttribute('href');

        window.location.href = destino;
    });

});
    
