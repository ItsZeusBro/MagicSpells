import {Matchic} from "../Matchic.js"
import {Spell} from "../../Spell.js"
import * as util from "node:util"
import * as assert from "node:assert"
import {BOOKS} from "./Cases/Books/Books.js"

class Test{
	constructor(){
		
		this.Books()
	}

	Books(){
		var opStack = new Spell(BOOKS, {'pageSize':50, 'pageOn': '\n'})
		.iter('inf', 'nextLine', (match, cs, gs)=>{}).opStack
		var bookStr=``
		opStack.forEach((element)=>{
			if(element['match']){
				bookStr+=element['match']
			}
			//console.log(util.inspect(element, false, null, true))
		})
		assert.equal(bookStr.length, BOOKS.length)
		assert.equal(bookStr, BOOKS)
		console.log("PASSED")

	}
}

new Test()