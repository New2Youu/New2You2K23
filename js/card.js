
function exibirTelaSuspensa(title, busto, cintura, comprimento, imageUrl) {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('modal');
    let cards = document.getElementById('cardsMain');
    let navbar = document.getElementById('navbar');


    let titleElement = document.getElementById('titleRoupa');
    let bustoMed = document.getElementById('bustoMed');
    let cinturaMed = document.getElementById('cinturaMed');
    let comprimentoMed = document.getElementById('comprimentoMed');
    let imgElement = document.getElementById('imgModal');

    titleElement.textContent = title;
    bustoMed.textContent = busto;
    cinturaMed.textContent = cintura;
    comprimentoMed.textContent = comprimento;
    imgElement.src = imageUrl;

    overlay.style.display = 'flex';
    modal.style.display = 'block';
    cards.style.zIndex = '-1'
    navbar.style.display = 'none'
}

function fecharTelaSuspensa() {
    let overlay = document.getElementById('overlay');
    let modal = document.getElementById('modal');
    let cards = document.getElementById('cardsMain');
    let navbar = document.getElementById('navbar');

    overlay.style.display = 'none';
    modal.style.display = 'none';
    cards.style.zIndex = '0'
    navbar.style.display = 'flex'
}

