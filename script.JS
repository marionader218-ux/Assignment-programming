// question 1
let num = Number(prompt("Enter your number"));
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}

// question 2
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// question 3
let i = 2;
while (i <= 50) {
    console.log(i);
    i += 2;
}

// question 4
let num2 = 10;
do {
    console.log(num2);
    num2--;
} while (num2 >= 1);
console.log("lift off!");

// question 5
const greet = (name) => {
    return "Hello ,"+ name + "!";
};
console.log(greet("mario"));

// question 6



// question 7
let scores = [85 , 90 , 65 , 100 , 75];
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
console.log("highest score : " , highest);
console.log("lowest score: " , lowest);

// question 8
let tempreture = -4.7;
console.log(Math.abs (tempreture));
console.log(Math.ceil (tempreture));
console.log(Math.floor (tempreture));
console.log(Math.round (tempreture));

// question 9
let fullName = "  mario nader  "
fullName=fullName.trim();
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf(" "));
console.log(fullName.split(" ")[0]);

// question 10


