import {Finding} from "../Finding.js"
import {Sherlock, Book} from "../../Sherlock.js"
import {CHAR, WORD, LINE} from "../Patterns/Patterns.js"
import * as util from "node:util"
import * as assert from "node:assert"
// import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"
import {THE_ILIAD} from "./Cases/Books/IndividualBooks/TheIliad.js"
import {THE_ODYSSEY} from "./Cases/Books/IndividualBooks/TheOdyssey.js"

import {HALF_BOOKS} from "./Cases/Books/HalfBooks.js"
//import {BOOKS} from "./Cases/Books/Books.js"


class TestBook{
	constructor(){
		//this.printBook()
		//this.stringify()
		//this.pushStringToBook()

		// this.removePagesNtoM()

	}
	printBook(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		_Book.printBook(_Book)
	}

	stringify(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		console.log(_Book.book['pageCount'])
		assert.equal(THE_ILIAD, _Book.stringify(_Book));
		
	}

	pushStringToBook(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		_Book.pushStringToBook(_Book, THE_ODYSSEY, {'lineCount':100, 'anchor': '\n'});
		assert.equal(THE_ILIAD+THE_ODYSSEY, _Book.stringify(_Book));
	}

	removePagesNtoM(){
		// var _Book = new Pages(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		// var count = _Book.lineCount()
		// _Book.removePagesNtoM(_Book.pages, 10, 20)
		// assert.equal(count-11, _Book.lineCount())
	}

	pagesCount(){
		// var _Book = new Pages(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		// //assert.equal(THE_ILIAD.length/100, _Book.pagesCount())
	}

	lineCount(){
		//create a page and pass it
	}

	popNPages(){

	}

	pushPage(){

	}

	popPage(){

	}

	removePageN(){

	}

	nextPage(){

	}

	matchOnNLines(n){

	}

	pushLine(){

	}

	popLine(){

	}

	nextLine(){

	}

	emptyPage(){

	}

	emptyPages(){

	}

	paginate(){

	}

	_pageLookAheadFindandSweep(){

	}

	_findAndSweep(){

	}

	_sweep(){

	}

	_next(){
		
	}



}


// class Sherlock{
// 	constructor(){
// 		//this._pagination()
// 		//this.nextLine()
// 		//this.nextWord()
// 	}

	

// 	// _pagination(){
// 	// 	var pageQueue = new Sherlock(HALF_BOOKS, {'pageSize':4000, 'anchor': '\n'}).pageQueue;
// 	// 	var pageStr=""
// 	// 	pageQueue.forEach((page)=>{
// 	// 		page.forEach((string)=>{
// 	// 			pageStr+=string;
// 	// 		});
// 	// 	})
// 	// 	console.log(pageStr.length, HALF_BOOKS.length)
// 	// 	assert.equal(pageStr, HALF_BOOKS)
// 	// }

// 	// _next(){
// 	// 	var sherlock = new Sherlock(HALF_BOOKS, {'pageSize':2, 'anchor': 'A', 'pageLookAhead':true})
// 	// 	console.log(sherlock.pageQueue[0])

// 	// 	var next=sherlock._next(/====/);
// 	// 	console.log(next);
// 	// 	console.log(sherlock.pageQueue[0]);
		
// 	// 	next = sherlock._next(/>/);
// 	// 	console.log(next);
// 	// 	console.log(sherlock.pageQueue[0]);	

// 	// 	next = sherlock._next(/====/);
// 	// 	console.log(next);
// 	// 	console.log(sherlock.pageQueue[0]);	

// 	// }

// 	// nextLine(){
// 	// 	console.log(new Sherlock(MOBY_DICK, {'pageSize':50, 'anchor': '\n'}).nextLine())
		
// 		//.iter(50, 'nextLine', (match, cs, gs)=>{}, {'patterns':[LINE]}).opStack
// 		//var bookStr=``
// 		// opStack.forEach((element)=>{
// 		// 	if(element['finding']){
// 		// 		bookStr+=element['finding']
// 		// 		console.log(element)
// 		// 	}
// 		// 	//console.log(util.inspect(element, false, null, true))
// 		// })
// 		//console.log(bookStr)
// 		// assert.equal(bookStr.length, MOBY_DICK.length)
// 		// assert.equal(bookStr, MOBY_DICK)
// 		// console.log("nextLine PASSED")

// 	}

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
//}

new TestBook()
// var regex=/.*((\r\n)|(\n)|(\r\n$))/ //((\r\n)|(\n)|(\r\n$))/
// console.log('The Project Gutenberg eBook of Moby-Dick; or The Whale, by Herman MelvilleThis eBook is for the use of anyone anywhere in the United States andmost other parts of the world at no cost and with almost no restrictionswhatsoever. You may copy it, give it away or re-use it under the termsof the Project Gutenberg License included with this eBook or online atwww.gutenberg.org. If you are not located in the United States, youwill have to check the laws of the country where you are located beforeusing this eBook.Title: Moby-Dick; or The WhaleAuthor: Herman MelvilleRelease Date: June, 2001 [eBook #2701][Most recently updated: August 18, 2021]Language: EnglishCharacter set encoding: UTF-8Produced by: Daniel Lazarus, Jonesey, and David Widger*** START OF THE PROJECT GUTENBERG EBOOK MOBY-DICK; OR THE WHALE ***\n'.match(regex));
