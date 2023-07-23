//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
console.log(dog_string)
let dog_names = ["Max","HAS","PuRple","dog"]
console.log(dog_names)

function findWords() {
    for (const dog_name of dog_names) {
        if (dog_string.toLowerCase().includes(dog_name.toLowerCase())) {
          console.log(`Matched ${dog_name}`);
        }
    }
}
findWords();

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(givenArr)

function replaceEvens(arr) {
    for (let i = arr.length - 2; i >= 0; i -= 2) {
        arr.splice(i, 1, "even index");
    }
    return arr
}
console.log(replaceEvens(givenArr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
