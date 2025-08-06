function myName(name: string): string {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

myName("server"); // This will cause a type error since 10 is not a string

const obj = {
  name: "server",
  age: 10, // This will cause a type error since age should be a string
};

obj.name=server; // This is fine
obj.age = 10; // This will cause a type error since age should be a string