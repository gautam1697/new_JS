 //The program below shows how generator function is decalred using function* after the function.
 function* generator(i) {
  yield i;
  yield i + 10;
   yield i + 10+10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
console.log(gen.next().value);
//______________________________________________________________________________________
//The code shown below shows and example of a generator funtion with an infinte while loop where the condition can never be false and can be iterated infinte times.
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value);//4
//_________________________________________________________________________________________________
//Passing arguments in generator function
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
  console.log(4,yield)
}

const gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
gen.next('ohmymy');
//________________________________________________________
//Return statement in a generator
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
// console.log(yieldAndReturn().next())//{ value: 'Y', done: false }
// console.log(yieldAndReturn().next())//{ value: 'Y', done: false }
// console.log(yieldAndReturn().next())//{ value: 'Y', done: false }
//______________________________________________________
//The below code shows that generator function can also be a property of an object

const someObj = {
  *generator () {
    yield 'a';
    yield 'b';
    yield 'c';
  }
}

const gen = someObj.generator()

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }

//___________________________________________________________________________
//We cannot create generator function object using new keyword, but we can pass the generator function and it can be defined by an expression.
const foo = function* () {
  yield 10;
  yield 20;
};

const bar = foo();
console.log(bar.next()); 
console.log(bar.next()); 

