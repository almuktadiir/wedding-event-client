<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>A: `{}`</b></summary>
<p>

#### Answer: ?

<i>This will give me an empty object. Cause if I declare an object without assigning it to a variable, it's technically syntactically correct in JavaScript, and it won't result in an error.
In JS case, if I declare objects and assign them to variables so that I can work with and manipulate the data stored in the object. If I don't assign the object to a variable, I lose the ability to interact with it in a meaningful way, so it's generally not a common practice in JS. But here for the MCQ it will be work and answer will be option A.
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>C: "12"</b></summary>
<p>

#### Answer: ?

<i>Here the function execute addition of two variables. We have to pass both of numbers value. But here we pass the value in arguments number and string. That's why we got result 12</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>Here declared an array which is 'food'. Second one is declared an object which is 'info'. But the fact is, 'info' object set the value in 'food' arrays first element, which is not possible. Cause Changing the value of 'info.favoriteFood' does not modify the 'food' array because objects and arrays are reference types in JavaScript, and changing the reference to one does not affect the othe</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>`Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>Here in a function return a name to show dynamically. But here nothing to pass in the arguments as a value. That's why the function return undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>Here Inside the forEach callback function, we receive each element of the "nums" array as the parameter "num"

- For the first iteration (num = 0), the condition if (num) is evaluated. In JavaScript, 0 is considered "falsy," so the condition is false. As a result, count remains unchanged at 0.
- For the second iteration (num = 1), the condition if (num) is evaluated. Here, 1 is considered "truthy" in JavaScript, so the condition is true. As a result, you increment count by 1. Now, count is 1.
- For the third iteration (num = 2), the condition if (num) is again evaluated to true, so you increment count by 1 again. Now, count is 2.
- For the fourth iteration (num = 3), the condition if (num) is evaluated to true once more, so you increment count by 1 again. Now, count is 3.
After all iterations of the forEach loop, the value of count is 3 because it was incremented by 1 for each iteration where the condition if (num) evaluated to true.

</i>

</p>
</details>

