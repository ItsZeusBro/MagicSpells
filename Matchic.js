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


    isFloat(){
        //returns true, the entire string is a single float
    }
    hasFloat(){
        //returns true, if anything in the string is a float
    }
    noFloat(){
        //returns true, if nothing in the string contains a float

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


    isAlpha(){
        //returns true, the entire string is a single binary number
    }
    hasAlpha(){
        //returns true, if anything in the string is a binary number
    }

    noAlpha(){
        //returns true, if nothing in the string contains a binary

    }


    isAlphaNumeric(){
        //returns true, the entire string is an Alpha Numeric string
    }
    hasAlphaNumeric(){
        //returns true, if any substring in the string is a Alpha Numeric substring
    }

    noAlphaNumeric(){
        //returns true, if there does not exist an AlphaNumeric substring

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


    isSentance(){
        //returns true, the entire string is a single sentance
    }
    hasSentance(){
        //returns true, if anything in the string is a sentance
    }
    noSentance(){
        //returns true, if nothing in the string contains a sentance
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

    
}
var matchic = new Matchic()
