import {Matchic} from "../Matchic.js"
import {Spell} from "../../Spell.js"
import * as util from "node:util"
import * as assert from "node:assert"
import {SHERLOCKHOLMES} from "./Cases/SherlockHolmes.js"

class Test{
	constructor(){
		
		this.Sherlock()
	}

	Sherlock(){
		var opStack = new Spell(SHERLOCKHOLMES, {'pageSize':50, 'pageOn': '\n'})
		.iter('inf', 'nextLine', (match, cs, gs)=>{}).opStack
		var sherlockBook=``
		opStack.forEach((element)=>{
			if(element['match']){
				sherlockBook+=element['match']
			}
			//console.log(util.inspect(element, false, null, true))
		})
		assert.equal(sherlockBook.length, SHERLOCKHOLMES.length)
		assert.equal(sherlockBook, SHERLOCKHOLMES)

	}
}

new Test()