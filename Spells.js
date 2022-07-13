// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_STR_CASE} from "./Source/Test/Cases/Scientific.js"
import {Matchic} from "./Source/Matchic.js"

class Spell{
    constructor(string){
        //you can access the global state at anytime, but it won't be on the stack so that you can
        //use the variables predicitably. You can have local variables in each iterative state
        //that you can reaccess when it is popped off the stack.

        //when you iterate over a string, it is either qualititative or quantititative
        //When you change the quality of the next step, you should be able to get something
        //specific and go back to the previous quality (like a look ahead) step a state variable
        //from the lookahead
        this.globalState = {"subStr": string}
        this.stateStack=[]
        this._next(()=>{}, this.globalState)
        this.Matchic = new Matchic();
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

    }
    _next(cb, currentState){
        cb(currentState, this.globalState)
        this.stateStack.push(currentState)
        console.log("STATE STACK====>", this.stateStack)
    }

    nextLine(cb){
        //separated by one newline
        this._next(cb, {"subStr": new Matchic().nextLine(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines

        this._next(cb, {"subStr": new Matchic().nextParagraph(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextSentance(cb){
        //separated by a period
        this._next(cb, {"subStr": new Matchic().nextSentance(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextInteger(cb){
        this._next(cb, {"subStr": new Matchic().nextInteger(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextFloat(cb){

        this._next(cb, {"subStr": new Matchic().nextFloat(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextScientific(cb){

        this._next(cb, {"subStr": new Matchic().nextScientific(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextOctet(cb){


        this._next(cb, {"subStr": new Matchic().nextOctet(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextHex(cb){

        this._next(cb, {"subStr": new Matchic().nextHex(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    nextCodeBlock(cb, type){
        this._next(cb, {"subStr": new Matchic().nextCodeBlock(this.stateStack[this.stateStack.length-1]["subStr"], type)})
        return this;
    }
    nextFunction(cb, type){
        this._next(cb, {"subStr": new Matchic().nextFunction(this.stateStack[this.stateStack.length-1]["subStr"], type)})
    }

    nextChar(cb){
        this._next(cb, {"subStr": new Matchic().nextChar(this.stateStack[this.stateStack.length-1]["subStr"])})

        return this;
    }

    nextHTML(){
        this._next(cb, {"subStr": new Matchic().nextHTML(this.stateStack[this.stateStack.length-1]["subStr"])})
        return this;
    }

    up(cb){
        //this just pops the currentState off of the stack 
        //(it basically erases the previous nextSomething() 
        //but allows you to keep a global variable)
        this.stateStack.pop()
        return this;
    }


}

new Spell(SCIENTIFIC_STR_CASE).nextScientific((cs, gs)=>{console.log(cs['subStr'])}).nextScientific((cs, gs)=>{console.log(cs['subStr'])})