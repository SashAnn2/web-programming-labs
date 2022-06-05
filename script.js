

function showModal(messageText, buttonText) {
    let modal = document.getElementsByClassName ('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';

    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;

    document.body.style.overflow = 'hidden';
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    modal.style.opacity = '1';
}
function hideModal() {
    let modal = document.getElementsByClassName('modal')[0];
    setTimeout(function() {
        modal.style.visibility = 'hidden';
    }, 350); // 200ms + 150ms
    modal.style.opacity = '0';

    document.body.style.overflow = 'auto';
    let overlay = document.getElementsByClassName('overlay')[0];
    setTimeout(function() {
        overlay.style.visibility = 'hidden';
    }, 200);
    modal.style.opacity = '0';
}
function notReadyAlert(event) {
    showModal('Sorry, not ready yen!<br>Извините, еще не готово!', 'Эх, жаль');
    event.preventDefault();
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'Гель-пенка') {
        productNumber = 0;
    } else if (name == 'Тоник нежность') {
        productNumber = 1;
    } else if (name == 'Успокаивающий тоник') {
        productNumber = 2;
    } else if (name == 'Мицеллярная вода') {
        productNumber = 3;
    } else if (name == 'Молочко') {
        productNumber = 4;      
    } else {
        alert('Товар не найден');
    }
    
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}

function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';

    let items = [
        {href: 'index.html', text: 'Товары'},
        {href: '', text: 'Контакты'},
        {href: '', text: 'Доставка'},
        {href: '', text: 'Акции'},
        {href: 'about-us.html', text: 'О нас'},
    ];

    for(let i=0; i<items.length; i++) {
        let link = document.createElement('a');
        link.innetText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });

    generateMenu();
}