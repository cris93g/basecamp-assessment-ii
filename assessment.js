
// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

// CODE HERE
var me={
  firstname:"Cristian",
  age:24,
  state:"TX"
};




// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'favecolor' and set it to your favorite color as a string

//CODE HERE
me.favecolor="grey";

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
@ -23,64 +14,32 @@ var message = {
};
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
me["text"]="cars"


// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount ={
  upVote:function (num1){
  console.log(num1+=1);
},
  downVote:function (num2){
  console.log(num2-=1);
},
};
adjustCount.upVote(4);
adjustCount.downVote(4);

// #5 Create an array called 'myFriends' with four of your friends names

// CODE HERE
var myFriends=[
zach,
elena,
steven,
chris
];

// #6 Add a fifth friends name to the end of your myFriends array

// CODE HERE
myFriends.push("dylan");

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy=myArray.slice(0,4)

// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
function evensOnly(numb) {
function evensOnly() {
  // CODE HERE
  for (var i = 0; i < myNumbers.length; i++) {

        if ((numb[i] % 2) != 1) {
            console.log(numb[i]);

        }

    }

};


evensOnly(myNumbers);
}

// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
@ -92,19 +51,6 @@ var peopleIknow = [
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];
var trueFriends=peopleIknow.filter(function(real){
 return(real.friend===true);
}).map(function(real){
 return real.name;

}).sort();
       console.log(trueFriends);
// #10 create a function called indexFinder and loop over the randomNumbers array below and return the result into a new array called 'indexes' with just their indexes. Be sure to invoke indexFinder.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];
indexes[];

randomNumbers.map(function indexFinder(currElement, index)  {
indexes.push(index);
});

console.log(indexes);
