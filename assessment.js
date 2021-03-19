/** 
 * Assessment 1.1 
 * 
 * Please read each question carefully and answer with the according type specified. This assessment is WITHOUT
 * notes or Google. You will be screensharing while attempting this assessment, so please make sure to be sharing your
 * entire desktop when attempting it. 
 * 
 * Best of luck, and ask any of the professors for help if needed!
 * 
 * Time allotment: 1 hour
 * 
**/

/*****************************************/

/** 
 * QUESTION #1 -
 * What is the difference between a method and a function?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A function is a reuseable chunk of code which can produce a value, manipulate parts of an application, for other functions to begin execution, etc.  A method is a chunck of code that is related to an object passed down with the parent object through your application.  can be used to manipulate/change things inside of the parent object or class"

/**
 * QUESTION #2 -
 * What is wrong with the following for loop?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let timesToLoop = 15;
for (let i = 0; i = timesToLoop; i++) {
    console.log('I am looping!');
}

"i = timesToLoop"

/**
 * QUESTION #3 -
 * Which type of conditional do you use when you want to assign a value to a variable based on a two-path conditional?
 * (Two path conditional means that there's only true or false, and no additional routes the conditional can take.)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Ternary"

/**
 * QUESTION #4 -
 * What are some of the main reasons to use a function? 
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"To be able to repeat a section of code upon demand as many times as desired"

/**
 * QUESTION #5 -
 * Which of the following answers allows JavaScript to programmatically generate a new HTML element?
 * 
 * A) dom.createElement('div');
 * B) document.element('div');
 * C) document.createElement('div');
 * D) document.cloneElement('div');
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"C"

/**
 * QUESTION #6 -
 * What does the word DOM mean in JS?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"Document Object Model"

/**
 * QUESTION #7 -
 * What is the output of the function?
 * 
 * Answer Type: String (Add Answer Between Quotes, Whitespace Ignored)
 */

function testQuestionSeven() {
    let statement = "Assessments are fun, right?!";

    if (statement === true) {
        console.log('Yes!');
    } else {
        console.log('No!');
    }
}

"No!"

/**
 * QUESTION #8 -
 * What do the following things have in common? 1.14, 10, 10009, 10.19919292
 * 
 * Answer Type: String (Add Answer Between Quotes)
 * Hint: Think of their general TYPE....
 */

"They are all numbers."

/**
 * QUESTION #9 -
 * What is the purpose of an IIFE? (Immediately Invoked Function Expressions)
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"To separate your code from the global scope.  Helps to prevent variables from being overwritten."

/**
 * QUESTION #10 -
 * What is the output of the following conditional?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

let value = 'CODEM-9';
switch (value) {
    case "CODEM7":
        console.log('The answer is cupcakes!');
    case "CODEM8":
        console.log('The answer is pancakes!');
    case "CODEM9":
        console.log('The answer is french fries!');
    default:
        console.log('We are out of food...');
};

"We are out of food..."

/**
 * QUESTION #11 -
 * Write a function that takes a height, and a width, and creates that amount of squares in a grid. 
 * 
 * Answer Type: Function
 */

function makeGrid (height, width) {
    let container = document.querySelector('.container');
    for (let i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.classList.add(row);
    
        container.appendChild(row);
    }
    for (let j = 0; j <width; j++) {
        let square = document.createElement('div');
        square.classList.add(sqaure);

        row.appendChild(square);
    }
}
makeGrid(15, 15);

/**
 * QUESTION #12 -
 * What is the difference between a global and a local variable?
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A global variable is delared outside of a function and is accessable by any function within the workspace.  A local variable is declared inside of a function and is only accessable within that function."

/**
 * QUESTION #13 - (EXTRA CREDIT!)
 * What is the default method of a fetch request?
 * 
 * A) GET
 * B) POST
 * C) PATCH
 * D) DELETE
 * 
 * Answer Type: String (Add Answer Between Quotes)
 */

"A"