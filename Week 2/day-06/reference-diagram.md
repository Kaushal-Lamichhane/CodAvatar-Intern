# JavaScript Reference Diagram

## 1. Two variables referencing the same object

const userA = { name: "Alex" };
const userB = userA;

userB.name = "Sam";

console.log(userA.name); // "Sam"


### Memory diagram


userA ─────┐
           ├────> { name: "Sam" }
userB ─────┘


**Explanation:** Both variables refer to the same object in memory. Changing the object through `userB` also affects what we observe through `userA`.

## 2. Two separate objects

```javascript
const userA = { name: "Alex" };
const userB = { name: "Alex" };

console.log(userA === userB); // false


### Memory diagram


userA ─────> { name: "Alex" }

userB ─────> { name: "Alex" }


**Explanation:** The objects have the same property values, but they are two different objects. JavaScript compares their identities, not their contents, when using `===`.

## Key Takeaway

- Objects and arrays are reference types.
- Assigning an object to another variable copies the reference, not the object itself.
- Two separate objects are not equal under `===`, even when their contents match.
