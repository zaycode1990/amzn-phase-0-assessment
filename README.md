# Deli Counter - Take a Number

## Intro to your Prework Code Challenge - A note from your instructor

You've finally made it to the end of our prework! I'm so proud of you all who have made it this far. 

I want you to think of this assignment a little bit differently than past assignments.

There are no tests. Instead, we've presented you with some example usage at the bottom of this Readme. You should create functions such that the example usage produces the results it expects. You can test your code by uncommenting the example usage section and running the file in your terminal. You can run the file locally with the `node` terminal command and supply the file you want to run.

```bash
  node deli-counter.js
```

Make sure to define the functions that are listed below, but for an added challenge, can you think of other functions a deli would want to incorporate? Feel free to write those functions and play around with them.

Passing criteria is that the example function runs as expected. But your instrcutors will provide feedback based on how you wrote your code. This is a process called "Code Review" - and it is something you should become accustomed to. In fact, it is one of the best ways you can grow as a junior developer.

If you have questions about the code challenge, feel free to reach out to us. Please do not reach out to each other. Instead, post your question on Piazza or attend one of our lab help sessions, and we will happily help you think through this exercise.

- John Souza

## Objectives
1. Practice building methods that use iteration and controlling their return values.
2. Practice manipulating arrays (adding elements, removing elements, etc.).

## Instructions

The local deli is putting in a new computerized queue to keep track of their customers and improve productivity. At the beginning of the day, the deli is empty so the queue should be represented by an empty array:

```javascript
const katzDeli = []
```

Write all of your code in `deli-counter.js`


1. Build the `line` function that takes in an array and returns a string containing everyone with their current place in the line. See the example below for how this should be formatted. If there is nobody in line, it should say `"The line is currently empty."`.

2. Build a function that a new customer will use when entering the deli. The `takeANumber` function should accept two arguments, the array for the current line of people (`katzDeli`), and a string containing the name of the person joining the end of the line. The method should call out (`console.log()`) the person's name along with their position in line. **Top-Tip:** *Remember that people like to count from* `1`*, not from* `0` *("zero") like computers.*

3. Build the `nowServing` function which should call out (i.e. `console.log()`) the next person in line and then remove them from the front. If there is nobody in line, it should call out (`console.log()`) that `"There is nobody waiting to be served!"`.


Example usage:

  ```js
  const katzDeli = []

  takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
  takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
  takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

  line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

  nowServing(katzDeli) //=> "Currently serving Ada."

  line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

  takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

  line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

  nowServing(katzDeli) //=> "Currently serving Grace."

  line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
  ```
  **Hint:** Review adding and removing elements from an array as well as iterating with index numbers. Also, many of the methods to add and remove elements from an array can also be used to add and remove elements to a string. This will help you solve the lab.



