# Word chain kata
Spec: <http://codekata.com/kata/kata19-word-chains/>

## Starting point
```js
const EXPECTED_RESULT_1 =  [ 'cat',  'cot', 'cog', 'dog'];
const EXPECTED_RESULT_2 =  ['lead', 'load', 'goad', 'gold'];
const EXPECTED_RESULT_3 = ['ruby', 'rubs', 'robs', 'rods', 'rode', 'code' ];

const DICTONARY = [ ...EXPECTED_RESULT_1, ...EXPECTED_RESULT_2, ...EXPECTED_RESULT_3];

describe('Word chain', function() {
 const PARAMS_1 = ['cat', 'dog'];
 const PARAMS_2 = ['lead', 'gold'];
 const PARAMS_3 = ['ruby', 'code'];

 // util
 const mkString = (params, res) => `When given params: ${params.join(' ')}
 main function should return ${res.join(' ')}`;

 // tests
 function runTest(func, params, expect) {
   const description = mkString(params, expect);
   const result = func.apply(params);
   return it(description, () => {
     return assert.equal(result, expect);
   })
 }

 runTest(main, PARAMS_1, EXPECTED_RESULT_1);
 runTest(main, PARAMS_2, EXPECTED_RESULT_2);
 runTest(main, PARAMS_3, EXPECTED_RESULT_3);


});


function main() {
 /* Write code here */
}

```
