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
		this.stringify()
		this.pushStringToBook()
		this.removePagesNtoM()

	}
	printBook(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		_Book.printBook(_Book)
	}

	stringify(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		assert.equal(THE_ILIAD, _Book.stringify(_Book));
		
	}

	pushStringToBook(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		_Book.pushStringToBook(THE_ODYSSEY, _Book, {'lineCount':100, 'anchor': '\n'});
		assert.equal(THE_ILIAD+THE_ODYSSEY, _Book.stringify(_Book));
	}

	removePagesNtoM(){
		var _Book = new Book(THE_ILIAD, {'lineCount':100, 'anchor': '\n'})//, 'pageLookAhead':true});
		var pageCount = _Book.pageCount(_Book)
		_Book.removePagesNtoM(_Book, 10, 20)
		assert.equal(pageCount-11, _Book.pageCount(_Book))
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


new TestBook()
// var regex=/.*((\r\n)|(\n)|(\r\n$))/ //((\r\n)|(\n)|(\r\n$))/
// console.log('The Project Gutenberg eBook of Moby-Dick; or The Whale, by Herman MelvilleThis eBook is for the use of anyone anywhere in the United States andmost other parts of the world at no cost and with almost no restrictionswhatsoever. You may copy it, give it away or re-use it under the termsof the Project Gutenberg License included with this eBook or online atwww.gutenberg.org. If you are not located in the United States, youwill have to check the laws of the country where you are located beforeusing this eBook.Title: Moby-Dick; or The WhaleAuthor: Herman MelvilleRelease Date: June, 2001 [eBook #2701][Most recently updated: August 18, 2021]Language: EnglishCharacter set encoding: UTF-8Produced by: Daniel Lazarus, Jonesey, and David Widger*** START OF THE PROJECT GUTENBERG EBOOK MOBY-DICK; OR THE WHALE ***\n'.match(regex));
