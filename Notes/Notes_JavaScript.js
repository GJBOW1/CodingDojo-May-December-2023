// **JAVA SCRIPT NOTES**
//**Notes from Coding Dojo's Programming Basics**

//**Commenting **
/* You can use the slash and astrisc to denote a multi-line
comment. Separately, you can highlight text that you want to 
turn into a comment and press command then the slash. */

//**Data Structure: Arrays (AKA lists)**
//to start/end an array, you want to use brackets [] and use quotes for string items.
//to add an item to an already existing array, use the term variablename.push("itemyouwanttoadd");
//to remove the very last item from an already existing array, use variablename.pop()
//to remove the very first item from an already existing array, use variablename.shift()
//to add an item to the very beginning of an already existing array, use variablename.unshift('putItemYouWanttoInsert')
//to remove a specific index from the array, you use .splice(whichIndextoStartWith, TheAmountOfIndexesToDelete) --> .splice(2,3)
//further to .splice, you can add a third variable to insert something into the array at the starting index. --> .splice(2,3,'Hello') 
//to access or update values in an array, use index numbers, with the first value being at index 0:
// for example:
/*     var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
    console.log(user[0]);    // reading the value -- OUTPUT: Dwight
    user[1] = "Martin";    // updating the value
    console.log(user);    // ["Dwight", "Martin", "beetsbears@battlestar.com"]
*/

//Arrays also have a length property, which tells us how many values are contained in the array:
/* Here is an example:
    var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];
    console.log(user.length);    // 3
    user.pop();
    console.log(user.length);    // 2
*/
/*
function toggleFlashlight(flashlight) {
    if (flashlight.isOn == true) {
        flashlight.isOn = false;
    }
    else {
        flashlight.isOn = true;
    }
}
*/

//**Conditional Statements: if/else**
// conditional statements are 'if this is true/false, then this...' functions.
/*
if (condition) {    
    what to do if condition is true
}
else if (2nd condition) { // can have 0 to many of these statements because this is optional.   
    what to do if 2nd condition is true
}
*Note: an else if and/or else only applies to the 'if' right about it. So, if there are multiple 'ifs' above the else if or else, it will only look at the
*one directly above it. Similarly, if you have 2 or 3 else ifs under an if, each else if is still only dependent on the if statement
*and not the else if above it. 

else {  // can have 0 or 1 of these statements    
    /what to do if none of the previous conditions are met
}

Note that in an if / else if / else chain, when one of the conditions evaluates as true, our code won't check any of the other conditions until it hits an "if" again.

*/ 

// **Comparison and Logic Operations**
/*
Conditional statements evaluate boolean values (true or false). Here is a table that lists ways you can compare two values.
You can also have !false which means (not false) or !true, which means not true.
You can also use a ? to say 'if true' then _____ : (or this) ______. 
For example, a line in a function might lookl ike this:
return (isMember ? '$2.00' : '$10.00')
if your variable starts with "is" then know you are asking for boolean in that function (aka true or false).

NOTE: You will practice these in the Algo App.

Operator:	Description:                    Examples:
===         values & data types are equal	Example: 1 === 2 (false) 1 === 1 (true) For example, a string and an integers are different value types.
==	        values are equal	            Example: 1 == 2 (false) 1 == 1 (true)
!=	        not equal	                    Example: 1 != 2 (true) 1 != 1 (false)
>	        greater than                    Example: 1 > 2 (false) 2 > 1 (true)
<	        less than                       Example: 1 < 2 (true) 1 < 2 (false)
>=	        greater than or equal to        Example: 1 >= 2 (false) 2 >= 2 (true)
<=	        less than or equal to           Example: 1 <= 2 (true) 2 <= 2 (true)
&&          and
||          or



*/

// **For Loops** 
/* to start a loop, begin by writing the word 'for'. 
The var i = 0, this defines when the loop starts.
the i <= 10, this defines what the variable is going to go up to. 
the i++ indicates that it goes up 1 increment each time. This is called the decrement and will only happen on the second time around in the loop. 
because we tacked on the console.log to display the variable, we will see the numbers it loops through until it stops.
you can add by 1 (i++), add in multiples (i=2), or even subtract (i--) in a loop. 

Example: 
for (var i = 0; i <= 10; i++) {
    console.log(i)
}
In another example, we are going to see what happens when we add another condition between the first line and console.log. 

for (var x = 5; x >= 0; x--) {
    x = x-2
    console.log(x)
}

In the above example, we would see the following t-diagram:
First Run (first line): x = 5 (because it starts with the starting number.
First Run (second line): x = 3 because it is subtracting 2 from the new condition we added after finishing the first line, which was only the initial starting pint in the first loop. 
Second Run (first line): x = 2 because the loop restarts to the first line and goes to the decrement, which is minus 1. 
Second Run (second line): x = 0 because the condition subtracts 2. 

*/

//**Loop Tips**
// Some developers like to increment a variable's value by using the syntax: num += 1; this is the same as typing
// num = num + 1. You may sometimes see num++ or num-- as well. These are called increment and decrement operators, respectively. 
// They are equivalent to num += 1 and num -= 1.
// There are *= and /= operators as well, that multiply and divide a number as you might expect.

//*WHILE LOOPS*
/*
while (condition) {    
what to keep doing as long as the condition is true
}   
we get to this line when the condition in the loop is false


In our counting example, we want to keep printing to the console while the number is less than or equal to 5. Let's write it out:

var num = 0;    // start a variable at 0
while (num <= 5) {    
    console.log(num);    // print the current value of num    
    num++;       // increment num by 1


*While loop to meet in the middle:
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}



*/

//*--------------------------------------------------------------------------------------------
//*A for loop is usually used when you want to repeat a process a known number of times.
//*A while loop is usually used when you want to repeat a process until some condition is met.
//*--------------------------------------------------------------------------------------------

/*Let's consider another case where we want to print numbers counting up and counting down until they meet in the middle. 
As an example, we want the code to print "1 9" "2 8" "3 7" "4 6" "5 5". This can be done using either a for loop or a while loop. 
but we might find the while loop easier to read.


using a for loop:

for(var i=1; i<=5; i++) {
    console.log(i + " " + (10-i));
}
// using a while loop
var start = 1;
var end = 9;
while(start <= end) {
    console.log(start + " " + end);
    start++;
    end--;
}

*/



// **Loops and Arrays**
// When we use a for loop to visit each element in an array, it is called traversing an array.  
//As we've seen, the structure of a for loop allows us to accomplish this task quite well. 
//Throughout your time in the Dojo, you will be using for loops to traverse arrays often.

/* Example:

var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}
*/
// Note that the variable i (short for index) is often used in loops as the loop counter variable and is used here to access each element of an array by its index.
// There are other ways to write the third piece of this for loop setup, which increments i by 1. Instead of i = i + 1, we could have also written it i += 1 or i++ All three versions serve the same purpose and we'll use i++ quite heavily in the curriculum. Here they are in full context.


//**Cancatenating Strings**
// You can concatenate strings together using the + operator. For example, "Hello " + "World!" would evaluate to "Hello World!".
// You can also concatenate strings with variables. For example, var name = "Coding Dojo"; "Hello " + name + "!" would evaluate to "Hello Coding Dojo!".
// However, you cannot concatenate strings with numbers. For example, "Hello " + 42 + "!" would evaluate to "Hello 42!".
// But you can multiply a string and an integer. For example, you could multiply "3" with 3 and you would get 9. 
// For example, this would work: console.log("3" * 3). But this would not: console.log("3" + 3).    

/*
*Modulo
You can also choose to use the modulus operator (%), AKA modulo, to check if a number is even or odd. You can set this by
miles % 2 == 0, this statement is literally saying that if you divide your miles by 2 and the remainder is 0, then it is counting even miles.

Modulo is like a magic lego piece. Once you figure out when it's useful to use, it's a powerful tool. Here's a puzzle: how would you determine if a number is odd or even?
Seriously. Stop for a minute and think about it. How do you know if it's odd or even?
Answer: if the number is divisible by 2, it's even.
Ok, but how do you tell a computer that? Ready for this magic?
Answer: if you divide a number by 2 and there's no remainder. There's nothing left over.
Ok, but how do you actually tell a computer that? It doesn't know if there's a remainder.
It can know if there's a remainder. That's where Modulo comes in: it's an operator that specifically determines what the remainder of a division operation is.
When would you use this? If you ever needed to identify if something is odd or even, it comes in handy. If you ever needed to do something with the remainder - like putting leftover pennies in a digital piggybank - modulo comes in handy. Here's what it looks like:

EXAMPLE:
var numberOfPennies = 12;
var numberOfPeople = 5;
var remainingPennies = numberOfPennies % numberOfPeople; 

Comment: the value for remainingPennies would be 2.

*Removing Decimal Places
When dividing numbers we often find ourselves with a decimal. However, we often don't want a decimal in our resulting number. JavaScript gives us quite a few ways to remove the decimal and modify the number to be an integer.
Math.round(num)
This rounds a number like we are used to. If the decimal is .5 or greater, it will round up to the next number, whereas when the number is .49 or below it will round down:

EXAMPLE: 
var num1 = Math.round(2.5)   //num1 is 3
var num2 = Math.round(2.4)   //num2 is 2
var num3 = Math.round(-2.9)  //num3 is -3
var num4 = Math.round(-2.1)  //num4 is -2

*Math.floor(num)
This always rounds a number down:

EXAMPLE: 
var num1 = Math.floor(2.5)   //num1 is 2
var num2 = Math.floor(2.4)   //num2 is 2
var num3 = Math.floor(-2.9)  //num3 is -3
var num4 = Math.floor(-2.1)  //num4 is -3

*Math.ceil(num)
This always rounds a number up:
var num1 = Math.ceil(2.5)   //num1 is 3
var num2 = Math.ceil(2.4)   //num2 is 3
var num3 = Math.ceil(-2.9)  //num3 is -2
var num4 = Math.ceil(-2.1)  //num4 is -2

*Math.trunc(num)
This always truncates the number, chopping off the decimal regardless of what the number is:
var num1 = Math.trunc(2.5)   //num1 is 2
var num2 = Math.trunc(2.4)   //num2 is 2
var num3 = Math.trunc(-2.9)  //num3 is -2
var num4 = Math.trunc(-2.1)  //num4 is -2

*/

//*The use of 'Return' in a function
/* We have been using console.log a lot because it allows us as developers to see what's going on. While useful, besides printing something to the screen and helping us debug, it doesn't really do anything.
Now that we know about functions, it's important to learn about the return statement. The return statement works differently from console.log() because it does something within the function, while console.log() just displays something to the developers in the console.
Suppose we wanted to have a function that can create a pre-populated array of numbers for us.

function createArray() {        
    var newArray = [0,1,2,3,4,5];       
}
The newArray only exists inside of the function.  Out here it no longer exists!

With this code, calling the function creates an array [0,1,2,3,4,5], but then, when the function ends, this array is promptly lost because we have no reference to it. Even if we print it to the console, we wouldn't be able to do anything with the array later. This is where returns are really important--the thing that we return is the true output of the function. A return statement also serves to end the function immediately.
If our function made ice cream cones, console.log would be the equivalent of the ice cream man saying, "I've got some ice cream!", where a return statement is the ice cream man actually handing you an ice cream cone!
When a function is called, the value that is returned gets sent back to the piece of code it was called from. Let's add a return statement and a variable to our code from above:

function createArray() {        
    var newArray = [0,1,2,3,4,5];          
    return newArray; // added the return statement
}
var needAnArray = createArray(); // now needAnArray is the variable that is calling on createArray
What do you think the value of needAnArray is?

If you said the array [0,1,2,3,4,5], you are correct! Remember, //*the value of a function call is whatever it returns. So, in essence, the name of the function becomes synonymous with the value that was returned.
In this case, since needAnArray called on createArray, it now holds the value [0,1,2,3,4,5], the value that createArray returns.
*/  

//*Pseudocode
/*When you're approaching an algorithm challenge, a good first step is to write out all of the steps your algorithm will need to be completed as comments in plain English. This is called "pseudocode," because you're writing out what the computer will do (like code would), except your description can't be compiled or interpreted by the computer.
Writing pseudocode before constructing your algorithm with code has many benefits, including shortening development time, making your code more readable, and giving you a deeper understanding of algorithmic problem-solving.
*/

//* $(variable)
//if you use a dollar sign and curly bracckets you can insert a variable in the middle of string without having to 
//end the first part of the string with quotes, put the variable, then restart a new string with quotes. 
//*However, you must use back ticks (``) surrounding the string instead of quotes in order for it to work.

/*Example below:

function helloWord(word) {
    console.log(word)
    console.log(`${word}`)
    console.log(`The word of the day is, ${word}, so we use it at least once today.`)
}
helloWord("What's up");
*/

//*To stop VS Code from running code, press CTRL + C.

//*Operators that return a Boolean
/*
Operator	Explanation
a == b
true if a is equal to b
a != b	true if a is not equal to b
a < b	true if a is less than b
a > b	true if a is greater than b
a <= b	true if a is less than or equal to b
a >= b	true if a is greater than or equal to b

*Conditonals provide us a way for our code to make a decision, to branch off in one direction or another.
Here is an example:
var isSunny = false;
var isRaining = true;
    
if(isSunny) {
    console.log("Wear sunscreen");
}
    
if(isRaining) {
    console.log("Bring an umbrella");
}

In the above code we will bring an umbrella because isRaining is true.

*Easy to Read vs. Complex code:
New programmers often write conditionals that look like the following code:

if(isSunny == true) {
    console.log("Also wear a hat");
}
There is nothing wrong with code like this, but if the variable isSunny is already going to be true or false it's not necessary to use the 
comparison operator with true. However if this example is easier for us to read we should feel free to write it this way. 
Being a good programmer is about writing code that we understand not writing the most complicated code we can get to work.

Sometimes we want to have an alternative to the code if the condition isn't true, in this example if the current day isn't Monday it 
will let us know that "Today is alright!"

*Note: the .getDay() part of this code will return a number between 0 and 6 where 0 is Sunday and 6 is Saturday

Example 1 of how to do things (but not as efficient)
var today = new Date();
if(today.getDay() == 1) {
    console.log("I hate Mondays!");
}
    
if(today.getDay() != 1) {
    console.log("Today is alright!");
}

Example 2 of the same code (but more efficient -- This code block can be rewritten using an else to avoid having to write a second condition)
var today = new Date();
if(today.getDay() == 1) {
    console.log("I hate Mondays!");
} else {
    console.log("Today is alright!");
}


*Key Value Pairs:

Objects - storing information in named properties
Oftentimes when we're dealing with data, it's not enough to just know one property or value, there is instead a lot 
of related information we're concerned with. If for instance we wanted to plan out our perfect taco, we might imagine 
all of the individual ingredients we'd want to add onto it! The tortilla or shell, the protein, maybe cheese and lots 
of toppings! We can express all of this as separate variables in JavaScript!

var tortilla = "soft corn tortilla";
var protein = "tinga chicken";
var cheese = "cotija cheese";
var toppings = ["lettuce", "pico de gallo", "guacamole"];

This works just fine for one taco, but what if we want to make a second taco with different ingredients? Should we 
start adding numbers to the end of our variables? Something like tortilla2, protein2, cheese2, and toppings2? Instead, 
we could create separate tacos and allow them both to have properites that can share a common name by using Objects! 
An object allows us to combine multiple values like an array, but unlike how an array uses consecutive numbers for the 
locations an object allows us to use any word we would like. We'll commonly refer to these as key value pairs. We can 
rewrite our taco like below, using a colon : to separate the key from the value and using commas , to sperate each key 
value pair.

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"]
}

Now that we have our taco in an object we can access the values that are stored using the dot . syntax.

console.log("Tortilla: " + taco1.tortilla);
console.log("Protein:  " + taco1.protein);
console.log("Cheese:   " + taco1.cheese);
console.log("Toppings: " + taco1.toppings);

As delicious as it would be, there are no languages that have a built in property called .cheese in the objects that 
are made using it. It turns out that all of our properties can be accessed this way which will make it easy for us to 
remember how to get them. If we use really generic keys like x, y, and z we could still access the information but it 
would be hard to know what it's for (unless it's a 3 dimensional point perhaps?).

Methods - giving actions to objects:
Objects are great at storing information in a logical way, but objects can provide even more than that. Our objects 
are also able to contain actions they can do. It's hard to imagine our taco as doing much beyond being highly 
delectable, but we can take the console.log() lines from above to make some functionality.

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + taco1.tortilla);
        console.log("Protein:  " + taco1.protein);
        console.log("Cheese:   " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
    }
}
    

we can now get all the delicious taco facts by
taco1.tacoInfo(); // note we call this like a function because it is a function

It can't be helped... We'll have to use 'this':
Just like in your favorite anime when the protagonists must use some secret weapon (usually that) to save the day, 
JavaScript objects can save us from having the retype the same variable names many times! The special keyword that 
will let us do this is actually called this. Using this we can rewrite the above like so.

var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}

*Switching or Swapping Variables: 
we can now still get all the delicious taco facts by
taco1.tacoInfo(); // note tacoInfo still gets called like a function

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);


Array of Objects:



var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for (var i=0; i<pokémon.length; i++) {
    if pokémon[i].types > length.pokémon {
        console.log(pokémon[i].id);
    }
}


for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

console.log(monster.name)
console.log(Object.values(monster.types))


*Use of 'This'
This is referring to whatever you are hovering over, or referencing inside the function it is calling. Here is an example, where 'this'
is tied to 'element' in the function, making it literally say, "hey, do this function to this element":

The HTML

<button onmouseover="growMe(this)" onmouseout="returnMe(this)" id="hoverMe">Watch me Grow and Shrink on hover</button>

The JS

function growMe(element) {
    element.style.height = "200px"
    element.style.width = "500px"
}
function returnMe(element) {
    element.style.height = "50px"
    element.style.width = "300px"
}

*Nesting Arrays:
Arrays are capable of having arrays inside of them. Assuming we're given an array like...

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
the first index `0` will select the `[2, 5, 8]` sub-array
the second index `2` will select the `8` out of that sub-array

Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns 
true if the value is present and false otherwise

Note - Don't assume the array will always be the same size, we must rely on its .length property

Hint - Can we put a for loop inside another for loop?

Flatten Array
Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from 
inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all 
the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel 
free to use .push(value) and/or .pop() where needed.

complete the following function
function flatten(arr2d) {
    var flat = [];
    insert your code here
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

Click Event:
When a user visits our website they are presented with information in our HTML with a look and feel shaped by our CSS. In order 
to interact with our website, we will need to provide the user with elements they can click, elements they can scroll or swipe, 
and forms they can fill out. As the programmer we have no way of knowing beforehand how long it will take a user to fill out a 
form or exactly when a user might click a button so we need to write code that can react to the user. We can do this through 
events. The simplest event we can react to is the onclick event which is triggered by a user left clicking their mouse or tapping 
on a touchscreen over the element.

<button onclick="alert('hello')">Click Me!</button>

If we add an additional attribute called onclick on the element in our HTML we can set the onclick equal to a JavaScript function 
that will then be executed. In the example above it will trigger an alert which will display a dialog window showing whatever 
message we provide to it.

Linking to Scripts:
In the previous example we show how easily we can use a built in function like alert, what if we want to use a custom function 
that we have written ourselves? We can write our own custom function in a JavaScript file maybe naming it something like script.js.

function custom() {
    we can include more code here if we want to
    console.log("this message is coming from script.js");
}

We have used a <link> tag to include our CSS into our HTML, with JavaScript we need to use a <script> tag.

<script src="script.js"></script>


The Use of 'This':
As we've seen in the previous lesson, we can use alert() to react to users clicking on elements in our page. If we want to do 
something more, like manipulate the element that is clicked on we can make use of 'this', a special parameter to pass into the 
custom JavaScript functions we can write.

html:
<button onclick="example(this)">
    Click Me
</button>

JavaScript:
function example(element) {
    console.log("element clicked", element);
}

Together, the phrase would be "this element", meaning that 'this' is self-pointing and when you click on it, you will be manipulating
that element. 

The power of this is that we can then use JavaScript to read the content of the element or to even manipulate it if we like. 
There are a number of things we can do to manipulate the element like changing its style or changing its content. Text is one 
of the most common things we can manipulate, and we can do this by using the .innerText property.

html: 
<button onclick="turnOff(this)">On</button>
<button onclick="turnOff(this)">On</button>
<button onclick="turnOff(this)">On</button>

JavaScript:
function turnOff(element) {
    element.innerText = "Off";
}

Notice how in each case the button that is changed (turns from the word 'on' to 'off') is the one that is clicked? That's the magical 
property of this, it let's us know exactly which element we are clicking. Another interesting thing we can do with the element is 
to actually remove it from  the page. We can do this by using a method of the element called .remove().

html: 
<img src="ninja.png" alt="ninja" onclick="hide(this)">
<img src="ninja.png" alt="ninja" onclick="hide(this)">
<img src="ninja.png" alt="ninja" onclick="hide(this)">

JavaScript:
function hide(element) {
    element.remove();
}

Hover Event: 
There are more events besides those tied to clicking on elements on our website, one such event relates to the user hovering 
(positioning their mouse) over an element. This is incredibly useful in some situations, giving us more ways of interacting with 
our user. Hover is commonly used with two separate events: the part where the user's mouse is first over the element onmouseover, 
and the part where it leaves the element onmouseout. For an example consider the following code.

<div class="block" onmouseover="over(this)" onmouseout="out(this)"></div>

html: 
.block {
    height: 50px;
    width: 200px;
    background-color: silver;
    border: 1px dotted black;
}

css:
.block {
    height: 50px;
    width: 200px;
    background-color: silver;
    border: 1px dotted black;
}

JavaScript: 
function over(element) {
    alert("mouseover");    
}
function out(element) {
    alert("mouseout");    
}

This code will alert messages when the user hovers their mouse over the block. In this example we also include a special extra 
parameter when we call the function, this. In the JavaScript functions these parameters are named element. If we remember this 
from the previous tacos example we might have an idea what it is already. In this case the parameter element is a JavaScript 
object we can manipulate just like the tacos or pizzas we made before!

function over(element) {
    element.style.backgroundColor = "lime";    
}
    
function out(element) {
    element.style.backgroundColor = "silver";   
}

Using querySelector:
We've seen how we can use our CSS to select HTML elements that we want to style, but how would we do something similar in our 
JavaScript? It turns out that what we've already learned about css selectors can be still be applied, and we can continue to 
write selectors. The way we do that is to use a function called document.querySelector. If we want to select an element with 
an id of "title" we can write code that looks like the following.

<h1 id="title">Hello World</h1>

OR:

Both of these will select the h1 tag:
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");

We can also combine selectors like we've seen before. If for instance we had an image inside of an element with the class 
"nav" we could write code that looks like the following.

<div class="nav">
    <img src="logo.png" alt="logo">
    <h1>Hello World</h1>
</div>

OR

var logoImg = document.querySelector(".nav img");

Note: if there happens to be more than one element this could match then querySelector will only return the first element it finds. 
If there is no matching element then we will get back null instead.

Changing an HTML Element: 

Using JS we can modify the HTML elements that we select. If the tag displays text, like an h3 or a p tag then that text is something 
that we can modify. The way we can do this is by using innerText.

html:
<h3>Lorem Ipsem</h3>

JS:
var h3 = document.querySelector("h3");
h3.innerText = "New Title";

We can also alter HTML elements by changing their attributes. If for instance our HTML element were an img tag, we would be able 
to change its src or alt attributes. If we were to change the src from one particular file to a different file it will change 
the image that is displayed on the page.

<img src="cat.jpg" alt="pet" id="pet-img" />
<button onclick="switchImg()">Switch</button>

html:
var petImg = document.querySelector("#pet-img");

JS:
function switchImg() {
    petImg.src = "dog.jpg";  
}
Changing an element's style:

The HTML tags we can alter also have css that is applied to them. This is something that we can change using JS as well. 
If were to want to change how a button looks in response to it being pressed, we could do something like this.

html:
<button onclick="setActive(this)">Switch to dark mode</button>

JS:
function setActive(element) {
    element.style.backgroundColor = "#222222";
    element.style.color = "#ffffff";
}

The element's .style is a JS object that contains all of the CSS styles we can apply for the element. In this case we change 
its color and also its background-color. Note that when we're using a CSS property that is normally hyphenated, in our 
JavaScript we will need to rewrite it with alternating capitalization, for example margin-left becomes marginLeft. Sometimes 
we want to apply a number of CSS properties at once and while we can do that with .style it may be more efficient for us to 
use a css class and set the element to that class, which is detailed on the css sheet. We could rewrite the above example 
to use a class like so.

html:
<button onclick="setActive(this)">Switch to dark mode</button>

function setActive(element) {
    element.classList.add("dark-mode");
}

This way whatever styles are present in the CSS class dark-mode are applied to the button. Note that an element is allowed 
to have multiple classes so we can treat the classList as if it is like an Array. The classList can be used with .add to push 
a new class to the list and .remove to remover a specific class. We can combine all of what we've learned make a button that 
we can toggle from one mode to another.

html:
<button onclick="setActive(this)">Switch to dark mode</button>

JS:
function setActive(element) {
    if(element.classList.includes("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}

Timeout:
Sometimes we want to apply a delay in our code which can be done in JavaScript by using a function called setTimeout. 
The setTimeout function takes two parameters: (1) a function to be called and (2) the delay in milliseconds. The function 
we provide is often referred to as a callback function and we do not need to invoke it ourselves, we just need to put its 
name in as a parameter. The setTimeout will call the callback function after the amount of time provided.

JS:
function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000);
console.log("End");

What order do we expect the above code to run in?
The "Start" and "End" messages will display right away and the message() function will run after 3 seconds.

Input and Change:
We've previously seen events that relate to a user clicking on a given element or positioning their mouse over it. There is 
another type of events that we should also familiarize ourselves with relating to users interacting with our forms. In our 
forms the elements that the user can interact with are commonly the input, textarea, select tags and while we can still use 
click and hover events with them if we want to know when a user has typed some text into a field or selected an option we 
have events that relate to those things happening.

Consider an example with a select tag containing multiple options. If we want to react to the option being changed we can 
write code that looks like the following.



*/
