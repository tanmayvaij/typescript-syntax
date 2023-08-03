// generics

function idTwo<T>(val: T): T {
  return val;
}

const add = <T, K>(a: T, b: K) => {
  console.log(typeof a);
  console.log(typeof b);
};

const res = add(4, "number");
