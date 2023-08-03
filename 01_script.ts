// typescript basics

// string
const greeting: string = "Hello World";

// number
const myNum: number = 5;

// boolean
const isLoggedIn: boolean = false;

const obj = {
  greeting,
  myNum,
  isLoggedIn,
};

console.log(JSON.stringify(obj, null, 1));
