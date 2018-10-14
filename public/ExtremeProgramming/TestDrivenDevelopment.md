# Test First Development
The terms test first programming (TFP) and test driven development (TDD) are two terms that Kent Beck popularised. TFP was first mentioned in his book “Extreme Programming Explained” and later rename to TDD in his next book "Test Driven Development by Example". [source](https://stackoverflow.com/a/17707188)

The core methodology of TDD is based around writing a test for a piece of code (unit) first (before writing the unit), the writing the bare minimum to get that test to pass. Some of the advantages to writing the tests first are that the end product will having a suite of tests to determine how much of the code base works, another is that if the specifications are written out in tests the minimal amount code that meaqts those specifications becomes easier to write.

## The test-code-refactor cycle
In practice TDD has three discant phases which are repeated until all test cases from the specification are passing. These phases are:
+ __Red phase__ A failing test is written
+ __Green phase__ Code that pasts the failing test is written
+ __Refactoring or Blue phase__ The code is slightly improved, a common way for doing this is removing repetition.

## A brief example
In order to illustrate these phases I do a few cycles of writing a tennis scoring system [exercise](http://codingdojo.org/kata/Tennis/).

for convenance sake these examples will be using a test framework called [mocha](https://mochajs.org/) and simple comparison function called [assert](https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript)

> Code comments are prefixed with //
or contained in /* blocks*/


```js
// Write a test
describe('Tennis score system', function() {

  // This test will fail with and undefined function error.  

  it('If both player one and player two have 0 points, return Love all', function() {
    const expected = 'Love All';

    const result = tennisScoreSystem(0, 0);
    assert(expected, results);
  }
};
```
Running the test now will cause an error to occur as no tennisScoreSystem has been defined yet... The bare minimum to pass this test is:

```js
function tennisScoreSystem() { return 'Love All'; }
```
As there is not much to refactor, an other test should be added, to save some space in this blog I'll put in a few more. So we can move on to refactoring.

```js

describe('Tennis score system', function() {
  it('If both player one and player two have 0 points, return Love all', function() {
    const expected = 'Love All';
    const result = tennisScoreSystem(0, 0);
    assert(expected, results);
  };

  // New test
  it('if player one scores is 1 and player 2 score is 0 return Fifteen, Love', function() {
    const expected = 'Fifteen, Love';
    const result = tennisScoreSystem(1, 0);
  });

  it('if player one scores is 0 and player 2 score is 1 return Love, Fifteen', function() {
    const expected = 'Love, Fifteen';
    const result = tennisScoreSystem(1, 0);
  });

  it('if player one scores is 2 and player 2 score is 1 return Thirty, Fifteen', function() {
    const expected = 'Love, Fifteen';
    const result = tennisScoreSystem(2, 1);
  });
};
```
And if writing the bare-minimum to pass each test, would look similar to this:
```js
function tennisScoreSystem(player1, player2) {
  if (player1 === 1 && player2 === 0) { return 'Fifteen, Love'; }
  if (player1 === 0 && player2 === 1) { return 'Love, Fifteen'; }
  if (player1 === 2 && player2 === 1) { return 'Thirty, Fifteen'; }
  return 'Love All';
}
```
And finally refactoring, it could look this:
```js
function tennisScoreSystem(player1, player2) {
  // Array of scores, indexed from zero to 2;
  const scores = ['Love', 'Fifteen', 'Thirty'];
  const playerOneText = scores[player1];

  // Append all if needed
  if (player1 === player2) { return playerOneText + ' All'; }

  return playerOneText + ', ' scores[player2];
}
```
This could be further refactored but at the cost of readability, so I'll leave it at that and the tests should still pass :)
