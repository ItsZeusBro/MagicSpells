// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_ITER_CASES} from "./Source/Test/Cases/Scientific.js"
import {Matchic} from "./Source/Matchic.js"

class Spell{
    constructor(string){
        this.state={}
        this.string=string;
        this.location=0;
        this.Matchic = new Matchic()
        
        Spell.prototype.nextLine= this.nextLine;
        Spell.prototype.nextParagraph= this.nextParagraph;
        Spell.prototype.nextSentance=this.nextSentance;
        Spell.prototype.nextInteger=this.nextInteger;
        Spell.prototype.nextFloat=this.nextFloat;
        Spell.prototype.nextScientific=this.nextScientific;
        Spell.prototype.nextOctet=this.nextOctet;
        Spell.prototype.nextHex=this.nextHex;
        Spell.prototype.nextBlock=this.nextBlock;
        Spell.prototype.up=this.up;

    }

    nextLine(cb){
        //separated by one newline
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines
        return this;
    }

    nextSentance(cb){
        //separated by a period
        return this;
    }

    nextInteger(cb){
        return this;
    }

    nextFloat(cb){
        return this;
    }

    nextScientific(cb){
        return this;
    }

    nextOctet(cb){
        return this;
    }

    nextHex(cb){
        return this;
    }

    nextBlock(cb){
        return this;
    }

    up(cb){
        //
        return this;
    }
    nextChar(cb){
        return this;
    }

}

new Spell(SCIENTIFIC_ITER_CASES).nextScientific()