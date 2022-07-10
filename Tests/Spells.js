import {Matchic} from "../../Matchic/Matchic.js"
import { Comet } from "../../Comet/Comet.js"
import {SCIENTIFIC} from "./Cases.js"
import * as assert from "node:assert"
export class Spells extends Comet{
    
    constructor(){
        super();
        this.testScientific();
    }
    
    testScientific(){
        for (const [key, value] of Object.entries(SCIENTIFIC)) {
            this.comet("Testing ", key, value);
            assert.equal(TEST_CASES[key].match(MAGIC_SPELLS.SCIENTIFIC)[0], value);
            this.comet("Result: ", TEST_CASES[key].match(MAGIC_SPELLS.SCIENTIFIC)[0], value, "\n");
        }
    }
}