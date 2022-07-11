import { IS_SCIENTIFIC, IS_INTEGER, IS_FLOAT, IS_BINARY, IS_ALPHA_STRING, IS_ALPHA_NUMERIC_STRING, IS_SENTANCE } from "./Spells/Spells.js";

export class Matchic{

    is(string, regex){
        var reg = new RegExp(regex);
        var match = string.match(reg);
        return match;
    }

    no(string, regex){
        var tokens;
        try{
            tokens = string.split(/(\s)/g); //PROBABLY A BUG IN HERE
        }catch{
            return true;
        }
        tokens.forEach(token => {
            if(this.is(token, regex)){
                return false;
            }
        });
        return true;
    }

    has(string, regex){
        var tokens;
        try{
            tokens = string.split(/(\s)/g); //PROBABLY A BUG IN HERE
        }catch{
            return false
        }
        tokens.forEach(token => {
            if(this.is(token, regex)){
                return true;
            }
        });
        return false;
    }

    isInteger(string){return this.is(string, IS_INTEGER)}
    hasInteger(string){return this.has(string, IS_INTEGER)}
    noInteger(string){return this.no(string, IS_INTEGER)}

    isFloat(string){return this.is(string, IS_FLOAT)}
    hasFloat(string){return this.has(string, IS_FLOAT)}
    noFloat(string){return this.no(string, IS_FLOAT)}

    isBinary(string){return this.is(string, IS_BINARY)}
    hasBinary(string){return this.has(string, IS_BINARY)}
    noBinary(string){return this.no(string, IS_BINARY)}

    isAlpha(string){return this.is(string, IS_ALPHA_STRING)}
    hasAlpha(string){return this.has(string, IS_ALPHA_STRING)}
    noAlpha(string){return this.no(string, IS_ALPHA_STRING)}

    isAlphaNumeric(string){return this.is(string, IS_ALPHA_NUMERIC_STRING)}
    hasAlphaNumeric(string){return this.has(string, IS_ALPHA_NUMERIC_STRING)}
    noAlphaNumeric(string){return this.no(string, IS_ALPHA_NUMERIC_STRING)}

    isScientific(string){return this.is(string, IS_SCIENTIFIC)}
    hasScientific(string){return this.has(string, IS_SCIENTIFIC)}
    noScientific(string){return this.no(string, IS_SCIENTIFIC)}

    isSentance(string){return this.is(string, IS_SENTANCE)}
    hasSentance(string){return this.has(string, IS_SENTANCE)}
    noSentance(string){return this.no(string, IS_SENTANCE)}    
}