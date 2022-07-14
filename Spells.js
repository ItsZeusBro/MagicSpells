// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_STR_CASE} from "./Source/Test/Cases/Scientific.js"
import { FLOAT, INTEGER, CHAR} from "./Source/Spells/Spells.js"
import {FLOAT_STR_CASE} from "./Source/Test/Cases/Floating.js"
import {Matchic} from "./Source/Matchic.js"
import * as util from "node:util"

class Spell{
    constructor(string, tions){
        this.string=string
        Spell.prototype.nextLine= this.nextLine;
        Spell.prototype.nextParagraph= this.nextParagraph;
        Spell.prototype.nextSentance=this.nextSentance;
        Spell.prototype.nextInteger=this.nextInteger;
        Spell.prototype.nextFloat=this.nextFloat;
        Spell.prototype.nextScientific=this.nextScientific;
        Spell.prototype.nextOctet=this.nextOctet;
        Spell.prototype.nextHex=this.nextHex;
        Spell.prototype.nextCodeBlock=this.nextCodeBlock;
        Spell.prototype.nextFunction=this.nextFunction;
        Spell.prototype.nextHTML = this.nextHTML;
        Spell.prototype.up=this.up;
        Spell.prototype.iter=this.iter;
        Spell.prototype.init=this.init;
        Spell.prototype.matchic=this.matchic;

        this.opStack = [{'match':undefined, 'op': 'Spell', 'tions':tions, 'subStr':string}];
        this.ugly_itr=0;
        this.Matchic = new Matchic();

    }
    init(string, tions){
        this.string=string;
        this.opStack.push({'match':undefined, 'op': 'Spell', 'tions':tions, 'subStr':string});
        this.ugly_itr=0;
        return this;
    }
    subStr(string, match){
        //this function should remove everything up until the match but nothing else
        return string.replace(match, '')
    }
    _next(match, cb, fn, tions){
        var currentState;
        if(match){
            currentState={
                "match":match,
                "op": fn, 
                "tions": tions,
                "subStr": this.subStr(
                    this.opStack[this.opStack.length-1]['subStr'], 
                    match
                )
            }
            this.opStack.push(currentState)
            if(cb){cb(match, fn, currentState, this.opStack)}
            return true

        }else{
            currentState={
                "match": undefined,
                "op": fn, 
                "tions": tions,
                "subStr": this.opStack[this.opStack.length-1]['subStr']
            }
            this.opStack.push(currentState)
            if(cb){cb(match, fn, currentState, this.opStack)}
            return
        }
    }
    
    nextLine(cb, tions){
        //separated by one newline
        var match = new Matchic().nextLine(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same functino
        if (!this._next(match, cb, 'nextLine', tions)){this.ugly_itr=0;}
        return this;
    }

    nextParagraph(cb, tions){
        //separated by two newlines
        var match = new Matchic().nextParagraph(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextParagraph', tions)){this.ugly_itr=0;}
        return this;
    }

    nextSentance(cb, tions){
        //separated by a period
        var match = new Matchic().nextSentance(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextSentance', tions)){this.ugly_itr=0;}
        return this;
    }

    nextInteger(cb, tions){
        var match = new Matchic().nextInteger(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextInteger', tions)){this.ugly_itr=0;}
        return this;
    }

    nextFloat(cb, tions){
        var match = new Matchic().nextFloat(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextFloat', tions)){this.ugly_itr=0;}
        return this;
    }

    nextScientific(cb, tions){
        var match = new Matchic().nextScientific(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextScientific', tions)){this.ugly_itr=0;}
        return this;
    }

    nextOctet(cb, tions){
        var match = new Matchic().nextOctet(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextOctet', tions)){this.ugly_itr=0;}
        return this;
    }

    nextHex(cb, tions){
        var match = new Matchic().nextHex(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextHex', tions)){this.ugly_itr=0;}
        return this;
    }

    nextCodeBlock(type, cb, tions){
        var match = new Matchic().nextCodeBlock(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextCodeBlock', tions)){this.ugly_itr=0;}
        return this;
    }

    nextFunction(type, cb, tions){
        var match = new Matchic().nextFunction(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextFunction', tions)){this.ugly_itr=0;}
        return this;
    }

    nextChar(cb, tions){
        var match = new Matchic().nextChar(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextChar', tions)){this.ugly_itr=0;}
        return this;
    }

    nextHTML(cb, tions){
        var match = new Matchic().nextHTML(this.opStack[this.opStack.length-1]['subStr'])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb, 'nextHTML', tions)){this.ugly_itr=0;}
        return this;
    }

    nextMatchic(cb, tions){
        //takes an array of regex patterns and applies them ordinally, 
        //until it finds the first match, and pushes to the stack, then returns
        tions['spells'].forEach((spell)=>{
            var match = new Matchic().next(this.opStack[this.opStack.length-1]['subStr'], spell)
            //if there is no match there is no reason to iterate the same function
            if (!this._next(match, cb, 'nextMatchic', tions)){this.ugly_itr=0;}
        })
    }

    up(cb){
        this.results.pop()
        return this;
    }

    iter(n, fn, cb, tions){
        if(n=='inf'){
            this.ugly_itr=Infinity
        }else if(Number.isInteger(n)){
            this.ugly_itr=n;
        }else{
            throw Error("n must be of type int or string value 'inf'")
        }
        for(var i = 0; i<this.ugly_itr; i++){
            if(fn=='nextLine'){this.nextLine(cb)}
            else if(fn=='nextParagraph'){this.nextParagraph(cb, tions)}
            else if(fn=='nextSentance'){this.nextSentance(cb, tions)}
            else if(fn=='nextInteger'){this.nextInteger(cb, tions)}
            else if(fn=='nextFloat'){this.nextFloat(cb, tions)}
            else if(fn=='nextScientific'){this.nextScientific(cb, tions)}
            else if(fn=='nextOctet'){this.nextOctet(cb, tions)}
            else if(fn=='nextHex'){this.nextHex(cb, tions)}
            else if(fn=='nextCodeBlock'){this.nextCodeBlock(cb, tions)}
            else if(fn=='nextFunction'){this.nextFunction(cb, tions)}
            else if(fn=='nextHTML'){this.nextHTML(cb, tions)}
            else if(fn=='nextMatchic'){this.nextMatchic(cb, tions)}
        }
        return this;
    }
}


var opStack = new Spell(FLOAT_STR_CASE)
    .iter('inf', 'nextMatchic', (match, cs, gs)=>{}, {'spells':[CHAR]})
    .opStack
console.log(util.inspect(opStack, false, null, true))


