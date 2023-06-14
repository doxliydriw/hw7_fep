text1 = 'Вивести на сторінку в один рядок через кому числа від 10 до 20'
numbers = []
for (let i = 10; i <= 20; i++) {
    numbers.push(i)
}
text = numbers
document.getElementById("1").innerHTML = text1
document.getElementById("res1").innerHTML = text;

text2 = 'Вивести квадрати чисел від 10 до 20'
numbers = []
for (let i = 10; i <= 20; i++) {
    numbers.push(i*i)
}
text = numbers
document.getElementById("2").innerHTML = text2
document.getElementById("res2").innerHTML = text;

text3 = 'Вивести таблицю множення на 7'
numbers = []
for (let i = 0; i <= 10; i++) {
    numbers.push(i*7)
}
text = numbers
document.getElementById("3").innerHTML = text3
document.getElementById("res3").innerHTML = text;

text4 = 'Знайти суму всіх цілих чисел від 1 до 15'
numbers = 0
for (let i = 1; i <= 15; i++) {
    numbers += i
}
text = numbers
document.getElementById("4").innerHTML = text4
document.getElementById("res4").innerHTML = text;
text5 = 'Знайти добуток усіх цілих чисел від 15 до 35'
numbers = 1
for (let i = 15; i <= 35; i++) {
    numbers = numbers * i
}
text = numbers
document.getElementById("5").innerHTML = text5
document.getElementById("res5").innerHTML = text;

text6 = 'Знайти середнє арифметичне всіх цілих чисел від 1 до 500'
numbers = 0
for (let i = 1; i <= 500; i++) {
    numbers += i
}
text = numbers / 500
document.getElementById("6").innerHTML = text6
document.getElementById("res6").innerHTML = text;

text7 = 'Вивести суму лише парних чисел у діапазоні від 30 до 80'
numbers = 0
i = 30
while (i <= 80) {
    numbers += i
    i += 2
}
text = numbers
document.getElementById("7").innerHTML = text7
document.getElementById("res7").innerHTML = text;

text8 = 'Вивести всі числа в діапазоні від 100 до 200 3'
numbers = []
for (let i = 100; i <= 200; i++) {
    numbers.push(i)
}
text = numbers
document.getElementById("8").innerHTML = text8
document.getElementById("res8").innerHTML = text

text9 = 'Дано натуральне число. Знайти та вивести на сторінку всі його дільники.'
numbers = []
let input = Number(prompt('Введіть число', 'number'))
for (let i = 1; i < input; i++) {
    if (input % i == 0) {
        numbers.push(i)
    }
}
text = numbers
document.getElementById("9").innerHTML = text9
document.getElementById("res9").innerHTML = text;

text10 = 'Визначити кількість його парних дільників'
res = 0
for (i in numbers) {
    if (numbers[i] % 2 == 0) {
        res += 1
    }
}
document.getElementById("10").innerHTML = text10
document.getElementById("res10").innerHTML = text

text11 = 'Знайти суму його парних дільників'
res = 0
for (i in numbers) {
    if (numbers[i] % 2 == 0) {
        res += numbers[i]
    }
}
text = res
document.getElementById("11").innerHTML = text11
document.getElementById("res11").innerHTML = text

text12 = 'Надрукувати повну таблицю множення від 1 до 10'
numbers = []
res = 0
for (let i = 1; i <= 10; i++) {
    x = i
    for (let i = 1; i <= 10; i++) {
        y = i
        res = x * y
        numbers.push('<br>' + x + ' * ' + y + ' = ' + res)
    }   
}
text = numbers
document.getElementById("12").innerHTML = text12
document.getElementById("res12").innerHTML = text