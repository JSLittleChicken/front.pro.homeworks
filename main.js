const products = [
    {   
        id: "prod0",
        name: "Стайлер Dyson Airwrap Complete Long",
        description: "Довгі циліндричні наконечники для завитків 30 мм та 40 мм. Захист від перегріву. Ефект Коанда притягує ваше волосся до циліндричної насадки, а потім накручує його. Без використання затискачів, рукавичок або інших незручних пристроїв для завивки. Чохол для зберігання виконаний з екошкіри та оббитий зсередини м'якою тканиною, що закривається за допомогою магнітного замку.",
        price: "25000",
        image: "https://hotline.ua/img/tx/436/4362625295.jpg",
        category: "health-and-beauty"
    }, 
    {   
        id: "prod1",
        name: "Фен Dyson HD07 Supersonic",
        description: "Фен Dyson HD07 Supersonic Iron/Fuchsia випускається в сучасному дизайні в ніжному сірому кольорі з рожевою кришкою, що закриває плату управління. Модель виглядає стильно та представницько, а її продумана конструкція максимально ергономічна для користувача. Пристрій потужністю 1600 Вт обладнано надійним тришвидкісним двигуном і функціонує в чотирьох температурних режимах: 28, 60, 80 і 100°C.",
        price: "18000",
        image: "https://hotline.ua/img/tx/412/4123007115.jpg",
        category: "health-and-beauty"
    },
    {   
        id: "prod2",
        name: "Фен Rowenta Ultimate Experience Maestria",
        description: "Фен Rowenta Ultimate Experience Maestria пропонує все необхідне, щоб підняти гру на новий рівень із сучасними технологіями та функціями для чудового волосся, укладеного до досконалості.",
        price: "5000",
        image: "https://hotline.ua/img/tx/440/4408883855.jpg",
        category: "health-and-beauty"
    },
    {   
        id: "prod3",
        name: "Смартфон Apple iPhone 15 Pro Max 256GB Black Titanium",
        description: "iPhone 15 Pro Max – топове рішення в лінійці «Pro» від Apple, представлене в середині вересня 2023 року, яке є еволюцією попереднього 14-го покоління",
        price: "60000",
        image: "https://hotline.ua/img/tx/409/4093644905.jpg",
        category: "mobile"
    },
    {   
        id: "prod4",
        name: "Смартфон Xiaomi 13 8/256GB Black",
        description: "Xiaomi 13 - це вагомий крок у розвитку смартфонів від компанії Xiaomi. Корпус, виготовлений із металу та скла, надає йому сучасний та стильний вигляд.",
        price: "30000",
        image: "https://hotline.ua/img/tx/376/3768456445.jpg",
        category: "mobile"
    },
    {   
        id: "prod5",
        name: "Смартфон Apple iPhone 13 128GB Blue",
        description: "Apple iPhone 13 - покоління смартфонів від компанії Apple 2021 року. Тонкий корпус з повністю переробленого алюмінію, доповнений унікальними кольорами, які порадують власника і доповнять його стиль.",
        price: "29000",
        image: "https://hotline.ua/img/tx/298/2989120245.jpg",
        category: "mobile"
    },
    {   
        id: "prod6",
        name: "Samsung UE43CU7100",
        description: "Samsung UE43CU7100 - LCD телевізор з діагоналлю 43 дюйми та роздільною здатністю 3840x2160 пікселів. Частота оновлення складає 50 Гц. Підтримує HDR, включаючи формат HDR10+. Працює на операційній системі Tizen із функціоналом Samsung Smart TV. ",
        price: "15000",
        image: "https://hotline.ua/img/tx/440/4408531445.jpg",
        category: "tv"
    },
    {   
        id: "prod7",
        name: "Телевізор LG OLED65C3",
        description: "1. Покращене зображення та функціональність завдяки процесору α9 шостого покоління на основі штучного інтелекту з підтримкою формату 4K Яскраві й чіткі візуальні ефекти з функцією Brightness Booster Дизайн Ultra Slim із ледь помітними рамками",
        price: "80000",
        image: "https://hotline.ua/img/tx/429/4297829315.jpg",
        category: "tv"
    },
    {   
        id: "prod8",
        name: "Телевізор Xiaomi Mi TV A2 32",
        description: "Display Type: HD Resolution: 1,366 × 768 Color depth: 16.7M Refresh rate: 60H Viewing angle: 178°(H)/178°(V)",
        price: "12000",
        image: "https://hotline.ua/img/tx/391/3916075405.jpg",
        category: "tv"
    }
];

let selectedCat;
let selectedItem;

const categories = document.querySelectorAll("li > a[id]");
categories.forEach(category => {
    const categoryId = category.id;
    category.addEventListener('click', () => {
        if (selectedCat && selectedCat !== categoryId) {
            document.querySelector('aside li.selected').classList.remove('selected')
        }
        if (selectedCat !== categoryId) {
            renderProductList(categoryId);
            category.parentNode.classList.add('selected');
            selectedCat = categoryId;
            selectedItem = undefined;
        }            
    });
});

const renderProductList = (categoryId) => {
    const filteredProducts = products.filter((product) => product.category === categoryId);
    const productListContainer = document.querySelector(".product-list");
    productListContainer.replaceChildren()
    
    const productItemContainer = document.querySelector(".product-item");
    productItemContainer.replaceChildren()

    const productsList = document.createElement('ul');
    filteredProducts.forEach(product => {
        const listElement = document.createElement('li');
        const productItem = document.createElement('a');
        productItem.id = product.id;
        productItem.innerText = product.name;
        productItem.href = "#";
        productItem.addEventListener('click', () => {
            if (selectedItem && selectedItem !== productItem.id) {
                document.querySelector('div.product-list li.selected').classList.remove('selected')
            }
            if (selectedItem !== productItem.id) {
                renderProductItem(productItem.id);
                productItem.parentNode.classList.add('selected');
                selectedItem = productItem.id;
            }
        })
        listElement.appendChild(productItem)
        productsList.appendChild(listElement);
    });
    productListContainer.appendChild(productsList);
};

const renderProductItem = (itemId) => {
    const product = products.find(product => product.id === itemId);
    const productItemContainer = document.getElementsByClassName("product-item")[0];
    productItemContainer.replaceChildren();

    const productName = document.createElement("h2");
    productName.innerText = product.name;

    const productImage = document.createElement('img');
    productImage.src = product.image;

    const productDescription = document.createElement('p');
    productDescription.innerText = product.description;
    productDescription.className = 'product-description';

    const productPrice = document.createElement('p');
    productPrice.innerText = product.price + ' ГРН.';
    productPrice.className = 'product-price';

    const cartButton = document.createElement('button');
    cartButton.innerText = 'Додати у кошик';
    cartButton.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        overlay.id = 'overlay';

        const popup = document.createElement('div');
        popup.innerHTML = `<p>Товар "${product.name}" успішно додано до кошику</p>`;
        popup.className = 'success-popup';

        document.querySelector('body').appendChild(overlay);
        document.querySelector('#overlay').appendChild(popup)
        setTimeout(setDefault, 3000);
    })
    productItemContainer.append(
        productName, 
        productImage, 
        productDescription, 
        productPrice, 
        cartButton
    );
    const setDefault = () => {
        document.getElementById('overlay').remove()
        document.querySelector('.product-item').replaceChildren();
        document.querySelector('.product-list').replaceChildren();
        selectedCat = undefined;
        selectedItem = undefined;
        document.querySelector('li.selected').classList.remove('selected');
    }
}

// console.log(renderProductList('health-and-beauty'));