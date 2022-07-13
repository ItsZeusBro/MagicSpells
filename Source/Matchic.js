import { 
    SCIENTIFIC, INTEGER, FLOAT, OCTET, HEX,
    LINE, PARAGRAPH, SENTANCE, CHAR,
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
    matches(string, regex){
        var matches = []
        var reg = new RegExp(regex);
        return string.match(reg)
    }
    next(string, regex){
        //console.log(regex)
        return this.matches(string, regex)[0]
    }

    _isCodeBlock(string, type){

    }
    _matchCodeBlock(string, type){

    }
    _nextCodeBlock(string, type){

    }

    _isFunction(string, type){

    }
    _matchFunction(string, type){

    }
    _nextFunction(string, type){
        
    }

    isScientific(string){return this.is(string, SCIENTIFIC)}
    matchScientific(string){return this.matches(string, SCIENTIFIC)}
    nextScientific(string){return this.next(string, SCIENTIFIC)}

    isFloat(string){return this.is(string, FLOAT)}
    matchFloats(string){return this.matches(string, FLOAT)}
    nextFloat(string){return this.next(string, FLOAT)}

    

    isLine(string){return this.is(string, LINE)}
    matchLines(string){return this.matches(string, LINE)}
    nextLine(string){return this.next(string, LINE)}

    isParagraph(string){return this.is(string, PARAGRAPH)}
    matchParagraph(string){return this.matches(string, PARAGRAPH)}
    nextParagraph(string){return this.next(string, PARAGRAPH)}

    isSentance(string){return this.is(string, SENTANCE)}
    matchSentance(string){return this.matches(string, SENTANCE)}
    nextSentance(string){return this.next(string, SENTANCE)}

    isChar(string){return this.is(string, CHAR)}
    matchChar(string){return this.matches(string, CHAR)}
    nextChar(string){return this.next(string, CHAR)}


    isInteger(string){return this.is(string, INTEGER)}
    matchIntegers(string){return this.matches(string, INTEGER)}
    nextInteger(string){return this.next(string, INTEGER)}



    isOctet(string){return this.is(string, OCTET)}
    matchOctet(string){return this.matches(string, OCTET)}
    nextOctet(string){return this.next(string, OCTET)}

    isHex(string){return this.is(string, HEX)}
    matchHex(string){return this.matches(string, HEX)}
    nextHex(string){return this.next(string, HEX)}


    isCodeBlock(string, type){return this._isCodeBlock(string, type)}
    matchCodeBlock(string, type){return this._matchCodeBlock(string, type)}
    nextCodeBlock(string, type){return this._nextCodeBlock(string, type)}

    isHTML(string){return this.is(string, HTML)}
    matchHTML(string){return this.matches(string, HTML)}
    nextHTML(string){return this.next(string, HTML)}

    isXML(string){return this.is(string, XML)}
    matchXML(string){return this.matches(string, XML)}
    nextXML(string){return this.next(string, XML)}

    isJSON(string){return this.is(string, JSON)}
    matchJSON(string){return this.matches(string, JSON)}
    nextJSON(string){return this.next(string, JSON)}
}



// class MatchicIter{
//     constructor(string, regex){
//         this.string=string;
//         this.regex=regex;
//         this.matches=new Matchic().matches(string, regex)
//     }
//     next(){return this.matches.pop(0)}
// }