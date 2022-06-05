let products = [
    {image: '1.jpg', name: 'Гель-пенка', price: 1000, info: 'Тщательно смывает остатки макияжа!',}, 
    {image: '2.jpg', name: 'Тоник "Абсолютная нежность"', price: 1200, info: 'Отлично увлажняет лицо!',},
    {image: '3.jpg', name: 'Успокаивающий тоник для лица и глаз', price: 850, info: 'Хороший тоник для лица и глаз!',},
    {image: '4.jpg', name: 'Мицеллярная вода', price: 459, info: 'Отлично смывает весь макияж!',},
    {image: '5.jpg', name: 'Солнцезащитное молочко', price: 823, info: 'Защищает от солнца на 100%!',},
];

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
    overlay.style.opacity = '0';
}
function notReadyAlert(event) {
    showModal('Sorry, not ready yen!<br>Извините, еще не готово!', 'Эх, жаль');
    event.preventDefault();
    return false;
}

function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for(let i=0; i<products.length; i++) {
        let product = products[i];
        if(nameRegExp.test(product.name)) {
            let card = cards[i];
            card.style.border = '1px dashed red';
            card.style.backgroundColor = 'yellow';

        setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}
    }
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
        link.innerText = items[i].text;
        link.href = items[i].href;
        if(items[i].href == '') {
            link.addEventListener('click', notReadyAlert);
        }

        let menuItem = document.createElement('li');
        menuItem.appendChild(link);

        menu.appendChild(menuItem);
    }
}

function showProductInfo(product) {
    showModal(`
        <div><img src="${product.image}"></div>
        <div>${product.name}</div>
        <div>${product.price} &#8381;</div>
        <div><i>${product.info}</i></div>
    `);
}

function generateCards() {
    

    let main = document.querySelector('main');
    for(let i=0; i<products.length; i++) {
        let product = products[i];
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.innerHTML = `

            <a href="#">
                <div class="image"><img src="${product.image}"></div>
                <div class="product-name">${product.name}</div>
                <div class="price">${product.price} &#8381;</div>
            </a>
            <div>
            <input type="number" value="1" min="1">
            <button>Купить</button>

        `;
        cardDiv.querySelector('button').addEventListener('click', function(e) {
            alert('пока в разработке');
            return false;
        });
        cardDiv.querySelector('a').addEventListener('click', function() {
            showProductInfo(product);
        });
        main.append(cardDiv);
    }
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });

    generateMenu();
    generateCards();
}