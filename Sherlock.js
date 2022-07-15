import {Finding} from "./Source/Finding.js"

export class Sherlock{
    constructor(string, tools){
		this.pageQueue=[]
		this.newlines=0;
		if(tools['pageSize']&&tools['pageOn']){
			this.pagination(string, tools['pageSize'], tools['pageOn'])
		}
        
        Sherlock.prototype.nextLine= this.nextLine;
        Sherlock.prototype.nextParagraph= this.nextParagraph;
        Sherlock.prototype.nextSentance=this.nextSentance;
        Sherlock.prototype.nextInteger=this.nextInteger;
        Sherlock.prototype.nextFloat=this.nextFloat;
        Sherlock.prototype.nextScientific=this.nextScientific;
        Sherlock.prototype.nextOctet=this.nextOctet;
        Sherlock.prototype.nextHex=this.nextHex;
        Sherlock.prototype.nextCodeBlock=this.nextCodeBlock;
        Sherlock.prototype.nextFunction=this.nextFunction;
        Sherlock.prototype.nextHTML = this.nextHTML;
        Sherlock.prototype.up=this.up;
        Sherlock.prototype.iter=this.iter;
        Sherlock.prototype.init=this.init;
        Sherlock.prototype.nextFinding=this.nextFinding;

        this.opStack = [{'op#':0,'finding':undefined, 'op': 'Sherlock', 'tools':tools, 'page':this.pageQueue[0]}];
		this.pageNumber=0;
        this.ugly_itr=0;
        this.Finding = new Finding();

    }
    init(string, tools){
        this.string=string;
        this.opStack.push({'op#':this.opStack.length-1, 'finding':undefined, 'op': 'Spell', 'tools':tools, 'page':this.pageQueue[0]});
        this.ugly_itr=0;
        return this;
    }
	nextPage(){
		if(this.pageNumber < this.pageQueue.length-1){
			this.pageNumber+=1;
			return this.pageQueue[this.pageNumber]
		}
		return
	}
	pagination(string, pageSize, pageOn){
		var n = string.length;
		var pageCounter=0;
		var pageString="";
		for(var i = 0; i<n; i++){
			if((string[i]==pageOn) && (pageCounter!=pageSize-1)){
				//not the end of the page, but the counter goes up
				this.newlines+=1
				pageCounter+=1;
				pageString+=string[i];
			}else if((string[i]==pageOn) && (pageCounter==pageSize-1)){
				//end of the page, append to pageString, push page to pageQueue, clear pageString, reset pageCounter
				this.newlines+=1
				pageString+=string[i];
				//pageCounter+=1; //leave this here even though it doesnt matter, because we need to print it out sometimes to check pageCounter
				//console.log(pageCounter)
				this.pageQueue.push(pageString);
				pageString="";
				pageCounter=0;
			}else{
				//not the end of the page, just append to the pageString
				pageString+=string[i];//
			}
		}

		//THIS PUSHES THE LAST (HIDDEN) PAGE ON THE QUEUE
		this.pageQueue.push(pageString);

	}

    subStr(string, finding){
        //this function should remove everything up until the finding but nothing else
        return string.replace(finding, '');
    }
    _next(finding, cb, fn, tools){
        var currentState;
        if(finding){
            currentState={
				'op#':this.opStack.length-1,
                "finding":finding,
                "op": fn, 
                "tools": tools,
                'page': this.subStr(
                    this.opStack[this.opStack.length-1]['page'], 
                    finding
                )

            }
            this.opStack.push(currentState)
            if(cb){cb(finding, fn, currentState, this.opStack)}
            return true

        }else{
			var nextPage= this.nextPage()
			if (nextPage){
				currentState={
					'op#':this.opStack.length-1,
					"finding": undefined,
					"op": 'nextPage', 
					"tools": tools,
					'page': nextPage,
				}
				this.opStack.push(currentState)
				if(cb){cb(finding, fn, currentState, this.opStack)}
				return true
			}else{
				currentState={
					'op#':this.opStack.length-1,
					"finding": undefined,
					"op": fn, 
					"tools": tools,
					'page': undefined

				}
				this.opStack.push(currentState)
				if(cb){cb(finding, fn, currentState, this.opStack)}
			}
            
            return
        }
    }
    
    nextLine(cb, tools){
        //separated by one newline
        var finding = new Finding().nextLine(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same functino
        if (!this._next(finding, cb, 'nextLine', tools)){this.ugly_itr=0;}
        return this;
    }

    nextParagraph(cb, tools){
        //separated by two newlines
        var finding = new Finding().nextParagraph(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextParagraph', tools)){this.ugly_itr=0;}
        return this;
    }

    nextSentance(cb, tools){
        //separated by a period
        var finding = new Finding().nextSentance(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextSentance', tools)){this.ugly_itr=0;}
        return this;
    }

    nextInteger(cb, tools){
        var finding = new Finding().nextInteger(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextInteger', tools)){this.ugly_itr=0;}
        return this;
    }

    nextFloat(cb, tools){
        var finding = new Finding().nextFloat(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextFloat', tools)){this.ugly_itr=0;}
        return this;
    }

    nextScientific(cb, tools){
        var finding = new Finding().nextScientific(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextScientific', tools)){this.ugly_itr=0;}
        return this;
    }

    nextOctet(cb, tools){
        var finding = new Finding().nextOctet(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextOctet', tools)){this.ugly_itr=0;}
        return this;
    }

    nextHex(cb, tools){
        var finding = new Finding().nextHex(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextHex', tools)){this.ugly_itr=0;}
        return this;
    }

    nextCodeBlock(type, cb, tools){
        var finding = new Finding().nextCodeBlock(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextCodeBlock', tools)){this.ugly_itr=0;}
        return this;
    }

    nextFunction(type, cb, tools){
        var finding = new Finding().nextFunction(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextFunction', tools)){this.ugly_itr=0;}
        return this;
    }

    nextLiteral(cb, tools){
        var finding = new Finding().nextLiteral(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextLiteral', tools)){this.ugly_itr=0;}
        return this;
    }
    nextChar(cb, tools){
        var finding = new Finding().nextChar(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextChar', tools)){this.ugly_itr=0;}
        return this;
    }

    nextWord(cb, tools){
        var finding = new Finding().nextWord(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextWord', tools)){this.ugly_itr=0;}
        return this;
    }

    nextHTML(cb, tools){
        var finding = new Finding().nextHTML(this.opStack[this.opStack.length-1]['page'])
        //if there is no finding there is no reason to iterate the same function
        if (!this._next(finding, cb, 'nextHTML', tools)){this.ugly_itr=0;}
        return this;
    }

    nextfinding(cb, tools){
        //takes an array of regex patterns and applies them ordinally, 
        //until it finds the first finding, and pushes to the stack, then returns
        tools['spells'].forEach((spell)=>{
            var finding = new Finding().next(this.opStack[this.opStack.length-1]['page'], spell)
            //if there is no finding there is no reason to iterate the same function
            if (!this._next(finding, cb, 'nextfinding', tools)){this.ugly_itr=0;}
        })
        return this;
    }

    up(cb){
        this.results.pop()
        return this;
    }

    iter(n, fn, cb, tools){
        if(n=='inf'){
            this.ugly_itr=Infinity
        }else if(Number.isInteger(n)){
            this.ugly_itr=n;
        }else{
            throw Error("n must be of type int or string value 'inf'")
        }
        for(var i = 0; i<this.ugly_itr; i++){
            if(fn=='nextLine'){this.nextLine(cb)}
            else if(fn=='nextParagraph'){this.nextParagraph(cb, tools)}
            else if(fn=='nextSentance'){this.nextSentance(cb, tools)}
            else if(fn=='nextChar'){this.nextChar(cb, tools)}
            else if(fn=='nextWord'){this.nextWord(cb, tools)}
            else if(fn=='nextLiteral'){this.nextLiteral(cb, tools)}
            else if(fn=='nextInteger'){this.nextInteger(cb, tools)}
            else if(fn=='nextFloat'){this.nextFloat(cb, tools)}
            else if(fn=='nextScientific'){this.nextScientific(cb, tools)}
            else if(fn=='nextOctet'){this.nextOctet(cb, tools)}
            else if(fn=='nextHex'){this.nextHex(cb, tools)}
            else if(fn=='nextCodeBlock'){this.nextCodeBlock(cb, tools)}
            else if(fn=='nextFunction'){this.nextFunction(cb, tools)}
            else if(fn=='nextHTML'){this.nextHTML(cb, tools)}
            else if(fn=='nextFinding'){this.nextFinding(cb, tools)}
        }
        return this;
    }
}
//We need the following:
//The user controls the pagination
//We control any other buffers and IO needed for scalability
//IO is controlled by FIST
//We also need test cases generated by RegXGen
//finding Spells is scalable enough to be useful for parsing files
//on FIST operatools. Fist will hopefully be good enough to scale finding
//Spells
//finding Spells might have some good use case support for Comet