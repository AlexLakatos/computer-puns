#!/usr/bin/env node
const simpleArgParser = require("simple-arg-parser");
const punsDev = require("./index.js");

const args = simpleArgParser(process.argv, [
	{
		name: "all",
		shorthand: "a",
		description: "return all puns"
	}, {
		name: "random",
		description: "return a random pun"
	}, {
		name: "get",
		shorthand: "g",
		description: "return a pun by index"
	}
], {
	description: require("./package.json").description,
	defaultHelp: true
});

function logPun(pun) {
	console.log(pun.pun);
	console.log(pun.punchline);
}


if (args.hasOwnProperty("all")) {
	const puns = punsDev.all();
	
	puns.forEach((pun, index) => {
		logPun(pun);
		
		if (puns.length !== (index + 1)) console.log();
	});
} else if (args.hasOwnProperty("random")) {
	logPun(punsDev.random());
} else if (args.hasOwnProperty("get")) {
	try {
		logPun(punsDev.get(args.get.value));
	} catch (e) {
		console.log(e);
	}
}
