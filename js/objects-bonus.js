// #Loops, Arrays, & Objects
//
// ##Basic Review

// 1. What is an array in Javascript?
//      -A data structure that holds an ordered list of items. Each slot in a JavaScript array can hold any type of data.In JavaScript, arrays are denoted by square brackets, []. The items in an array are called elements, and are separated by commas.

// 2. What is an object in Javascript?
//      -An object is a grouping of data and functionality.

// 3. What is the difference between an array and an object?
//      -Objects have properites whereas Arrays have elements

// 4. What is a property? A method?
//      -Properties: Data items contained in an OBJECT
//      -A Method: Functions on an OBJECT

// 5. Why are loops useful when dealing with arrays?
//      -So you can iterate through the data

// 6. What is an index?
//      -the different slots within an array

// 7. What is the difference between dot and bracket notation?
//          -dot notation is preferred, use square bracket notation when the name of the property is not a valid identifier or if you will not know the name of the property until run time.


//     ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.

        //1. write a function ---> filterNumbers(array)
        //2. since we are returning an array, we need a bucket ---> var bucket = [];
        //3. We need to loop to check each individual item in our array ---> for || foreach loop
        //4. Need to check each item to see if it's a number ---> typeof item === "number"
        //5. If item is a number, push it to the bucket ---> bucket.push(item)
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        //6. .sort() method on bucket array ---> to sort in ascending order
        //7. Return bucket

    // CORRECT ANSWER
    function filterNumbers(array) {
        var bucket = [];
        array.forEach(function (item) {
            if(typeof item === "number"){
                bucket.push(item);
            }

        });
        //code below sorts in ascending order
        return bucket.sort(function (a,b) {
            return a - b;

        });
    }

// function filterNumbers(array){
//     var bucket = [];
//     for (i = 0; i < array.length; i++){
//         if (!isNaN((parseFloat(array[i]))) && typeof array[i] !== "string") {
//             bucket.push(array[i]);
//         }
//     }
//     return bucket.sort();
// }
//
// console.log(filterNumbers(["fred", true, 5, 3, "4"]));

//     ```js
//         filterNumbers(["fred", true, 5, 3]) //[3, 5]
//     ```
//
// // 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.


var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

        //1. write a function ---> getOlder(dogs)
        //2. since we are taking in an array ---> loop through each dog ---> dog.age += 1
        //3. return dogs

//FOR LOOP (similar to vivians)
function getOlder(dogs) {
    for (var i = 0; i < dogs.length; i++){
       dogs[i].age++;
    }
    return dogs;
}


//FOREACH LOOP
// function getOlder() {
//     dogs.forEach(function (dog) {
//         dog.age++;
//     });
//     return dogs;
// }
//
// console.log(getOlder(dogs));
//


//
//     ```js
//     //Example Input:
//

//    ```
//     ```js
//     //Example output
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];
//    ```
//
// // 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false


var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];

    //write a function called washCars(cars)
    //for each loop through each car ---> car.isDirty = false;
    //return cars

//    FOR loop
// function washCars(cars){
//     for (var i = 0; i < cars.length; i++){
//         cars[i].isDirty = false;
//     }
//     return cars;
// }


// // FOREACH loop (same as vivians)
function washCars(){
    cars.forEach(function (car) {
        car.isDirty = false;
    });
    return cars;
}
//
// console.log(washCars(cars));
//


//
//     ```js
//             // Example input
//
//       ```
//
//     ```js
//             // Example output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//     ```
//
// // 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//     ```js
//          //Example Input:
var users = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];

    //PART 1 - COUNT
    //  write a function called adminList(users)
    //  var adminCount = 0;
    //  forEach user ---> user.isAdmin ---> adminCount += 1;
    //  return adminCount


//FOR loop
// function adminList(users) {
//     var bucket = [];
//     for (var i = 0; i < users.length; i++){
//         if(users[i].isAdmin === true){
//             bucket.push(users);
//         }
//         }
//     return bucket.length;
// }

// FOREACH loop
function adminList(){
    var adminCount = 0;
    users.forEach(function (user) {
        if(user.isAdmin){
            adminCount += 1;
        }
    });
    return adminCount;
}
//
// console.log(adminList(users));
//     ```
//
//     ```js
//        // Example Output (before refactor): 2
//
//
//
//
function adminList() {
    var bucket = [];
    users.forEach(function (user) {
        if (user.isAdmin) {
            bucket.push(user.email);
        }

    });
    return bucket;
}
// console.log(adminList());
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//
function adminList(){
    var bucket = [];
    users.forEach(function (user) {
        if(user.isAdmin){
            bucket.push(user)
        }

    });
    return bucket;
}
//
// console.log(adminList());

//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//     ```
//
// // 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     ```js
//         //     Example Input:
//
var breads = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
//
//  1. write a function ---> makeSandwichObjects(breads, fillings)
//  2. var bucket = [];
//  3. we have to loop ---> for (var i = 0; i < breads.length; i++)
//  4. we need to create our sandwich object
//  5. bucket.push(sandwichobject)
//  6. return bucket
//
    function makeSandwichObjects(breads, fillings){
        var bucket = [];
        for (var i = 0; i < breads.length; i ++){
            var sandwichObject = {
                bread: breads[i],
                filling: fillings[i]
            };
            bucket.push(sandwichObject);
        }
        return bucket;
    }



//
// function makeSandwichObjects(breads, fillings) {
//     var sandwichObjects = [];
//     for (i = 0; i < breads.length; i++){
//         sandwichObjects.push({
//             bread:breads[i],
//             fillings:fillings[i]
//         });
//     }
//     return sandwichObjects;
// }
//
//
// function makeSandwichObjects(){
//     var sandwichObjects = [];
//     breads.forEach(function (bread, filling) {
//         sandwichObjects.push({breads: bread, fillings: filling});
//
//     });
//     return sandwichObjects;
// }
// console.log(makeSandwichObjects(breads, fillings));
// //          makeSandwichObjects(breads, fillings) // example call to the function
// //     ```
//     ```js
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]
//
//     //''

// // TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
//
function keepYellow(array){
        var bucket = [];
        array.forEach(function (item) {
            if(item === "yellow"){
                bucket.push(item)
            }
        });
    return bucket;
}
// console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));


//ASSESSMENT 3 PRACTICE ON OWN

//QUESTION 1:
// Create a function that finds the index of a given item.
//
//     Examples
// search([1, 5, 3], 5) ➞ 1
//
// search([9, 8, 3], 3) ➞ 2
//
// search([1, 2, 3], 4) ➞ -1
// Notes:
// If the item is not present, return -1.

//ANSWER:
function search(arr, item) {
	return arr.indexOf(item);
}



//QUESTION 2:
//To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
//
// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
//
// Examples
// progressDays([3, 4, 1, 2]) ➞ 2
// // There are two progress days, (3->4) and (1->2)
//
// progressDays([10, 11, 12, 9, 10]) ➞ 3
//
// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
//
// progressDays([9, 9])  ➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.

//ANSWER:
function progressDays(runs) {
	var count = 0;
	for(i = 0; i < runs.length; i++){
		if(runs[i] > runs[i - 1]){
		 count += 1;
		}
	};
	return count;
}



//QUESTION 3:
//Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. Your code should be general enough to pass every possible case where "zip" can occur in a string.
//
// Examples
// findZip("all zip files are zipped") ➞ 18
//
// findZip("all zip files are compressed") ➞ -1
// Notes
// Uppercase "Zip" is not the same as lowercase "zip".

//ANSWER:
function findZip(str) {
//     return str.indexOf("zip", str.indexOf("zip") + 1)
// }



//QUESTION 4:
//Create a function that takes an array of names and returns an array with only the first letter capitalized.
//
// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
//
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
//
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".

//ANSWER:
function capMe(arr) {
    for(i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
    }

    return arr;
}}

//
//below will provide you a number reversed without any string transformation/manipulation:
Reverse = function(number) {
    var reversed = 0;
    while (number != 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
    }
    return reversed;
};

//
//
//Find the Mean of All Digits
// Create a function that returns the mean of all digits.
//
// Examples
// mean(42) ➞ 3
//
// mean(12345) ➞ 3
//
// mean(666) ➞ 6
// Notes
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be a integer.
//
//ANSWER:
function mean(num) {
    var str = "" + Math.abs(num);
    var arr = str.split("");
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += Number(arr[i])
    }
    return sum/arr.length
}





