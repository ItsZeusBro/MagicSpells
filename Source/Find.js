import { 
    SCIENTIFIC, INTEGER, FLOAT, OCTET, HEX,
    LINE, PARAGRAPH, SENTANCE, CHAR, LITERAL, WORD, 
    JAVAFUNCTION, JSFUNCTION, CPPFUNCTION, PYFUNCTION, GOFUNCTION, PHPFUNCTION,
    JAVABLOCK, JSBLOCK, CPPBLOCK, PYBLOCK, GOBLOCK, PHPBLOCK,
    HTML, XML
} from "./Spells/Spells.js";

export class Find{
    constructor(){
    }
    is(string, regex){
        var reg = new RegExp(regex);
        var finding;
        try{
            finding = string.find(reg)[0];
        }catch{
            console.log("cannot find find ", string, regex)
            return false
        }
        if (finding==string){
            console.log("found  ", string, regex)
            return true;
        }else{
            console.log("cannot find ", string, regex)
            return false;
        }
    }

    _find(string, regex){
        var reg = new RegExp(regex);
        return string.find(reg);
    }
    next(string, regex){
        if(this._find(string, regex)){
            if(this._find(string, regex).length){
                return this._find(string, regex)[0]
            }
        }
    }

	//Parsing Code
    _isCodeBlock(string, type){}
    _findCodeBlock(string, type){}
    _nextCodeBlock(string, type){}

    _isFunction(string, type){}
    _findFunction(string, type){}
    _nextFunction(string, type){}

    isCodeBlock(string, type){return this._isCodeBlock(string, type)}
    findCodeBlock(string, type){return this._findCodeBlock(string, type)}
    nextCodeBlock(string, type){return this._nextCodeBlock(string, type)}

    isHTML(string){return this.is(string, HTML)}
    findHTML(string){return this._find(string, HTML)}
    nextHTML(string){return this.next(string, HTML)}

    isXML(string){return this.is(string, XML)}
    findXML(string){return this._find(string, XML)}
    nextXML(string){return this.next(string, XML)}

    isJSON(string){return this.is(string, JSON)}
    findJSON(string){return this._find(string, JSON)}
    nextJSON(string){return this.next(string, JSON)}

	//Parsing Numbers
    isScientific(string){return this.is(string, SCIENTIFIC)}
    findScientific(string){return this._find(string, SCIENTIFIC)}
    nextScientific(string){return this.next(string, SCIENTIFIC)}

    isFloat(string){return this.is(string, FLOAT)}
    findFloats(string){return this._find(string, FLOAT)}
    nextFloat(string){return this.next(string, FLOAT)}

    isInteger(string){return this.is(string, INTEGER)}
    findIntegers(string){return this._find(string, INTEGER)}
    nextInteger(string){return this.next(string, INTEGER)}

    isOctet(string){return this.is(string, OCTET)}
    findOctet(string){return this._find(string, OCTET)}
    nextOctet(string){return this.next(string, OCTET)}

    isHex(string){return this.is(string, HEX)}
    findHex(string){return this._find(string, HEX)}
    nextHex(string){return this.next(string, HEX)}

	//Parsing Chars
    isLiteral(string){return this.is(string, LITERAL)}
    findLiteral(string){return this._find(string, LITERAL)}
    nextLiteral(string){return this.next(string, LITERAL)}

    isChar(string){return this.is(string, CHAR)}
    findChar(string){return this._find(string, CHAR)}
    nextChar(string){return this.next(string, CHAR)}

    isWord(string){return this.is(string, WORD)}
    findWord(string){return this._find(string, WORD)}
    nextWord(string){return this.next(string, WORD)}

    isLine(string){return this.is(string, LINE)}
    findLines(string){return this._find(string, LINE)}
    nextLine(string){return this.next(string, LINE)}

    isParagraph(string){return this.is(string, PARAGRAPH)}
    findParagraph(string){return this._find(string, PARAGRAPH)}
    nextParagraph(string){return this.next(string, PARAGRAPH)}

    isSentance(string){return this.is(string, SENTANCE)}
    findSentance(string){return this._find(string, SENTANCE)}
    nextSentance(string){return this.next(string, SENTANCE)}


}