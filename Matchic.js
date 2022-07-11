import { SCIENTIFIC } from "./Spells/Spells";

export class Matchic{
    //Reverse tells us to make the whole corpus 
    //string conform to a single instance of the 
    //regex pattern. It basically checks if the match
    //output matches the entire input (no flags should apply)

    isScientific(){
        //returns true, the entire string is a single scientific number

    }
    hasScientific(){
        //returns true, if anything in the string is a scientific number

    }
    noScientific(){
        //returns true, if nothing in the string contains a scientific number
    }
    notScientific(){
        //returns true, if the entire string itself is NOT a scientific number

    }
    isInteger(){
        //returns true, the entire string is a single integer
    }
    hasInteger(){
        //returns true, if anything in the string is an integer
    }
    noInteger(){
        //returns true, if nothing in the string contains an integer
    }
    notInteger(){
        //returns true, if the string itself is not a single integer
    }

    isFloat(){
        //returns true, the entire string is a single float
    }
    hasFloat(){
        //returns true, if anything in the string is a float
    }
    noFloat(){
        //returns true, if nothing in the string contains a float

    }
    notFloat(){
        //returns true, if the string itself is not a single float
    }

    isBinary(){
        //returns true, the entire string is a single binary number
    }
    hasBinary(){
        //returns true, if anything in the string is a binary number
    }

    noBinary(){
        //returns true, if nothing in the string contains a binary

    }
    notBinary(){
        //returns true if the entire string is not a single binary
    }

    isSentance(){
        //returns true, the entire string is a single sentance
    }
    hasSentance(){
        //returns true, if anything in the string is a sentance
    }
    noSentance(){
        //returns true, if nothing in the string contains a sentance
    }
    notSentance(){
        //returns true if the entire string is not a single sentance
    }
    isParagraph(){
        //returns true, the entire string is a single paragraph
    }
    hasParagraph(){
        //returns true, if anything in the string is a paragraph
    }
    noParagraph(){
        //returns true, if nothing in the string contains a paragraph
    }
    notParagraph(){
        //returns true if the entire string is not a single paragraph
    }
    
    metaScientific(pattern){
        //basically we can use escape sequences to match regex patterns
        //For scientific numbers, a meta Scientific Regex pattern would be
        // /[\[0-9\]\-\[0-9\]]/
    }
    metaRandRange(range){
        //returns a random number beteen some range specified by the regex range

        return 
    }

    metaRandESignRange(ESignRange){

    }

}
var matchic = new Matchic()

matchic.metaRegRand(/Anything whatsoever [0-9]*\.[0-9]*e\+?\-?[0-9]* Anything whatsoever/)
matchic.metaRegRand(/Anything whatsoever[0-9]*\.[0-9]*e\+?\-?[0-9]*Anything whatsoever/)
matchic.metaRegRand(/Anything whatsoever [0-9]*\.[0-9]*e\+?\-?[0-9]*Anything whatsoever/)
matchic.metaRegRand(/Anything whatsoever[0-9]*\.[0-9]*e\+?\-?[0-9]* Anything whatsoever/)