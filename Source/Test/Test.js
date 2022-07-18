import {Finding} from "../Finding.js"
import {Sherlock, Pages} from "../../Sherlock.js"
import {CHAR, WORD, LINE} from "../Patterns/Patterns.js"
import * as util from "node:util"
import * as assert from "node:assert"
// import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"
import {THE_ILIAD} from "./Cases/Books/IndividualBooks/TheIliad.js"
import {THE_ODYSSEY} from "./Cases/Books/IndividualBooks/TheOdyssey.js"

import {HALF_BOOKS} from "./Cases/Books/HalfBooks.js"
//import {BOOKS} from "./Cases/Books/Books.js"

class Test{
	constructor(){
		//this._pagination()
		this.pages()
		//this.nextLine()
		//this.nextWord()
	}

	pages(){
		var pages = new Pages(THE_ILIAD, {'pageSize':100, 'delimiter': '\n'})//, 'pageLookAhead':true});
		//console.log(util.inspect(pages.pages, {showHidden: true, depth: null, colors: true}))
		//assert.equal(THE_ILIAD, pages.aggregate())
		// pages.push(THE_ODYSSEY);
		// console.log(pages.pages)
		// pages.pop()
		// console.log(pages.pages)
	}

	// _pagination(){
	// 	var pageQueue = new Sherlock(HALF_BOOKS, {'pageSize':4000, 'delimiter': '\n'}).pageQueue;
	// 	var pageStr=""
	// 	pageQueue.forEach((page)=>{
	// 		page.forEach((string)=>{
	// 			pageStr+=string;
	// 		});
	// 	})
	// 	console.log(pageStr.length, HALF_BOOKS.length)
	// 	assert.equal(pageStr, HALF_BOOKS)
	// }

	// _next(){
	// 	var sherlock = new Sherlock(HALF_BOOKS, {'pageSize':2, 'delimiter': 'A', 'pageLookAhead':true})
	// 	console.log(sherlock.pageQueue[0])

	// 	var next=sherlock._next(/====/);
	// 	console.log(next);
	// 	console.log(sherlock.pageQueue[0]);
		
	// 	next = sherlock._next(/>/);
	// 	console.log(next);
	// 	console.log(sherlock.pageQueue[0]);	

	// 	next = sherlock._next(/====/);
	// 	console.log(next);
	// 	console.log(sherlock.pageQueue[0]);	

	// }

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
