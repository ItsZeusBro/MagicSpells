import {Matchic} from "../Matchic.js"
import { Comet } from "../../Comet/Comet.js"
import {SCIENTIFIC_CASES, NOT_SCIENTIFIC_CASES, SCIENTIFIC_ITER_CASES, HARD_SCIENTIFIC_ITER_CASES} from "./Cases/Scientific.js"
import { FLOATING_CASES, NOT_FLOATING_CASES } from "./Cases/Floating.js"
import { Verification } from "./Verification.js"
import * as assert from "node:assert"

export class Test extends Comet{
    constructor(){
        super("MatchicSpells/", "TestSpells");
        this.Matchic = new Matchic()
        this.isScientific(SCIENTIFIC_CASES);
        this.notScientific(NOT_SCIENTIFIC_CASES);
        this.matchScientifics(SCIENTIFIC_ITER_CASES);
        this.matchScientifics(HARD_SCIENTIFIC_ITER_CASES);
        this.register()
    }
    
    isFloat(cases){
        new Verification().key_val_match(FLOATING_CASES)
    }

    notFloat(cases){
        new Verification(NOT_FLOATING_CASES)

    }

    isScientific(cases){
        new Verification(SCIENTIFIC_CASES)
        this.comet("verifying scientific cases")
        for (const [key, value] of Object.entries(cases)) {
            assert.equal(this.Matchic.isScientific(value), true)
        }
    }

    notScientific(cases){
        new Verification(NOT_SCIENTIFIC_CASES)
        this.comet("verifying scientific cases")
        for (const [key, value] of Object.entries(cases)) {
            assert.notEqual(this.Matchic.isScientific(value), true)
        }
    }

    matchScientifics(cases){
        //there are 6 cases in each iter test case for both regular strings containing scientific numbers and hard strings
        for (const [key, value] of Object.entries(cases)) {
            this.comet(key, value)
            var matches = this.Matchic.matchScientifics(value)
            
            var i=6;
            while(i!=0){
                try{
                    assert.equal(this.Matchic.isScientific(matches.pop(0)), true)
                    i-=1;
                }catch{
                    this.comet("error", matches.pop(0), "is not a scientific number")
                }

            }
        }
    }

    iterScientific(){

    }

    isInteger(cases){

    }

    notInteger(cases){

    }



   
}

new Test()