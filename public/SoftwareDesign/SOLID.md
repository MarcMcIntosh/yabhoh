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

In practice
such as when interacting with the dom, abstractions could also implement a toString method that returns a dom string.
