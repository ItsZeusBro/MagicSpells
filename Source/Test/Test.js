import {Finding} from "../Finding.js"
import {Sherlock} from "../../Sherlock.js"
import {CHAR, WORD, LINE} from "../Patterns/Patterns.js"
import * as util from "node:util"
import * as assert from "node:assert"
import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"
import {THE_ILIAD} from "./Cases/Books/IndividualBooks/TheIliad.js"
class Test{
	constructor(){
		//this._pagination()
		this._next()
		//this.nextLine()
		//this.nextWord()
	}

	_pagination(){
		var pageQueue = new Sherlock(MOBY_DICK, {'pageSize':50, 'delimiter': '\n'}).pageQueue;
		var pageStr=""
		pageQueue.forEach((page)=>{
			page.forEach((string)=>{
				pageStr+=string;
			});
		})

		assert.equal(pageStr.length, MOBY_DICK.length)
		assert.equal(pageStr, MOBY_DICK)
		console.log("_pagination PASSED")

	}

	_next(){
		var sherlock = new Sherlock(THE_ILIAD, {'pageSize':50, 'delimiter': '\n'})
		var pageStr="";
		while(true){
			var next=sherlock._next(/(.*\n)|(.*\r\n)|(.*$)/);
			if(next){
				pageStr+=next
			}else{
				
				break;
			}
		}
		//console.log(pageStr.length, MOBY_DICK.length)
		assert.equal(pageStr.length, THE_ILIAD.length)
		//assert.equal(pageStr==THE_ILIAD, true)
		console.log("_next() PASSED")
		
	}

	nextLine(){
		console.log(new Sherlock(MOBY_DICK, {'pageSize':50, 'delimiter': '\n'}).nextLine())
		
		//.iter(50, 'nextLine', (match, cs, gs)=>{}, {'patterns':[LINE]}).opStack
		//var bookStr=``
		// opStack.forEach((element)=>{
		// 	if(element['finding']){
		// 		bookStr+=element['finding']
		// 		console.log(element)
		// 	}
		// 	//console.log(util.inspect(element, false, null, true))
		// })
		//console.log(bookStr)
		// assert.equal(bookStr.length, MOBY_DICK.length)
		// assert.equal(bookStr, MOBY_DICK)
		// console.log("nextLine PASSED")

	}

	// nextWord(){
	// 	var opStack = new Sherlock(MOBY_DICK, {'pageSize':50, 'pageOn': '\n'})
	// 	.iter('inf', 'nextFinding', (match, cs, gs)=>{}, {'patterns':[WORD]}).opStack
	// 	var bookStr=``
	// 	opStack.forEach((element)=>{
	// 		if(element['finding']){
	// 			bookStr+=element['finding']
	// 			console.log(element)
	// 		}
	// 		//console.log(util.inspect(element, false, null, true))
	// 	})
	// 	assert.equal(bookStr.length, MOBY_DICK.length)
	// 	assert.equal(bookStr, MOBY_DICK)
	// 	console.log("nextLine PASSED")

	// }
}

new Test()
// var regex=/.*((\r\n)|(\n)|(\r\n$))/ //((\r\n)|(\n)|(\r\n$))/
// console.log('The Project Gutenberg eBook of Moby-Dick; or The Whale, by Herman MelvilleThis eBook is for the use of anyone anywhere in the United States andmost other parts of the world at no cost and with almost no restrictionswhatsoever. You may copy it, give it away or re-use it under the termsof the Project Gutenberg License included with this eBook or online atwww.gutenberg.org. If you are not located in the United States, youwill have to check the laws of the country where you are located beforeusing this eBook.Title: Moby-Dick; or The WhaleAuthor: Herman MelvilleRelease Date: June, 2001 [eBook #2701][Most recently updated: August 18, 2021]Language: EnglishCharacter set encoding: UTF-8Produced by: Daniel Lazarus, Jonesey, and David Widger*** START OF THE PROJECT GUTENBERG EBOOK MOBY-DICK; OR THE WHALE ***\n'.match(regex));
