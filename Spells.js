// import {Comet} from "comet/Comet.js";

// var c = new Comet('./comfig.json')
// c.comet('some log')
import {SCIENTIFIC_STR_CASE} from "./Source/Test/Cases/Scientific.js"
import {FLOAT_STR_CASE} from "./Source/Test/Cases/Floating.js"
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
        this.globalState = {"subStr": string};
        this.stateStack=[];
        this._next(()=>{}, this.globalState);
        this.Matchic = new Matchic();
        this.iter;
        this.batch=[];
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
        cb(currentState['match'], currentState, this.globalState)
        if(this.iter){
            this.iter--;
            this.batch.push(currentState)
            if (this.iter){
                this.stateStack.push({"batch":this.batch, 'subStr':currentState['subStr']})
                console.log("STATE STACK====>", this.stateStack)
            }
            this.batch=[];
            this.iter=0;
        }else{
            this.stateStack.push(currentState)
            console.log("STATE STACK====>", this.stateStack)
        }

    }

    nextLine(cb){
        //separated by one newline
        var match = new Matchic().nextLine(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextParagraph(cb){
        //separated by two newlines
        var match = new Matchic().nextParagraph(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextSentance(cb){
        //separated by a period
        var match = new Matchic().nextSentance(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextInteger(cb){
        var match = new Matchic().nextInteger(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextFloat(cb){
        var match = new Matchic().nextFloat(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextScientific(cb){
        var match = new Matchic().nextScientific(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextOctet(cb){
        var match = new Matchic().nextOctet(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextHex(cb){
        var match = new Matchic().nextHex(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextCodeBlock(cb, type){
        var match = new Matchic().nextCodeBlock(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }
    nextFunction(cb, type){
        var match = new Matchic().nextFunction(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextChar(cb){
        var match = new Matchic().nextChar(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    nextHTML(){
        var match = new Matchic().nextHTML(this.stateStack[this.stateStack.length-1]["subStr"])
        this._next(cb, {"match":match, "subStr": this.stateStack[this.stateStack.length-1]["subStr"].replace(match, "")})
        return this;
    }

    up(cb){
        //this just pops the currentState off of the stack 
        //(it basically erases the previous nextSomething() 
        //but allows you to keep a global variable)
        this.stateStack.pop()
        console.log("STATE STACK====>", this.stateStack)
        return this;
    }

    iter(n, fn, cb){
        //n is number of iterations
        //fn is function name
        //cb is callback to pass to function name
        
        this.iter=n;
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
            this.iter--;
        }
        this.iter=0;
    }


}



var results = new Spell(FLOAT_STR_CASE).iter(44, 'nextFloat', (match, cs, gs)=>{console.log(match)})

