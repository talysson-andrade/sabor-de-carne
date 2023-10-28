var inputtelefone = document.getElementById('phone');

inputtelefone.addEventListener('input',function (e){
    var x= e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

});

document.addEventListener('DOMContentLoaded', function() {
    const btnReservar = document.getElementById('submit');
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

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("reservation-form");
  
    formulario.addEventListener("submit", function(event) {
      const nome = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const data = document.getElementById("date");
      const time = document.getElementById("time");
      const guests = document.getElementsByClassName("guests");
  
      if (!nome.checkValidity() || !email.checkValidity() || !mensagem.checkValidity()) {
        event.preventDefault();
        exibirMensagemDeErro();
        
      }
    });
  });
  
var links = document.querySelectorAll('a');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    var destino = link.getAttribute('href');

    window.location.href = destino;
  });
});
