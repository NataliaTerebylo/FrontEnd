// ДЗ:
// 1. Напишите цикл for, который выводит нечетные числа в консоль от 100 до 60
// 1. Write a for loop that prints odd numbers to the console from 100 to 60

// for(let i = 100; i >= 60; i--){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// 2. В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл который выводит в консоль все четные числа от m до n.
// 2. The program contains two variables n and m with a numeric value each. The number n is greater than the number m. Write a loop that prints to the console all even numbers from m to n


// n = 101
// m = 61
// for(let i = m; i <= n; i += 1){
//     if(i % 2 === 0){ 
//         console.log(i)
//     }
//     }

// 3. В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большого числа до меньшего.
// 3. The program contains two variables n and m with a numeric value each. Write a loop that prints numbers from a large number to a small number in the console.

// n = 100;
// m = 60;
// for(let i = n; i >= m; i--){
//     console.log(i);
// }


// 4.* В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел от n и m.
// 4.* The program contains two variables n and m with a numerical value each. Write a loop that counts the sum of even numbers from n and m.

// n = 100;
// m = 60;
// let sum = 0;
// for(let i = n; i >= m; i--){
//     if(i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum)

// 5.* В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает сумму четных чисел и нечетных чисел от n и m. Суммы выведите в консоль ( в начале сумму четных чисел, а затем сумму нечетных чисел).
// 5.* The program contains two variables n and m with a numeric value each. Write a loop that counts the sum of even numbers and odd numbers from n and m. Print the sums to the console (at the beginning the sum of even numbers, and then the sum of odd numbers).

// n = 100;
// m = 60;
// let evenSum = 0;
// let oddSum = 0;
// for(let i = n; i >= m; i--){
//     if(i % 2 === 0) evenSum += i;
//     else oddSum += i
// }
// console.log(evenSum)
// console.log(oddSum)


// 6.* Напишите программу на JavaScript, чтобы суммировать числа от 0 до 1000 - числа которые суммируются должны быть одновременно кратны 3 и 5
// 6.* Write a JavaScript program to sum the numbers from 0 to 1000 - the numbers that are summed must be multiples of 3 and 5 at the same time

let multiplesThreeFive = 0;
for(let i = 0; i <= 1000; i++){
    if(i % 3 === 0 && i % 5 === 0){
        multiplesThreeFive += i;
        console.log(i);
    }
}
console.log(multiplesThreeFive)
