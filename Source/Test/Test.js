import {Matchic} from "../Matchic.js"
import { Comet } from "../../Comet/Comet.js"
import {IS_SCIENTIFIC_CASES, NOT_SCIENTIFIC_CASES} from "./Cases/Scientific.js"
import { IS_SCIENTIFIC, IS_INTEGER, IS_FLOAT, IS_BINARY, IS_ALPHA_STRING, IS_ALPHA_NUMERIC_STRING, IS_SENTANCE } from "../Spells/Spells.js";

import { Verification } from "./Verification.js"
import * as assert from "node:assert"

export class Test extends Comet{
    constructor(){
        super("MatchicSpells/", "TestSpells");
        this.comet("verifying")
        this.Matchic = new Matchic()
        new Verification(IS_SCIENTIFIC_CASES, NOT_SCIENTIFIC_CASES)
        this.isScientific(IS_SCIENTIFIC_CASES);
        this.notScientific(NOT_SCIENTIFIC_CASES)
        // this.testScientific(NOT_SCIENTIFIC_CASES, IS_SCIENTIFIC);
    }
    
    isScientific(cases){
        for (const [key, value] of Object.entries(cases)) {
            assert.equal(this.Matchic.isScientific(value), true)
        }
    }

    notScientific(cases){
        for (const [key, value] of Object.entries(cases)) {
            assert.notEqual(this.Matchic.isScientific(value), true)
        }
    }

    nextScientific(){

    }

    isInteger(cases){

    }

    notInteger(cases){

    }

    isFloat(cases){

    }

    notFloat(cases){

    }

   
}

new Test()