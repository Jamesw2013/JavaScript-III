/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When you use this in a global aspect, it will refer to the window or console.
* 2. When using methods on an object, the object before the .method is what this will refer to.
* 3. When an object is created through a constructor function, the this keyword refers to the object returned by the constructor.
* 4. See example below.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding
const implicit = {
    example: "This is an example",
    method: function(){
        console.log(this.example);
    }
};
implicit.method();
// Principle 3

// code example for New Binding
function Person(name,age){
    (this.name = name), (this.age = age);
}
const james = new Person("James", 24);
console.log(james);
// Principle 4
//This is defined by call or apply methods.
// code example for Explicit Binding
function cordialPerson(greeter){
    this.greeting = "Hello ";
    this.greeter = greeter;
    this.speak = function(){
        console.log(this.greeting + this.greeter);
    };
}

const jerry = new cordialPerson("Newman");
//Jerry has a greeter of Newman. This would normally make the speak function say Hello Newman
const newman = new cordialPerson("Jerry");
//Newman has a greeter of Jerry. This would normally make the speak function say Hello Jerry.

jerry.speak.call(newman);
//Jerry speak is being called with the this reference changing to the newman object. This results in Hello Jerry instead of Hello Newman.
newman.speak.apply(jerry);
//Newman speak is being called with the this reference changing to the jerry object. This results in Hello Newman instead of Hello Jerry.