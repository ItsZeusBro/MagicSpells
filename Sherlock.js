import {Finding} from "./Source/Finding.js"
import { MOBY_DICK } from "./Source/Test/Cases/Books/IndividualBooks/MobyDick.js";
import * as assert from "node:assert"
import * as util from "node:util"

export class Book{
    constructor(string, tools){
        this.string=string;
        this.tools=tools
		this.pages;
        this.book;
		this.bookify(string, this, tools)
    }
    
    bookify(string, _Book, tools){
		if(!(string&&tools)){
			tools = this.tools
		}
		if(!_Book.book){
			_Book.book=this._emptyBook();
		}
		var page=this._emptyPage();

        if(('lineCount' in tools)&&('anchor' in tools)){
            var line="";
            for(var i=0; i<string.length; i++){
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for the last push to the queue!
				if(string[i]==tools['anchor'] && this.lineCount(page)==tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
					this._pushLineToPage(line, page);
					this._pushPageToBook(page, _Book);
					page=this._emptyPage();
					line="";
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for anything BEFORE THE LAST PUSH TO THE QUEUE!
				}else if(string[i]==tools['anchor'] && this.lineCount(page)<tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
                    this._pushLineToPage(line, page);
					line="";
				}else{
					line+=string[i];
				}
        	}
			//THIS IS ALWAYS HIDDEN
            this._pushLineToPage(line, page)
			this._pushPageToBook(page, _Book);
		}
	}
    //if you need to stringify large ranges, your pages are too small
    stringify(_Book, pageN, pageM){
        if(!_Book.book){
            throw Error("Book is needed for stringify to work")
        }

        if(pageN && pageM){
            //if pageN or pageM
            return _Book._stringifyNtoM(_Book, pageN, pageM)
        }else if(pageN){
            return _Book._stringifyNtoM(_Book, pageN, _Book.pageCount(_Book))
        }else if(pageM){
            return _Book._stringifyNtoM(_Book, 0, pageM)
        }else{
            var string=""
            for (const [pageNumber, page] of Object.entries(_Book.book['pages'])) {
                for (const [lineNumber, line] of Object.entries(page['lines'])){
                    string+=line
                }
            }    
            return string
        }
    }
    //O(n^2) where n is the number of pages n to m, pagination should be balanced
    //to avoid performance issues
    _stringifyNtoM(_Book, pageN, pageM){
        var string="";
        for (var i = pageN; i<=pageM; i++){
            var page = _Book.book['pages'][i.toString()];
            for(const [lineNumber, line] of Object.entries(page['lines'])){
                string+=line;
            }
        }
        return string;
    }

    _removePagesNtoM(_Book, n, m){
		assert.equal(m>=n, true);
		for (var j = n; j<=m; j++){
			this._removePageN(_Book, j);
		}
	}

	_removePageN(_Book, n){
		delete _Book.book['pages'][n.toString()];
		var tmp = _Book.book['pages'][(n+1).toString()];
		delete _Book.book['pages'][(n+1).toString()];
		_Book.book['pages'][n.toString()]=tmp;
		_Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
	}

    pageCount(_Book){
		return parseInt(_Book.book['pageCount'])
	}
	lineCount(page){
        return parseInt(page['lineCount']);
    }

    //this should be tested when its actually used, leave it here for now.
    _popNPagesFrom(n, _Book){
		for(var i = 0; i<n; i++){
			this._popPageFromBook(_Book)
		}
	}
	
    _popPageFromBook(_Book){
        delete _Book.book['pages'][_Book.book['pageCount']]; 
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
    }

    pushStringToBook(string, _Book, tools){
        if(!string && !_Book.book){
            throw Error("you need to provide a string and a book");
        }
        if(!tools){
            tools=this.tools
        }
		this.bookify(string, _Book, tools)
	}
    _pushPageToBook(page, _Book){
        _Book.book['pages'][(parseInt(_Book.book['pageCount'])+1).toString()]=page
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])+1).toString();
    }
    _pushLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }

    _emptyPage(){
		return {'lineCount':'0','lines':{}}
	}
	_emptyBook(){
		return {'pageCount':'0','pages':{}}
	}
    


	printBook(_Book){
		console.log(util.inspect(_Book.book, {showHidden: true, depth: null, colors: true}))
	}

    _getPageN(n){

    }
}

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
        this.tools=tools;
        this.string=string;
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
// var sherlock = new Sherlock(MOBY_DICK, {'lineCount':3, 'anchor':"\n", "pageLookAhead":true})
