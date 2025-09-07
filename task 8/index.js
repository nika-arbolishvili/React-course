
function counter(){    
const a = 20;
const b = 7;

console.log("ჯამი:", a + b);

console.log("სხვაობა:", a - b);

console.log("ნამრავლი:", a * b);

console.log("განაყოფი:", a / b);

console.log("ნაშთი:", a % b);

}

const checkNumbers = () => {
    const a = 10;
    const b = 15;

    if (a > b && a % b === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

};
const arrayManipulations = () => {
    const arr = [10, 20, 30, 40, 50];

    console.log("First element:", arr[0]);
    console.log("Last element:", arr[arr.length - 1]);

    console.log("Length:", arr.length);

    arr.push(60, 70);
    console.log("After push:", arr);

    arr.pop();
    console.log("After pop:", arr);

    
    const middleIndex = Math.floor(arr.length / 2);
    console.log("Middle element:", arr[middleIndex]);
};

arrayManipulations();
counter()
checkNumbers()
arrayManipulations()
