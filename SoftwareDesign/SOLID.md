# S.O.L.I.D
Brace yourself for acronyms with in acronyms... (acronym-ception)?

## Principles of SOLID
+ __S__ Single Responsibility Principle (SRP)
+ __O__ Open closed principle (OCP)
+ __L__ Liskov substitution principle (LSP)
+ __I__ Interface segregation principle (ISP)
+ __D__ Dependency Inversion principle (DIP)

## What each means

### S
Single Responsibility Principle or SPR of short, in from what I've read online [1](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa),
[2](https://hackernoon.com/solid-principles-made-easy-67b1246bcdf),
[3](https://en.wikipedia.org/wiki/SOLID),
a function / class should only do one thing. For example if part of the code should return some numbers and then produce the out-put as formatted text: 1 = '1rst', 2 = '2nd', 3 = '3rd'... then there should be atleast to functions one to generate the numbers and the other to format them.

##### Easy to remember
**Do one thing and Do it well** --*(unix philosophy)[https://en.wikipedia.org/wiki/Unix_philosophy]*

Why?... modularity. If change to the input or output is needed then only the relevant function needs to be changed, this also allows functions to be chained which is a much more flexible approach to writing one large function / class that has several procedures with in it. Using SRP Each procedure becomes a single function / class in it's existing in it's own context ( of file ).

```js
function example() {
  // generate random number between
  const randomwNumber = ((Math.random() * 10) + 1) | 0;
  switch (randomNumber) {
    case 1: return '1rst';
    case 2: return '2nd';
    default: return randomNumber + "th";
  }
}
```
##### When implemented using SRP
The example function is rewritten as several smaller functions could which work independently from the example.
```js
function randomNumber(range = 10) {
  return (Math.random() * range) + 1 | 0;
}
function toText(num) {
  if (num === 0 || isNaN(num)) { throw new RangeError(`A non-zero integer was expected, ${num} was given`); }
  switch(num) {
    case 1: '1rst';
    case 2: '2nd';
    default: randomNumber + "th";
  }
}
function example() {
  const randomN = randomNumber();
  return toText(randomN);
}
```
#### The benefits
In the second example each function could be re-used else where and can customised to provide more meaningful results or in the case of toText better Errors :)

### O
Open closed principle:
*SOFTWARE ENTITIES (CLASSES, MODULES, FUNCTIONS, ETC.)
SHOULD BE OPEN FOR EXTENSION, BUT CLOSED FOR
MODIFICATION.* -- [Bertrand Meyer ](https://drive.google.com/file/d/0BwhCYaYDn8EgN2M5MTkwM2EtNWFkZC00ZTI3LWFjZTUtNTFhZGZiYmUzODc1/view)

After reading a search for a few posts that would be easy to understand about ocp (from a JavaScript perspective)
see:
+ <http://aspiringcraftsman.com/2011/12/19/solid-javascript-the-openclosed-principle/>
+ <https://dev.to/kayis/is-react-solid-630>
+ <https://hackernoon.com/solid-principles-made-easy-67b1246bcdf>

With my limited understanding of ocp I was able to relate it to something more common with in Javascript,
which is prototypical inheritance. explained in more detail [here](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9).

for an example of ocp at work, we'll be using the toString method that is available on most JavaScript Objects.
In my experince the toString method provided by the Object.prototype is not very useful.
```js
({}).toString()
// '[object Object]'
```
But on other objects (most things in JavaScript) inherit this prototype from the Object constructor.
```js
/* Normal object */
({key: 'value'}).toString()
// '[object Object]'

/* Arrays, return a string of comma separated values*/
(['a', 'b']).toString();
// 'a,b'

/* functions */
(function foo() { return 'bar'}).toString();
// "function foo() {\nreturn 'bar'}"

/* Date */
new Date(0).toString();
// 'Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)'
```
And more, the thing to take note of in respects to OCP, is that each of these are instances of an object, and have a toString method that works slightly differently and these differences do not modify the toString method of object constructor, but provide their own specialised version of the toString() method.

In practice, such as when interacting with the dom, abstractions could also implement a toString method that returns a dom string.

### L
Liskov Substitution Principle (LSP)

There are a few interpretations of the original [article](http://www.cs.cmu.edu/afs/cs/project/calder/www/fmdp.html)
+ *... The objects of subtype ought to behave the same as those of the supertype as far as anyone or any program using the supertype objects can tell.* -- [c2 wiki](http://wiki.c2.com/?LiskovWingSubtyping)
+ *Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.*
+ *All this is stating is that every subclass/derived class should be substitutable for their base/parent class.* -- [c ramirez](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

A more simple way of thinking about this is to the inherited prototypes / methods should still work the same way for a derived instance ( child ) when called on the parent.

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + ' makes a noise.'; }
}

class Dog extends Animal {
  constructor(name) { super(name); }
  bark() { return this.name + ' barks.'; }
}

const Felix = new Animal('Felix');
const Doug = new Dog('Doug');


Doug.bark() // 'Doug barks';
Doug.bark.call(Felix) // Felix Barks.

Dog.prototype.speak.call(Felix) === Felix.speak(); // true
```

### I
Interface Segregation Principle ([ISP](http://wiki.c2.com/?InterfaceSegregationPrinciple)).
It is better to have many small compossible interfaces / methods that can be re-used as needed.

```js

// Reusable interfaces
function speak() { return this.name + 'makes a noise'; }
function meow() { return this.name + ' meow' ;}
function purr() { return this.name + ' purr' ;}
function hunt() { return this.name + ' hunts';}
function roar() { return this.name + ' goes RAWR!'}

class Animal {
  constructor(name) {
    this.name = name;
    this.speak = speak.bind(this);
  }
}

class HouseCat extends Animal {
  constructor(name) {
    super(name)
    this.meow = meow.bind(this);
    this.purr = purr.bind(this);
  }
}

class FarmCat extends HouseCat {
  constructor(name) {
    super(name);
    this.hunt = hunt.bind(this);
  }
}

class BigCat extends Animal {
  constructor(name) {
    super(name);
    this.roar = roar.bind(this);
    this.hunt = hunt.bind(this);
  }
}

const Simba = new BigCat('Simba');

Simba.speak() // Simba makes a noise
Simba.roar() // Simabe goes RAWR;
```
This is a similar principle to modularity where large piece of code are created out of many smaller re-usable parts. I would imagine that there could be some pitfalls when a of the module is modified, which leads on to the next Acronym of SOLID.

### D
Dependency Inversion Principle [DIP](http://wiki.c2.com/?DependencyInversionPrinciple)
>A. High level modules should not depend upon low level modules. Both should depend upon abstractions.
B. Abstractions should not depend upon details. Details should depend upon abstractions.
Robert C. Martin

In the above, abstractions for modules could be thought of as thin wrapper functions for a module that a project uses frequently. This is a bit of an investment up-front but in the long run can save time when a module is updated and the api changes, it is much easier to update the small abstractions rather than a large product that relies on the module.

There have been a few situations I can think of where writing short abstractions / wrappers around some desired functionality from a module would have saved alot of time re-writing a code base to deal with updates to a dependency. One in particular that comes to mind is updating graphs written using an early version of [d3](https://github.com/d3/d3/blob/master/CHANGES.md#axes-d3-axis). When before the update axies where written as such:

```js
d3.select(".axis").call(d3.svg.axis().scale(x).orient("bottom"));
```
When the update came out they needed to be written like this:
```js
d3.select(".axis").call(d3.axisBottom(x));
```

The subtle changes happened throughout the library and most of my previous work required to be entirely rewritten to accommodate these changes. In hindsight, writing abstractions around the functionality required from the library would have enabled most of the work to be salvaged.

### SOLID Summary
##### Single Responsibility Principle
Do one thing
##### Open closed principle
avoid modifying modules, try to extend functionality with derived functions / objects.
##### Liskov substitution principle
The inherited methods should work constantly.
##### Interface segregation principle
Re-usability through extraction.
##### Dependency Inversion principle
Use abstractions to interact with dependencies.
