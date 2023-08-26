/* data types */

var myName = "beau"

myName = 8

let ourname = "freecodecam"

//-------------------------------------

var a = 5;
var b = 10;

a = a + 1;
b = b + 5;
c = c + "string"

//--------------------------------------------

var sum = 15 + 10;
console.log(sum);
var difference = 65 - 13;
console.log(difference);

var product =2.0 * 2.5
console.log(product)

//-------------------------------------
var a = 48
var b = 108
var c = 33

a *= 5
b *= 10
c *= 8

//-------------------------------------------------------

var ourName = "freecodecamp"
var ourStr = "Hello , our name is" + ourName + ", how are ypu?";

var myName = "Beau";
var myStr = "My name is" + myName;

//--------------------------------------------------------------------

var firstNameLenght = 0;
var firstName = "Ada";

firstNameLenght = firstName.length;

// Set up
var lastNameLenght = 0;
var lastName = "Lovelace";

lastNameLenght = lastName.length;
console.log(lastNameLenght);

//------------------------------------------------------------

var firstName = "ada"

var secondletterofFirstName = firstName[0];

//--------------------------------------------------------

function wordBlancks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The" + mydjective + "" + myNoun + myVerb + "to the store"
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//---------------------------------------------------------------
var ourArray = ["John", 23];

var myArray = ["Quincy", 1];


var ourArray = [["the universe", 42], ["evrything", 101010]];

//---------------------------------------
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]]

var myData = myArray[2][1];
console.log(myData);  

//------------------------------------------------------

var ourArray = ['Stimpson', 'J', 'cat'];
ourArray.push(['happy', 'joy']);
var myArray = [
  ['John', 23],
  ['Cat', 2],
];
var myArray = [
  ['John', 23],
  ['Cat', 2],
];
myArray.push(['dog', 3]);

//------------------------------------------------------------

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

var myArray = [
  ['John', 23],
  ['Cat', 2],
];
var removedFromMyArray = myArray.pop();
console.log(myArray);

//---------------------------------------------------------------

var ourArray = ['Stimpson', 'J', ['Cat']];
var removedFromOurArray = ourArray.shift();

var myArray = [
  ['John', 23],
  ['dog', 3],
];
var removedFromMyArray = myArray.shift();
myArray.unshift(['Paul', 35]);
console.log(myArray);

//-----------------------------------------------------------
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(8, 5)  // le resultat donne 5

//---------------------------------------------------------
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(11, 5);
  
  function FunctionWithArgs(a, b) {
    console.log(a + b);
  }
  FunctionWithArgs(15, 5);

  //--------------------------------------------------------
  var myGlobal = 10;


function fun1(){
    oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output+= "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output+= "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//-----------------------------------------------------------
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else{
        return "Between 5 and 10";
    }  
}
testElseIf(7);
//---------------------------------------------------------

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
  }
  myLocalScope();
  console.log(myVar);
  
  //-----------------------------------------
  
  var outerWear = 'T-Shirt';
  
  function myOutfit() {
    var outerWear = 'sweater';
    return outerWear;
  }
  console.log(myOutfit());
  console.log(outerWear);
  


//---------------------------------------------------------
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    } 
}
console.log(golfScore(5, 4));