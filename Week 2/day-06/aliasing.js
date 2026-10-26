

            // Aliasing means two variables point to the same object.

            
const user1 = {
    name : "kaushal",
    address : {
        city : "Kathmandu"
        }
    };  

const user2 = { 
    ...user1,
    address : { ...user1.address}
};   

user2.name = "ram";
user2.address.city = "pokhara"; 


console.log(user1.name); 
console.log(user2.name); 
console.log(user1.address.city); 
console.log(user2.address.city);



const original = {
  score: 10,
  details: {
    level: 1
  }
};

const copy = { ...original };

copy.score = 20;
copy.details.level = 2;

console.log(original.score);
console.log(copy.score);
console.log(original.details.level);
console.log(original === copy);