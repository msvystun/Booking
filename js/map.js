//функція рандомного числа ВІД ДО
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};
//функція рандомних даних з масиву (4 значенння)
function randomArray() {
    return Math.round(Math.floor(types.length * Math.random()));
};

var randomAvatar = getRandomNumber(1, 8);

var titles = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"]
var randomTitles = titles[Math.floor(titles.length * Math.random())];

var randomPrice = getRandomNumber(1000, 1000000);

var types = ['palace', 'flat', 'house', 'bungalo'];
var randomTypes = types[randomArray()];

var randomRooms = getRandomNumber(1, 5);
var randomQuests = getRandomNumber(1, 6);

var chekinTime = ['12:00', '13:00', '14:00', '13:00'];
var randomChekin = chekinTime[randomArray()];
var chekoutTime = ['12:00', '13:00', '14:00', '13:00'];
var randomChekout = chekoutTime[randomArray()];

var featuresArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var randomFeatures = featuresArray[Math.floor(Math.random() * featuresArray.length)] + ', ' 
    + featuresArray[Math.floor(Math.random() * featuresArray.length)] + ', '
    + featuresArray[Math.floor(Math.random() * featuresArray.length)];

var photoLinks = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

//функція випадкового сортування масиву
function compareRandom(a, b) {
    return Math.random() - 0.5;
    }
var randomPhoto = photoLinks.sort(compareRandom);

var xPosition = getRandomNumber(10, 90) + '%';
var yPosition = getRandomNumber(130, 630);

//об'єкти
var obj = {
    author: {
        avatar: randomAvatar
    },
    offer: {
        title: randomTitles,
        address: '600, 350',
        price: randomPrice,
        type: randomTypes,
        rooms: randomRooms,
        quests: randomQuests,
        chekin: randomChekin, //вказав значення для types !виправити
        chekout: randomChekout, //вказав значення для types !виправити
        features: randomFeatures, //попроавити щоб не було однакових значень
        description: ' ',
        photos: randomPhoto,
    },
    location: {
        x: xPosition,
        y: yPosition
    }
}

console.log('Зображення: ' + 'img/avatars/user' + ('0' + obj.author.avatar) + '.png');

console.log('Адреса: ' + obj.offer.address);

console.log('Назва: ' + obj.offer.title);

console.log('Тип кімнати: ' + obj.offer.rooms);

console.log('Ціна: ' + obj.offer.price);

console.log('Тип житла: ' + obj.offer.type);

console.log('К-сть місць: ' + obj.offer.quests);

console.log('Поселення: ' + obj.offer.chekin);

console.log('Виселення: ' + obj.offer.chekout);

console.log('Вигоди: ' + obj.offer.features);

console.log('Фото: ' + obj.offer.photos);

console.log('Позиція Х, У: ' + obj.location.x + ', ' + obj.location.y);