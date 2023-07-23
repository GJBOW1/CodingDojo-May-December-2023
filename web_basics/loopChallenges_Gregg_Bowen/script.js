// Loop Challenges Assignment - Gregg Bowen 

//Step 1: Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (i = 0; i <=20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

//Step 2: Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (i = 100; i>0; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

//Step 3: Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

let i = 5.5
while (i>-3.5) {
i -= 1.5
console.log(i)
}

//Step 4: Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

sum = 0
for (i = 0; i<=100; i++) {
    var sum = sum + i;
    console.log(sum);
}

//Step 5: Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

sum = 1
for (i = 2; i<=12; i++) {
    var sum = sum * i;
    console.log(sum);
}

