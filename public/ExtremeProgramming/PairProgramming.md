# Pair programming

Two heads are better than one is the driving philosophy behind pair programming, two people work  together at one task one one machine. Which was a useful concept last week during a work trip in which the objective of the trip was to ship a product or enhancement with in a few days, my machine was unusable due to an unruly [gnome](https://www.gnome.org/).

After informing the team I was working with about the gnome issue, the decision was made to pair on tasks with team members and share their machine. Overall I think it was more beneficial to the end product as before implementing a piece of the project or code we would have a brief discussion on which way to go about writing it. On quite a few occasions while the code was being typed out I found my self pleasantly surprised that some of the functionality was achieved in a much simpler way than what I would have done.

### What I would have done
```js
const ticksWithText = ticks.map( (data, index, arr) => {
  const len = arr.length;
  switch(i) {
    case len - 1: return 'today';
    case len - 2: return 'yesterday';
    default: return `${len - i} days ago`;
  }
});
/* do thing with ticks */
doThingWith(ticksWithText);

```
### What was done
```js
const len = tick.length;
const ticksWithText = ticks.map((data, index) => `${len - i} days ago`));
ticksWithText[len - 1] = 'today';
ticksWithText[len - 2] = 'yesterday';
/* do thing with tiks */
doThingWith(ticksWithText);
 }
```

Small difference, but I thought it was interesting as it's the same result but much simpler to write.
Although the first example maybe a habit I picked up from using immutable data practises in JavaScript.

### Other articles about pairing
Stuff i was planning to rip-off ;)
+ <http://www.extremeprogramming.org/rules/pair.html>
+ <https://stackify.com/pair-programming-advantages/>
+ <https://blog.codinghorror.com/pair-programming-vs-code-reviews/>
+ <https://resources.collab.net/agile-101/pair-programming>
