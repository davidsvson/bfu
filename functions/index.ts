

// function add(number1: number, number2 : number ) : number {
//     let sum = number1 + number2;

//     //console.log(sum);
//     return sum;
// }

// function hello() {
//     console.log("hello");
// }

// function greeting(name: string) {
//     console.log(`Hello ${name}`);
// }


// let sum1 = add(3,5);

// console.log(sum1);

// add(2,7);

// add(4,1);

// hello();

// hello();

// greeting('david');

// greeting('susan');


function perimeterRectangle(width: number, height: number) : number {
    const perimeter = width + width + height + height;

    return perimeter;
}


let perimeter = perimeterRectangle(2, 4);

console.log(perimeter);

let perimeter2 = perimeterRectangle(3,2);