let readTime = new WeakMap()

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

readTime.set(messages[0], new Date)

console.log(readTime)