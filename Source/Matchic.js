import { 
    SCIENTIFIC, INTEGER, FLOAT, OCTET, HEX,
    LINE, PARAGRAPH, SENTANCE, CHAR, LITERAL, WORD, 
    JAVAFUNCTION, JSFUNCTION, CPPFUNCTION, PYFUNCTION, GOFUNCTION, PHPFUNCTION,
    JAVABLOCK, JSBLOCK, CPPBLOCK, PYBLOCK, GOBLOCK, PHPBLOCK,
    HTML, XML
} from "./Spells/Spells.js";

export class Matchic{
    constructor(){
    }
    is(string, regex){
        var reg = new RegExp(regex);
        var match;
        try{
            match = string.match(reg)[0];
        }catch{
            console.log("cannot find match ", string, regex)
            return false
        }
        if (match==string){
            console.log("found match ", string, regex)
            return true;
        }else{
            console.log("cannot find match ", string, regex)
            return false;
        }
    }

    _matchic(string, regex){
        var reg = new RegExp(regex);
        return string.match(reg);
    }
    next(string, regex){
        if(this._matchic(string, regex)){
            if(this._matchic(string, regex).length){
                return this._matchic(string, regex)[0]
            }
        }
    }

	//Parsing Code
    _isCodeBlock(string, type){}
    _matchCodeBlock(string, type){}
    _nextCodeBlock(string, type){}

    _isFunction(string, type){}
    _matchFunction(string, type){}
    _nextFunction(string, type){}

    isCodeBlock(string, type){return this._isCodeBlock(string, type)}
    matchCodeBlock(string, type){return this._matchCodeBlock(string, type)}
    nextCodeBlock(string, type){return this._nextCodeBlock(string, type)}

    isHTML(string){return this.is(string, HTML)}
    matchHTML(string){return this._matchic(string, HTML)}
    nextHTML(string){return this.next(string, HTML)}

    isXML(string){return this.is(string, XML)}
    matchXML(string){return this._matchic(string, XML)}
    nextXML(string){return this.next(string, XML)}

    isJSON(string){return this.is(string, JSON)}
    matchJSON(string){return this._matchic(string, JSON)}
    nextJSON(string){return this.next(string, JSON)}

	//Parsing Numbers
    isScientific(string){return this.is(string, SCIENTIFIC)}
    matchScientific(string){return this._matchic(string, SCIENTIFIC)}
    nextScientific(string){return this.next(string, SCIENTIFIC)}

    isFloat(string){return this.is(string, FLOAT)}
    matchFloats(string){return this._matchic(string, FLOAT)}
    nextFloat(string){return this.next(string, FLOAT)}

    isInteger(string){return this.is(string, INTEGER)}
    matchIntegers(string){return this._matchic(string, INTEGER)}
    nextInteger(string){return this.next(string, INTEGER)}

    isOctet(string){return this.is(string, OCTET)}
    matchOctet(string){return this._matchic(string, OCTET)}
    nextOctet(string){return this.next(string, OCTET)}

    isHex(string){return this.is(string, HEX)}
    matchHex(string){return this._matchic(string, HEX)}
    nextHex(string){return this.next(string, HEX)}

	//Parsing Chars
    isLiteral(string){return this.is(string, LITERAL)}
    matchLiteral(string){return this._matchic(string, LITERAL)}
    nextLiteral(string){return this.next(string, LITERAL)}

    isChar(string){return this.is(string, CHAR)}
    matchChar(string){return this._matchic(string, CHAR)}
    nextChar(string){return this.next(string, CHAR)}

    isWord(string){return this.is(string, WORD)}
    matchWord(string){return this._matchic(string, WORD)}
    nextWord(string){return this.next(string, WORD)}

    isLine(string){return this.is(string, LINE)}
    matchLines(string){return this._matchic(string, LINE)}
    nextLine(string){return this.next(string, LINE)}

    isParagraph(string){return this.is(string, PARAGRAPH)}
    matchParagraph(string){return this._matchic(string, PARAGRAPH)}
    nextParagraph(string){return this.next(string, PARAGRAPH)}

    isSentance(string){return this.is(string, SENTANCE)}
    matchSentance(string){return this._matchic(string, SENTANCE)}
    nextSentance(string){return this.next(string, SENTANCE)}


}