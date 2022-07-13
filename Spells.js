// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_ITER_CASES} from "./Source/Test/Cases/Scientific.js"
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
        this.globalState = {string: string}
        this.stateStack=[]
        
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
    _next(cb, currentState){
        cb(this.globalState, this.stateStack)
        this.stateStack.push(currentState)
    }

    nextLine(cb){
        //separated by one newline
        
        this._next(cb, currentState)
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines

        this._next(cb, currentState)
        return this;
    }

    nextSentance(cb){
        //separated by a period

        this._next(cb, currentState)
        return this;
    }

    nextInteger(cb){


        this._next(cb, currentState)
        return this;
    }

    nextFloat(cb){

        this._next(cb, currentState)
        return this;
    }

    nextScientific(cb){

        this._next(cb, currentState)
        return this;
    }

    nextOctet(cb){


        this._next(cb, currentState)
        return this;
    }

    nextHex(cb){

        this._next(cb, currentState)
        return this;
    }

    nextBlock(cb){


        this._next(cb, currentState)
        return this;
    }

    nextChar(cb){
        return this;
    }

    nextHTMLTag(){

    }

    up(cb){
        //this just pops the currentState off of the stack 
        //(it basically erases the previous nextSomething() 
        //but allows you to keep a global variable)
        this.stateStack.pop()
        return this;
    }


}

new Spell(SCIENTIFIC_ITER_CASES).nextScientific()