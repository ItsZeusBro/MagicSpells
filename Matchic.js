import { SCIENTIFIC } from "./Spells/Spells";

export class Matchic{
    //Reverse tells us to make the whole corpus 
    //string conform to a single instance of the 
    //regex pattern. It basically checks if the match
    //output matches the entire input (no flags should apply)

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
    randomInterpolationScientific(sym1, range1, range2, e, range3){
        //interpolate the general test pattern into some larger string
        //match any regex in the string using a supported Meta Regex Pattern
        //return a random instance of that pattern back to the original string
        //then use this function to create test cases for your normal regex's 
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
    


}
var matchic = new Matchic()

//If we wanted to test one of our regex patterns like scientific number matching
//we would want to test the more general regex against concrete instances of scientific numbers
//but instead of creating them by hand, we want to generate them using a generator that
//uses regex parameters. For example if I wanted the following:
// / "Anything whatsoever" + scientificNumber(sym1, range1, range2, e, range3) + "Anything whatsoever"
// matchic.metaRegRand(/Anything whatsoever[0-9]*\.[0-9]*e\+?\-?[0-9]*Anything whatsoever/)
// matchic.metaRegRand(/Anything whatsoever [0-9]*\.[0-9]*e\+?\-?[0-9]*Anything whatsoever/)
// matchic.metaRegRand(/Anything whatsoever[0-9]*\.[0-9]*e\+?\-?[0-9]* Anything whatsoever/)