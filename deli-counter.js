const katzDeli = []

function takeANumber(katzQue, customerName) {
    katzQue = katzQue.push(customerName)
    for (let [index, customer] of katzDeli.entries()) {
        if (customer === customerName)
            console.log(`Welcome, ${customer}. You are number ${index += 1} in line.`)
    }

   
}

/*used a for of loop with entries command so I could easily 
have access to the index and value of the passed in array in global scope
it also allowed me to strictly pass in the customerName as a variable so that only one string sentence would 
get logged out*/

let lineQue = []


function line(katzQue) {
    for (let i = 0; i < katzQue.length; i++) {
        let customerEntry = katzQue[i];
        lineQue.push(' ' + [i + 1] + '. ' + customerEntry)
      /* pushed the string sentence to an array based on the array index and values passed in. 
      the for loop anchors the variables to the passed in array so that it always updates the string sentence*/
    }

if (katzQue.length === 0) {
    return "The line is currently empty."
}
else
lineUpdate = lineQue.splice(0,3)
// had to add a splice to get the lineQue under control and to also modify it destructively 
    return "\"The line is currently:" + `${lineUpdate.join("")}"`
// added a join command so that the formating would be more accurate and lineUpdate coulde become a more pure string
}



function nowServing(katzQue) {
    if (katzQue !== []) {
        console.log(`"Currently serving ${katzQue.shift()}"`)
              /* i recently read that shift can be used to call a value in an array 
              and simulatanously remove it so I utilized shift
              */
    }
    else
        return "There is nobody waiting to be served"

}

takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
console.log(line(katzDeli))
nowServing(katzDeli)
console.log(line(katzDeli))
takeANumber(katzDeli, "Matz")
console.log(line(katzDeli))
nowServing(katzDeli)
console.log(line(katzDeli))