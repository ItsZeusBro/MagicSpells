var crypto = require('crypto');

export class Verification{
    constructor(){
    }
    key_val_match(cases){
        for (const [key, value] of Object.entries(cases)) {
            if(key!=value){
                throw Error(key, value, "do not match during verification!")
            }
        }
    }

    //we want to secure the process of adding and removing test cases
    //so we keep a hash table of the test cases
    //everytime we add to the file and run a test, this verification hook
    //gets applied and warnings are generated, lost test cases are put back
    //you would have to have authorization to remove these test cases
    //its REALLY ABOUT SECURING WORK THAT SHOULD NEVER GO AWAY. HAVING IDENTIFIED
    //REAL FUNCTIONS WITH INPUTS AND OUTPUTS SCHEMES THAT DONT GO AWAY. TEST CASES
    //BECOME VERY VALUABLE OVERTIME.
    //step 1: take a snapshot of the test case file
    //step 2: take the hash of every test case
    //step 3: sort hashes
    //step 4: hash of sorted hashes
    //step 5: associate snapshot with hash of sorted hashes
    //diffs should be stored in diff folder and you should be able
    //to reverify the hash of sorted hashes from anypoint. 

    //O(nlogn)
    rdupe_hashloop(){
        var test={}
        for (const [key, value] of Object.entries(cases)){
            if(!keys.includes(key)){
                tests[crypto.createHash('sha256').update(input).digest('base64')]=value;
            }
        }
    }

}