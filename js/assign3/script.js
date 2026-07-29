function hello() {
  console.log(`Hello ${this.name}`);
}
hello.call({ name: 'Anish' });
