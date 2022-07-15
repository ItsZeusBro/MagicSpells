import {Finding} from "../Finding.js"
import {Sherlock} from "../../Sherlock.js"
import {CHAR, WORD, LINE} from "../Patterns/Patterns.js"
import * as util from "node:util"
import * as assert from "node:assert"
import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"

class Test{
	constructor(){
		this.nextLine()
		//this.nextWord()
	}

	nextLine(){
		var opStack = new Sherlock(MOBY_DICK, {'pageSize':50, 'pageOn': '\n'})
		.iter('inf', 'nextFinding', (match, cs, gs)=>{}, {'patterns':[LINE]}).opStack
		var bookStr=``
		opStack.forEach((element)=>{
			if(element['finding']){
				bookStr+=element['finding']
				console.log(element)
			}
			//console.log(util.inspect(element, false, null, true))
		})
		assert.equal(bookStr.length, MOBY_DICK.length)
		assert.equal(bookStr, MOBY_DICK)
		console.log("nextLine PASSED")

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