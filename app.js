// ЗАДАЧА 1 //
/* Есть 2 файла: task1.css и task1.html.
Какого цвета будет надпись “Hello World!” ? Почему? */

// ОТВЕТЬ //
/* Так как код читается сверху вниз, поэтому цвет текста будет тот который последний. 
В данном случае последним считается цвет желтый но из за того что в значение класса .mybox 
стоит !important то цвет будет белым. */



// ЗАДАЧА 2 // 
/* Есть HTML:
<div id="box">Длинный текст</div>
И CSS:
#box {transition: 1s;}
#box:hover {width: 50px}
Предполагалось, что при наведении на элемент #box, ширина
элемента плавно меняется на ширину равную 50px.
Представленный код не выполняет поставленную задачу.
В чём причина и как необходимо исправить код? */

// ОТВЕТЬ //
/* Потому что не было задана началное длина id #box. Если по 
дефолту написать длину id #box например 500px то hover будеть работать*/



// ЗАДАЧА 3 //
/* Наш проект зарабатывает на рекламе. Поэтому нам важно
количество пользователей и важно чтобы пользователи
возвращались на наш портал.
Можем ли мы отказаться от указания <!DOCTYPE> ?
Какие будут последствия отказа? */

// ОТВЕТЬ //
/* Если отказаться от DOCTYPE-а то по умолчанию будет показывать старую
версию HTML-а, тогда ваша страница будет показываться как 90-е годы 
из за того что будут активированы старые теги. */


// ЗАДАЧА 4 //
/*На сайте размещён текст вакансии. Некоторые слова
выделены начертанием. Посмотрите на текст с точки зрения
SEO оптимизации страницы.
Всё ли нормально?
Стоит ли вносить какие-либо изменения в разметку и почему?

<p>Расширяем команду, приглашаем к работе начинающего
<b>JS</b> разработчика с минимальным практическим опытом.
Продуктовая разработка. Собственный продукт.
Используем <strong>JQuery</strong>. Планируем обновление и
выбираем между <em>React</em>, <span>Angular</span
style=”font-weight: bold”> и Vue. Склоняемся к React.</p> */
// ОТВЕТЬ //
/* Надо выделять все ключевые слова жирным текстом и 
поработать с типографиями и дизайном*/



// ЗАДАЧА 5 //
/* Перечислите преимущества и недостатки выбора каждого из
форматов графики и укажите в каких случаях целесообразно
использовать каждый формат:
1) .jpg
2) .png
3) .svg */
// ОТВЕТЬ //
/* png формат используется большинство случаев там где нужно показать 
картинку без бэкграунда. svg это векторная графика используется там где нужно 
показать качественное изображение с низкими размерами. */



// ЗАДАЧА 6 //
/* Стажёр устал от “магии” в JS, поэтому получив задачу
сделать вывод в консоль текста “nanana-AAA!!!” он пошёл на
stackoverflow и скопировал код:

let s = 'N'+'A'+'N'+'A'+'N'+'A'+'-'+
+'A'+'A'+ +'A'+'A'+'!'+'!'+'!';

console.log(s.toLowerCase()); */

// ОТВЕТЬ //
/*
// let s = 'N'+'A'+'N'+'A'+'N'+'A'+'-'+'A'+'A'+ 'A'+'A'+'!'+'!'+'!';
// let s1 = s.split('-')[0].toLowerCase();
// let s2 = s.split('-')[1];
// s = s1 + '-' + s2;

// console.log(s);
*/



// ЗАДАЧА 7 //
/* 
let count = 0;
for(count = 0; count < 10; count++){
setTimeout(()=>console.log(count), 0);
}

Что выведет консоль? Почему мы получаем такой ответ? */

// ОТВЕТЬ //
/* Здесь работает event loop. У нас есть синхронные и асинхронные действие в данном случае 
код выполняется синхронно до setTimeout-а. И все что есть внутри 
setTimeout-a попадет в webAPI  и попадет в очередь. Число count будет 10 и
выводится в консоль */



// ЗАДАЧА 8 //
/* 
count = 5;
if (true) {let count = 10};
console.log(count);

Что выведет консоль? Почему?*/

// ОТВЕТЬ //
/* В консоле будет выводить число 5, потому что count который находиться 
внутри условия он имеет локальный доступ вне условия count равняется 5. */



// ЗАДАЧА 9 //
/* 
const goods = [
    {id: 1, type: 'mango', price: 53},
    {id: 2, type: 'mango', price: 77},
    {id: 3, type: 'potato', price: 48},
    {id: 4, type: 'potato', price: 52},
    {id: 5, type: 'mango', price: 33},
    {id: 6, type: 'apple', price: 50},
    {id: 7, type: 'mango', price: 89},
    {id: 8, type: 'apple', price: 60},
    {id: 9, type: 'mango', price: 51},
    {id: 10, type: 'apple', price: 80},
];

Напишите код на JS. Цель: полностью удалить все элементы
массива содержащие объекты с именем mango, а для apple
цену умножить на 3.
Решить минимум 2мя способами:
1) Способ №1 должен менять данные исходного массива в
соответствии с целью.
2) Способ №2 - создавать новый массив, оставляя
исходные данные неизменными.
*/

// ОТВЕТЬ //
/* 
const goods = [
    {id: 1, type: 'mango', price: 53},
    {id: 2, type: 'mango', price: 77},
    {id: 3, type: 'potato', price: 48},
    {id: 4, type: 'potato', price: 52},
    {id: 5, type: 'mango', price: 33},
    {id: 6, type: 'apple', price: 50},
    {id: 7, type: 'mango', price: 89},
    {id: 8, type: 'apple', price: 60},
    {id: 9, type: 'mango', price: 51},
    {id: 10, type: 'apple', price: 80},
];
    
for ( let i = 0; i < goods.length; i++){ 

    if (goods[i].type == 'apple') {
        goods[i].price = goods[i].price * 3;
    }
                               
    if ( goods[i].type == 'mango') { 
        goods.splice(i, 1); 
        i--; 
    } 
}

let newGoods = goods.filter(element => element.type !== 'mango');

newGoods.map(element => {

        if (element.type == 'apple') {
            element.price = element.price * 3;
        }
    
        return element;
});


console.log(newGoods);
*/



// ЗАДАЧА 10 //
/* 
Вам даётся случайная строка текста. Необходимо написать
код, создающий объект из этой строки аналогично примеру:
Исходная строка:
const a = 'asfs';
Ожидаемый результат:
const b = {a:{s:{f:{s: null}}}};
Круто, если ваше решение будет реализовано одной строкой.
*/

// ОТВЕТЬ //
/* 
let options = 'abcd',
    result = {};
    
options.split('').reduce((r, a) => (r[a] = {}), result);

console.log(result);
*/



// ЗАДАЧА 11 //
/* 
Необходимо переписать блок HTML с сайта на react.
Напишите функциональную компоненту на react.
Атрибут style должен быть реализован именно как атрибут,
а не вынесен в переменную.
input должен быть управляемым.
Вся компонента должна помещаться в 1 файл.*/

// ОТВЕТЬ //
/*
import React from 'react';
 
function App() {
  const greeting = 'Hello Function Component!';
 
  return(
        <div class="vasya" style={{border: 1px solid gray}}>
            <label for="name">Enter your name: </label>
            <input type="text" id="name" />
        </div>
        <p>Some text here</p>
  ); 
}
 
export default App;
*/
