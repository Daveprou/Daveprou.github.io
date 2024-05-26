let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'All Beef Kare Kare with Homemade Bagoong',
        image: '1.jpg',
        price: 1450
    },
    {
        id: 2,
        name: 'Hickory Barbecue Roast Beef Shortplate with Marble Potato',
        image: '2.jpg',
        price: 1699
    },
    {
        id: 3,
        name: 'Truffle Beef Belly with Mushroom Truffle Cream',
        image: '3.jpg',
        price: 1870
    },
    {
        id: 4,
        name: 'Korean Beef Stew',
        image: '4.jpg',
        price: 995
    },
    {
        id: 5,
        name: 'Hickory Slow Roast Pork Belly',
        image: '5.jpg',
        price: 1250
    },
    {
        id: 6,
        name: 'Tender Pork Ribs with Peach Barbecue Sauce and Parmesan Potato Wedges',
        image: '6.jpg',
        price: 2435
    },
    {
        id: 7,
        name: 'Lechon Tanglad',
        image: '7.jpg',
        price: 1765
    },
    {
        id: 8,
        name: 'Pork Belly Cochinillo Style',
        image: '8.jpg',
        price: 1230
    },
    {
        id: 9,
        name: 'Bang Bang Chicken (Spicy)',
        image: '9.jpg',
        price: 1180
    },
    {
        id: 10,
        name: 'Yangnyeom Chicken',
        image: '10.jpg',
        price: 975
    },
    {
        id: 11,
        name: 'Buffalo Wings with Ranch or Bleu Cheese Dressing',
        image: '11.jpg',
        price: 1280
    },
    {
        id: 12,
        name: 'Roast Chicken in Rosemary Honey Mustard Sauce',
        image: '12.jpg',
        price: 1530
    },
    {
        id: 13,
        name: 'Chicken Teriyaki',
        image: '13.jpg',
        price: 1100
    },
    {
        id: 14,
        name: 'Roast Iberian Chicken',
        image: '14.jpg',
        price: 1315
    },
    {
        id: 15,
        name: 'Trio Cheese Baked Salmon',
        image: '15.jpg',
        price: 3545
    },
    {
        id: 16,
        name: 'Grilled Prawns with Honey Butter Sauce',
        image: '16.jpg',
        price: 2855
    },
    {
        id: 17,
        name: 'Parmesan Crusted Fish Fillet with Garlic Cream',
        image: '17.jpg',
        price: 830
    },
    {
        id: 18,
        name: 'Coconut Shrimp and Fish with Cucumber Salsa and Mango Mayo',
        image: '18.jpg',
        price: 1470
    },
    {
        id: 19,
        name: 'Beer Battered Fish and Chips with Ranch Dressing',
        image: '19.jpg',
        price: 815
    },
    {
        id: 20,
        name: 'Bacon Wrapped Prawns in Thai Sweet Chili',
        image: '20.jpg',
        price: 3445
    },
    {
        id: 21,
        name: 'Gambas al Ajillo',
        image: '21.jpg',
        price: 1840
    },
    {
        id: 22,
        name: 'Beef Lasagna',
        image: '22.jpg',
        price: 875
    },
    {
        id: 23,
        name: 'White Chicken and Spinach Lasagna',
        image: '23.jpg',
        price: 1485
    },
    {
        id: 24,
        name: 'Mushroom Bacon Carbonara',
        image: '24.jpg',
        price: 755
    },
    {
        id: 25,
        name: 'Paella Española',
        image: '25.jpg',
        price: 1945
    },
    {
        id: 26,
        name: 'Paella Negra',
        image: '26.jpg',
        price: 1885
    },
    {
        id: 27,
        name: 'Paella Pinakbet',
        image: '27.jpg',
        price: 1445
    },
    {
        id: 28,
        name: 'Paella Tinola',
        image: '28.jpg',
        price: 1215
    },
    {
        id: 29,
        name: 'Coffee Jelly',
        image: '29.jpg',
        price: 745
    },
    {
        id: 30,
        name: 'Mango Tapioca',
        image: '30.jpg',
        price: 910
    },
    {
        id: 31,
        name: 'Classic Fruit Salad with Fresh Apples and Nata de Coco',
        image: '31.jpg',
        price: 765
    },
    {
        id: 32,
        name: 'Buko Pandan with Sago and Nata de Coco',
        image: '32.jpg',
        price: 645
    },
    {
        id: 33,
        name: 'Roasted Duck',
        image: '33.jpg',
        price: 2600
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₱${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To List</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice += value.price;
        count += value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>₱${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = `₱${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

