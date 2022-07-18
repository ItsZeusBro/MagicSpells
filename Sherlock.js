import {Finding} from "./Source/Finding.js"
import { MOBY_DICK } from "./Source/Test/Cases/Books/IndividualBooks/MobyDick.js";

export class Sherlock{
    constructor(string, tools){

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

        this.string=string
        //pageQueue can be undefined or an actual queue
        this.pageQueue=this.pagination(string, tools);
        //{'op#':0,'finding':undefined, 'op': 'Sherlock', 'tools':tools, 'page':this.pageQueue[0]}
        this.opStack = [];
        this.Finding = new Finding();

    }
    init(string, tools){

        return this;
    }
	nextPage(){
        return this;
	}
	pagination(string, tools){
        var pageQueue=[]
        if(('pageSize' in tools)&&('delimiter' in tools)){
			//takes the total string and creates a pagination queue
            //iterate through the string
            var pageStr="";
            var page=[];
			var lastChar;
			console.log(string.length)
            for(var i=0; i<string.length; i++){
				//LEAVE THIS -1 after tools['pageSize'] because we are looking for the last push to the queue!
				if(string[i]==tools['delimiter']&&page.length==tools['pageSize']-1){
					pageStr+=string[i];
					page.push(pageStr);
					pageQueue.push(page);
					page=[];
					pageStr="";
				//LEAVE THIS -1 after tools['pageSize'] because we are looking for anything BEFORE THE LAST PUSH TO THE QUEUE!
				}else if(string[i]==tools['delimiter']&&page.length<tools['pageSize']-1){
					pageStr+=string[i];
					page.push(pageStr);
					pageStr="";
				}else{
					pageStr+=string[i];
				}
        	}
			//This one is always hidden
			page.push(pageStr);
			pageQueue.push(page);
            return pageQueue;
		}
        //if they don't paginate pageQueue is undefined
        return
	}



    _pageLookAheadFindandSweep(qindex, page, pindex, regex){
        //this tries to find a match in the page index first,
        //then tries to find a match in the aggregation of the page index
        //and page index +1, etc 

        //get the number of strings in the page
        var pageAggregate=page[i]
        for (var i = 0; i<page.length; i++){
            var finding = this.Finding._find(pageAggregate, regex)
            if(!finding){
                pageAggregate+=page[i]
            }else{
                //sweep and return finding
                this._sweep(finding, qindex, pindex)
                return finding
            }
        }        
    }

    _findandSweep(qindex, pindex, regex){
        var finding = this.Finding._find(pageAggregate, regex)
        if(finding){
            //sweep and return finding
            this._sweep(finding, qindex, pindex)
            return finding
        }
    }

    _sweep(finding, qindex, pindex){
        var substrIndex1=this.pageQueue[qindex][pindex].indexOf(finding);
        var substrIndex2=substrIndex1+this.finding.length-1;
        var substr = this.pageQueue.substring(substrIndex1, substrIndex2)
        this.pageQueue[qindex][pindex] = this.pageQueue[qindex][pindex].replace(substr, "")
    }
	_next(regex){
        //There is another edge case!!!
        //what happens when a match is not found in the page, but extends over 
        //n number of pages? How many pages do we look ahead?
        var i;
        var j;
        for(i=0; i<this.pageQueue.length; i++){
            for(j=0;j<this.pageQueue[i].length; j++){
                var finding;
                if(this.tools['pageLookAhead']){
                    finding = this._pageLookAheadFindandSweep(i, this.pageQueue[i], j, regex)
                }else{
                    finding = this._findandSweep(i, j, regex)
                }
                if (finding){
                    return finding;
                }
                //if it was not found in this.pageQueue[i][j], we shift this.pageQueue[i]
                this.pageQueue[i].shift()
                //because we removed something from this.pageQueue[i], j index is now one ahead
                //of where it needs to be, so we need this.
                j--;
            }
            this.pageQueue.shift()
            i--;
        }
	}

    nextLine(cb, tools){
		
    }

    nextParagraph(cb, tools){
     
    }

    nextSentance(cb, tools){
       
    }

    nextInteger(cb, tools){
       
    }

    nextFloat(cb, tools){
        
    }

    nextScientific(cb, tools){
       
    }

    nextOctet(cb, tools){
       
    }

    nextHex(cb, tools){
       
    }

    nextCodeBlock(type, cb, tools){
        
    }

    nextFunction(type, cb, tools){
        
    }

    nextLiteral(cb, tools){
        
    }
    nextChar(cb, tools){
        
    }

    nextWord(cb, tools){
        
    }

    nextHTML(cb, tools){
        
    }

    nextFinding(cb, tools){

    }

    up(cb){

    }

    iter(n, fn, cb, tools){
        //
        if(n=='inf'){
        }else if(Number.isInteger(n)){
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
//page lookAhead means that if there is not a match in the delmited string, it will
//aggregate the next delimited string with the previous and search again. It will do this
//until pageLookAhead is met
// var sherlock = new Sherlock(MOBY_DICK, {'pageSize':3, 'delimiter':"\n", "pageLookAhead":true})

// console.log(sherlock.pageQueue)
