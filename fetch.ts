const jsonResponse = await fetch("https://api.github.com/users/liuzl");
const jsonData = await jsonResponse.json();
console.log(jsonData);

const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();
console.log(textData);