// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// let result = '';
// const length = 9;
// for ( let i=1; i < length; i++) {
//     for( let j=0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


// const variable = (a,b,c) => a + b * c;
// console.log(variable(5,5,5));


// function sayHello(name) {
//     return `Hello, ${name}!`;
// }

// sayHello('Yehor!');



// function returnNeighboringNumbers(number) {
//     return [number-1,number,number+1];
// }

// returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        
        return num;
    }

    let str = ' ';

    for(let i; i <= times; i++) {
        if( i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    } 

    
    return str;
}

console.log(getMathResult(10,5));


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);