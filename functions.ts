function print(text:string):void {
	console.log(text);
}

let lessThen = function(x:number, y:number):boolean {
	return x < y;
}

function inc0(x:number, y?:number):number {
	let i = y || 0;
	return x + i;
}

function inc1(x:number, y:number = 1):number {
	return x + y;
}

function countArray(n:number[]):number {
	return n.reduce((x, y) => x + y, 0);
}

function counNumbers(...n:number[]):number {
	return n.reduce((x, y) => x + y, 0);
}

print("functions!");
console.log(lessThen(1, 2));
console.log(inc0(4, 1));
console.log(inc0(5));
console.log(inc1(4));
console.log(countArray([1, 2, 3]));
console.log(counNumbers(1, 2, 3));

// arrow functions
let letters = ["a", "b", "c"];

let aLetter:string[];
aLetter = letters.filter(function(l) {
	return l === "a";
});
console.log(aLetter);

aLetter = letters.filter(l => l === "a");
console.log(aLetter);

let moreThen:(x:number, y:number) => boolean;
moreThen = (x, y) => x > y;
console.log(moreThen(1, 2));

let call = (name:string):void => console.log(`Calling ${name}...`);
console.log(call("Guilherme"));

// using functions
let x = 1;
let y = 2;
console.log(`Is ${x} less then ${y}? ${lessThen(x, y) ? "Yes" : "No"}`);
