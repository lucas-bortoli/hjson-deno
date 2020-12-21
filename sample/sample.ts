import * as Hjson from "../mod.ts"

const text = await Deno.readTextFile("test.hjson");

// parse either JSON or Hjson
let data = Hjson.parse(text);
console.log(data.hello);
console.log();

// convert to JSON
console.log("--- JSON output:");
console.log(JSON.stringify(data, null, 2));
console.log();

// convert to Hjson
console.log("\n--- Hjson output:");
console.log(Hjson.stringify(data));

// parse, keep whitespace and comments
data = Hjson.parse(text, { keepWsc: true });

// modify like you normally would
data.foo= "text";

console.log("\n--- Hjson output with comments:");
console.log(Hjson.stringify(data, { keepWsc: true }));
