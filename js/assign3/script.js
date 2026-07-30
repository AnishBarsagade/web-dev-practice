const user = {
  name: 'Aarav',
  sayHi() {
    console.log(`Hello, ${this.name}`);
  },
};
const one = user.sayHi(user);
// Passing the method as a callback to setTimeout:
setTimeout(one, 3000);
// Output after 1 second: Hello, undefined ❌ ('this' was lost!)
