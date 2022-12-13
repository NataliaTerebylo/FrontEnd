// console.log('Hello');

// 1 задание
// Создать кнопку, при клике на которую в консоль выводится сообщение 'Hello, world!'
// Create a button that, when clicked, displays the message 'Hello, world!'

const change_btn = document.querySelector('.change_btn');
  change_btn.addEventListener('click', ()=> {
     console.log('Hello, world!');
 });



// 2 задание
// Создать кнопку и пустой div. При клике на кнопку в div создается два параграфа (текст произвольный). 
// Один параграф синего цвета и размером шрифта 20px. Второй - красного цвета, шрифт 24px
// exercise
// Create a button and an empty div. When you click on the button, two paragraphs are created in the div (the text is arbitrary).
// One paragraph in blue and 20px font size. The second is red, font 24px

const addParagraph = ()=> {
    const paragraphDiv = document.querySelector('#paragraph_div')

    const redParagraph = document.createElement('p');
    const blueParagraph = document.createElement('p');

    const textNodeRed = document.createTextNode("Hello, my name is Natasha");
    const textNodeBlue = document.createTextNode("Hello, my name is Vadym");

    redParagraph.appendChild(textNodeRed);
    blueParagraph.appendChild(textNodeBlue);

    paragraphDiv.append(redParagraph);
    paragraphDiv.append(blueParagraph);

    redParagraph.style.color = 'red';
    redParagraph.style.fontSize = '24px';
    blueParagraph.style.color = 'blue';
    blueParagraph.style.fontSize = '20px';

}

const button = document.querySelector('#button');
button.addEventListener('click', addParagraph)


// 3 задание
// Написать функцию, которая принимает два числовых агрумента, 
// а возвращает произведение (умножение) этих чисел. 
// Вывести результат в консоль
// 3 task
// Write a function that takes two numeric arguments,
// a returns the product (multiplication) of these numbers.
// Print the result to the console


const multNum = (num1, num2) => num1 * num2;

console.log(multNum(2, 3));
console.log(multNum(3, 5));

// 4 задание
// Написать функцию, которая принимает числовой аргумент, а возвращает это число в 3 степени. 
// Выведите результат в консоль
// 4 task
// Write a function that takes a numeric argument and returns that number to the power of 3.
// Print the result to the console

const sum = num => num ** 3

console.log(sum(3));