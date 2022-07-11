import {Matchic} from "../Matchic.js"
import { Comet } from "../../Comet/Comet.js"
import {IS_SCIENTIFIC_CASES, NOT_SCIENTIFIC_CASES} from "./Cases/Scientific.js"
import { IS_SCIENTIFIC, IS_INTEGER, IS_FLOAT, IS_BINARY, IS_ALPHA_STRING, IS_ALPHA_NUMERIC_STRING, IS_SENTANCE } from "../Spells/Spells.js";

import { Verification } from "./Verification.js"
import * as assert from "node:assert"

export class Spells extends Comet{
    constructor(){
        super("MatchicSpells/", "TestSpells");
        this.comet("verifying")
        new Verification(IS_SCIENTIFIC_CASES, NOT_SCIENTIFIC_CASES)
        // this.testScientific(IS_SCIENTIFIC_CASES, IS_SCIENTIFIC);
        // this.testScientific(NOT_SCIENTIFIC_CASES, IS_SCIENTIFIC);
        // this.Matchic = new Matchic()
    }
    
    testScientific(cases, pattern){
        this.is(cases, pattern)
        this.no(cases, pattern)
        this.has(cases, pattern)
    }

    is(cases, pattern){
        for (const [key, string] of Object.entries(cases)) {
            this.Matchic.is(string, pattern)
        }
    }

    no(cases, pattern){


    }

    has(cases, pattern){


    }
}

new Spells()