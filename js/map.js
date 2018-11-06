function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};

function getRandomAvatar(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
};

var randomRooms = getRandomNumber(1, 5);
var randomAvatar = getRandomAvatar(1, 8);

var obj1 = {
    author: {
        avatar: randomAvatar
    },
}
var obj = {
    rooms: randomRooms
}
console.log(obj.rooms);
var mapCardAvatar = 'img/avatars/user' + ('0' + obj1.author.avatar) + '.png');
console.log(mapCardAvatar);


//document.querySelector('section.map').classList.remove('map--faded');
//var obj1 {
//    "author": {
//        "avatar": строка,
//        адрес изображения вида img / avatars / user {
//            {
//                xx
//            }
//        }.png,
//        где {
//            {
//                xx
//            }
//        }
//        это число от 1 до 8 с ведущим нулём.Например,
//        01,
//        02 и т.д.Адреса изо
//        бражений не повторяются
//    },
//
//    "offer": {
//        "title": ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"]
//
//        "address": строка,
//        адрес предложения,
//        представляет собой запись вида "{{lo
//        cation.x
//    }
//}, {
//    {
//        location.y
//    }
//}
//", например, "
//600, 350 "
//"price": число, случайная цена от 1000 до 1 000 000
//
//    "type": строка с одним из четырёх фиксированных значений: palace, flat, ho
//use или bungalo
//
//    "rooms": function getRandomNumber(min, max) {
//        return Math.round(Math.random() * (max - min)) + min;
//    };
//var rand = getRandomNumber(1, 5);
//return rand;
//
//"guests": число, случайное количество гостей, которое можно разместить
//
//    "checkin": строка с одним из трёх фиксированных значений: 12: 00, 13: 00 или
//14: 00,
//
//    "checkout": строка с одним из трёх фиксированных значений: 12: 00, 13: 00 ил
//и 14: 00 "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
//"description": ,
//"photos": ['http://o0.github.io/assets/images/tokyo/hotel1', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
//},
//
//"location": {«
//    x»: случайное число,
//    координата x метки на карте.Значение ограничено раз
//    мерами блока,
//    в котором перетаскивается метка.«y»: случайное число,
//    координата y метки на карте от 130 до 630.
//}
//}
