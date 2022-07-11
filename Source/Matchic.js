import { IS_SCIENTIFIC, IS_INTEGER, IS_FLOAT, IS_BINARY, IS_ALPHA_STRING, IS_ALPHA_NUMERIC_STRING, IS_SENTANCE } from "./Spells/Spells.js";
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
        try{
            var tokens = string.split(/(\s)/g);
            tokens.forEach(token => {
                try{
                    match = token.match(reg)[0]
                    this.matches.push(match)
                }catch{
                    this.comet("error", "problem getting next match from next() in MatchicSpells class", string, regex);
                }
            });
        }catch{
            return []
        }

    }
    

    isInteger(string){return this.is(string, IS_INTEGER)}
    hasInteger(string){return this.has(string, IS_INTEGER)}

    isFloat(string){return this.is(string, IS_FLOAT)}
    hasFloat(string){return this.has(string, IS_FLOAT)}

    isBinary(string){return this.is(string, IS_BINARY)}
    hasBinary(string){return this.has(string, IS_BINARY)}

    isAlpha(string){return this.is(string, IS_ALPHA_STRING)}
    hasAlpha(string){return this.has(string, IS_ALPHA_STRING)}

    isAlphaNumeric(string){return this.is(string, IS_ALPHA_NUMERIC_STRING)}
    hasAlphaNumeric(string){return this.has(string, IS_ALPHA_NUMERIC_STRING)}

    isScientific(string){return this.is(string, IS_SCIENTIFIC)}
    hasScientific(string){return this.has(string, IS_SCIENTIFIC)}

    isSentance(string){return this.is(string, IS_SENTANCE)}
    hasSentance(string){return this.has(string, IS_SENTANCE)}
}

class MatchicIter{
    constructor(string, regex){
        this.string=string;
        this.regex=regex;
        this.matches=new Matchic().matches(string, regex)
    }
    next(){return this.matches.pop(0)}
}