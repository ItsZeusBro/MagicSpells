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
            var pagePushes=1;
            for(var i=0; i<string.length; i++){
                if(string[i]!=tools['delimiter']){
                    //if the char is not a delimiter, just add the char to the pageStr
                    pageStr+=string[i];
                }else{
                    //if the char is a delimiter, we still need to add it to the pageStr
                    //but we need to how many times we pushed to the page, before pushing to 
                    //the page queue

                    if(pagePushes!=tools['pageSize']){
                        //if pagePushes is not equal to the pageSize
                        //we push to the page, but not the queue
                        pageStr+=string[i];
                        page.push(pageStr);
                        pageStr='';
                        pageSize+=1;
                    }else{
                        //if pagePushes is equal to the pageSize
                        //we push to the page, then push page to the pageQueue
                        pageStr+=string[i];
                        page.push(pageStr);
                        pageStr='';
                        pageSize=0;
                        pageQueue.push(page)
                    }

                }
            }
            return pageQueue
		}
        //if they don't paginate pageQueue is undefined
        return
	}

    subStr(string, finding){
        //this function should remove everything up until the finding but nothing else
        return string.replace(finding, '');
    }
    _next(finding, cb, fn, tools){

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

var sherlock = new Sherlock(MOBY_DICK, {'pageSize':3, 'delimiter':"\n"})

console.log(sherlock.pageQueue)
