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
Single Responsibility Principle or SPR of short, in from what I've read online [1][2][3]
a function / class should only do one thing. For example if part of the code should return some numbers and then produce the out-put as formatted text: 1 = '1rst', 2 = '2nd', 3 = '3rd'... then there should be atleast to functions one to generate the numbers and the other to format them.

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



[1]: https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa
[2]: https://hackernoon.com/solid-principles-made-easy-67b1246bcdf
[3]: https://en.wikipedia.org/wiki/SOLID
