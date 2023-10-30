const res = arrFilling();
const resStr = '[' + res.map(arr => '[' + arr.join(', ') + ']').join(', ') + ']';
console.log(resStr);

function arrFilling() {
    let outerArr = [];
    let outerArrLenght = prompt('Введіть довжину зовнішнього масиву:');

    let innerArrLenght = prompt('Введіть довжину внутрішніх масивів:');


    for (let i = 1; i <= outerArrLenght; i++) {
        const innerArr = [];
        for (let j = 1; j <= innerArrLenght; j++) {
            const el = prompt('Введіть ' + j + ' елемент ' + i + ' масива:');
            innerArr.push(el);
        }
        outerArr.push(innerArr);
    }

    return outerArr;
}

