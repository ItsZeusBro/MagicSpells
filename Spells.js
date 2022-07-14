// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_STR_CASE} from "./Source/Test/Cases/Scientific.js"
import { FLOAT } from "./Source/Spells/Spells.js"
import {FLOAT_STR_CASE} from "./Source/Test/Cases/Floating.js"
import {Matchic} from "./Source/Matchic.js"

class Spell{
    constructor(string){
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
        Spell.prototype.matchic=this.matchic;

        this.gs = {"string": string, 'opStack':[{'match':undefined,'subStr':string}]};
        this.ugly_itr=0;
        this.Matchic = new Matchic();

    }
    subStr(string, match){
        return string.split(match).slice(1).join('')
    }
    _next(match, cb){
        var currentState;
        if(match){
            currentState={
                "match":match, 
                "subStr": this.subStr(
                    this.gs['opStack'][this.gs.length-1]['subStr'], 
                    match
                )
            }
            this.gs['opStack'].push(currentState)
            if(cb){cb(match, currentState, this.gs)}
            return true

        }else{
            
            currentState={
                "match": undefined,
                "subStr": this.gs['opStack'][this.gs.length-1]['subStr']
            }
            this.gs['opStack'].push(currentState)
            if(cb){cb(match, currentState, this.gs)}
            return
        }
    }

    nextLine(cb){
        //separated by one newline
        var match = new Matchic().nextLine(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same functino
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines
        var match = new Matchic().nextParagraph(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextSentance(cb){
        //separated by a period
        var match = new Matchic().nextSentance(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextInteger(cb){
        var match = new Matchic().nextInteger(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextFloat(cb){
        var match = new Matchic().nextFloat(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextScientific(cb){
        var match = new Matchic().nextScientific(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextOctet(cb){
        var match = new Matchic().nextOctet(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextHex(cb){
        var match = new Matchic().nextHex(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextCodeBlock(type, cb){
        var match = new Matchic().nextCodeBlock(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextFunction(type, cb){
        var match = new Matchic().nextFunction(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextChar(cb){
        var match = new Matchic().nextChar(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextHTML(){
        var match = new Matchic().nextHTML(this.currentState["subStr"])
        //if there is no match there is no reason to iterate the same function
        if (!this._next(match, cb)){this.ugly_itr=0;}
        return this;
    }

    nextMatchic(spells=[], cb){
        //takes an array of regex patterns and applies them ordinally, 
        //until it finds the first match, and pushes to the stack, then returns
        spells.forEach((spell)=>{
            var match = new Matchic().next(this.currentState["subStr"], spell)
            //if there is no match there is no reason to iterate the same function
            if (!this._next(match, cb)){this.ugly_itr=0;}
        })
    }

    up(cb){
        this.results.pop()
        return this;
    }

    iter(n, fn, cb, options){
        this.ugly_itr=n;
        for(var i = 0; i<this.ugly_itr; i++){
            if(fn=='nextLine'){this.nextLine(cb)}
            else if(fn=='nextParagraph'){this.nextParagraph(cb)}
            else if(fn=='nextSentance'){this.nextSentance(cb)}
            else if(fn=='nextInteger'){this.nextInteger(cb)}
            else if(fn=='nextFloat'){this.nextFloat(cb)}
            else if(fn=='nextScientific'){this.nextScientific(cb)}
            else if(fn=='nextOctet'){this.nextOctet(cb)}
            else if(fn=='nextHex'){this.nextHex(cb)}
            else if(fn=='nextCodeBlock'){this.nextCodeBlock(options['type'], cb)}
            else if(fn=='nextFunction'){this.nextFunction(options['type'], cb)}
            else if(fn=='nextHTML'){this.nextHTML(cb)}
            else if(fn=='nextMatchic'){this.nextMatchic(options['spells'], cb)}
        }
        return this;
    }
}


var results = new Spell(FLOAT_STR_CASE).iter(50, 'nextMatchic', (match, cs, gs)=>{}, {'spells':[FLOAT]}).results
console.log(results[0]['match'])


