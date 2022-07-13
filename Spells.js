// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_STR_CASE} from "./Source/Test/Cases/Scientific.js"
import {FLOAT_STR_CASE} from "./Source/Test/Cases/Floating.js"
import {Matchic} from "./Source/Matchic.js"

class Spell{
    constructor(string){
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
        
        this.globalState = {"subStr": string};
        this.results=[];
        this._batch=[];
        this.currentState;
        this.ugly_itr=0;
        this._next(()=>{}, this.globalState);
        this.Matchic = new Matchic();

    }
    _next(cb, match){
        this.currentState={"match":match, "subStr": this.subStr(match)}
        if(cb){
            cb(match, this.currentState, this.globalState)
        }
        if(this.ugly_itr){
            this.batch()
        }else{
            this.results.push(this.currentState)
        }
    }
    batch(){
        this.ugly_itr--;
        this._batch.push(this.currentState)
        if (!this.ugly_itr){
            this.results.push({"match":this._batch, 'subStr':currentState['subStr']})
            this.ugly_itr=0;
            this._batch=[];
        }
    }

    subStr(){
        return this.currentState["subStr"].split(match).slice(1).join(' ')
    }
    nextLine(cb){
        //separated by one newline
        var match = new Matchic().nextLine(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines
        var match = new Matchic().nextParagraph(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextSentance(cb){
        //separated by a period
        var match = new Matchic().nextSentance(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextInteger(cb){
        var match = new Matchic().nextInteger(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextFloat(cb){
        var match = new Matchic().nextFloat(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextScientific(cb){
        var match = new Matchic().nextScientific(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextOctet(cb){
        var match = new Matchic().nextOctet(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextHex(cb){
        var match = new Matchic().nextHex(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextCodeBlock(cb, type){
        var match = new Matchic().nextCodeBlock(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }
    nextFunction(cb, type){
        var match = new Matchic().nextFunction(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextChar(cb){
        var match = new Matchic().nextChar(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    nextHTML(){
        var match = new Matchic().nextHTML(this.currentState["subStr"])
        this._next(cb, match)
        return this;
    }

    up(cb){
        this.results.pop()
        return this;
    }
    nextMatchicOf(spells=[], cb){
        //takes an array of regex patterns and applies them ordinally, 
        //until it finds the first match
        spells.forEach((spell)=>{
            var match = new Matchic.matchic(this.currentState["subStr"], spell)
            this._next(cb, match)
        })

    }

    iter(n, fn, cb){
        this.ugly_itr=n;
        for(var i = 0; i<n; i++){
            if(fn=='nextLine'){this.nextLine(cb)}
            else if(fn=='nextParagraph'){this.nextParagraph(cb)}
            else if(fn=='nextSentance'){this.nextSentance(cb)}
            else if(fn=='nextInteger'){this.nextInteger(cb)}
            else if(fn=='nextFloat'){this.nextFloat(cb)}
            else if(fn=='nextScientific'){this.nextScientific(cb)}
            else if(fn=='nextOctet'){this.nextOctet(cb)}
            else if(fn=='nextHex'){this.nextHex(cb)}
            else if(fn=='nextCodeBlock'){this.nextCodeBlock(cb)}
            else if(fn=='nextFunction'){this.nextFunction(cb)}
            else if(fn=='nextHTML'){this.nextHTML(cb)}
        }
        return this;
    }
}


var resultStack = new Spell(FLOAT_STR_CASE).iter(44, 'nextFloat', (match, cs, gs)=>{}).resultStack

console.log(resultStack)