import { SCIENTIFIC, SCIENTIFIC_G, INTEGER, FLOAT, BINARY, ALPHA_STRING, ALPHA_NUMERIC_STRING, SENTANCE } from "./Spells/Spells.js";
import { Comet } from "../Comet/Comet.js";
export class Matchic extends Comet{
    constructor(){
        super("MatchicSpells/", "MatchicJS")
    }
    is(string, regex){
        var reg = new RegExp(regex);
        var match;
        try{
            match = string.match(reg)[0];
        }catch{
            this.comet("cannot find match ", string, regex)
            return false
        }
        if (match==string){
            this.comet("found match ", string, regex)
            return true;
        }else{
            this.comet("cannot find match ", string, regex)
            return false;
        }
    }

    matches(string, regex){
        var matches = []
        var reg = new RegExp(regex);
        return string.match(reg)
    }
    

    isInteger(string){return this.is(string, INTEGER)}
    matchIntegers(string){return this.matches(string, INTEGER)}

    isFloat(string){return this.is(string, FLOAT)}
    matchFloats(string){return this.matches(string, FLOAT)}

    isBinary(string){return this.is(string, BINARY)}
    matchBinarys(string){return this.matches(string, BINARY)}

    isAlpha(string){return this.is(string, ALPHA_STRING)}
    matchAlphas(string){return this.matches(string, ALPHA_STRING)}

    isAlphaNumeric(string){return this.is(string, ALPHA_NUMERIC_STRING)}
    matchAlphaNumerics(string){return this.matches(string, ALPHA_NUMERIC_STRING)}

    isScientific(string){return this.is(string, SCIENTIFIC)}
    matchScientifics(string){return this.matches(string, SCIENTIFIC_G)}
    
    isSentance(string){return this.is(string, SENTANCE)}
    matchSentances(string){return this.matches(string, SENTANCE)}
}

class MatchicIter{
    constructor(string, regex){
        this.string=string;
        this.regex=regex;
        this.matches=new Matchic().matches(string, regex)
    }
    next(){return this.matches.pop(0)}
}