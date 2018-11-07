//функція рандомного числа ВІД ДО
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};
//функція рандомних даних з масиву (4 значенння)
function randomArray() {
    return Math.round(Math.floor(types.length * Math.random()));
};

var randomAvatar = ['img/avatars/user01.png','img/avatars/user02.png','img/avatars/user03.png','img/avatars/user04.png','img/avatars/user05.png','img/avatars/user06.png','img/avatars/user07.png','img/avatars/user08.png'];

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

var xPosition = getRandomNumber(70, 1100);
var xPosition1 = getRandomNumber(70, 1100);
var xPosition2 = getRandomNumber(70, 1100);
var xPosition3 = getRandomNumber(70, 1100);
var xPosition4 = getRandomNumber(70, 1100);
var xPosition5 = getRandomNumber(70, 1100);
var xPosition6 = getRandomNumber(70, 1100);
var xPosition7 = getRandomNumber(70, 1100);
var yPosition = getRandomNumber(140, 520);
var yPosition1 = getRandomNumber(130, 520);
var yPosition2 = getRandomNumber(130, 520);
var yPosition3 = getRandomNumber(130, 520);
var yPosition4 = getRandomNumber(130, 520);
var yPosition5 = getRandomNumber(130, 520);
var yPosition6 = getRandomNumber(130, 520);
var yPosition7 = getRandomNumber(130, 520);

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



document.querySelector('section.map').classList.remove('map--faded');

//куда будем вставляти курсор
var similarListElement = document.querySelector('.map__pins');

//шаблон який будем копіювати
var similarPinTemplate = document.querySelector('#map-card')
    .content
    .querySelector('div');

    var wizards = [
        {
            avatar: randomAvatar[0],
            left: xPosition + 'px',
            top: yPosition + 'px'
        },
        {
            avatar: randomAvatar[1],
            left: xPosition1 + 'px',
            top: yPosition1 + 'px'
        },
        {
            avatar: randomAvatar[2],
            left: xPosition2 + 'px',
            top: yPosition2 + 'px'
        },
        {
            avatar: randomAvatar[3],
            left: xPosition3 + 'px',
            top: yPosition3 + 'px'
        },
        {
            avatar: randomAvatar[4],
            left: xPosition4 + 'px',
            top: yPosition4 + 'px'
        },
        {
            avatar: randomAvatar[5],
            left: xPosition5 + 'px',
            top: yPosition5 + 'px'
        },
        {
            avatar: randomAvatar[6],
            left: xPosition6 + 'px',
            top: yPosition6 + 'px'
        },
        {
            avatar: randomAvatar[7],
            left: xPosition7 + 'px',
            top: yPosition7 + 'px'
        }
    ];


    var renderWizard = function (wizard) {
        var wizardElement = similarPinTemplate.cloneNode(true);

        wizardElement.querySelector('button').style.left = wizard.left;
        wizardElement.querySelector('button').style.top = wizard.top;
        wizardElement.querySelector('.map__pin img').src = wizard.avatar;

        return wizardElement;
    }
    var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}

    similarListElement.appendChild(fragment);

// console.log('Адреса: ' + obj.offer.address);

// console.log('Назва: ' + obj.offer.title);

// console.log('Тип кімнати: ' + obj.offer.rooms);

// console.log('Ціна: ' + obj.offer.price);

// console.log('Тип житла: ' + obj.offer.type);

// console.log('К-сть місць: ' + obj.offer.quests);

// console.log('Поселення: ' + obj.offer.chekin);

// console.log('Виселення: ' + obj.offer.chekout);

// console.log('Вигоди: ' + obj.offer.features);

// console.log('Фото: ' + obj.offer.photos);

console.log('Позиція Х, У: ' + obj.location.x + ', ' + obj.location.y);

