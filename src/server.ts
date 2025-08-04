function myName(name: string): string {
  console.log(`Hello, ${name}!`);
  return `Hello, ${name}!`;
}

myName("server"); // This will cause a type error since 10 is not a string
