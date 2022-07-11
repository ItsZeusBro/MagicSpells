export class Verification extends Comet{
    constructor(){
    }

    //You can register a file at anytime with comet
    //the last 1000 merge diffs are kept for the registered file
    //in the diffs folder.

    //pre-commit hooks are used to call Comet's verification code
    //to verify the user's changes to a registered file using their
    //git ssh key file.
    
    //diff logger relies on the initial state of the registered file
    //diffs are secured in a hash chain for sanity.
    
    //step 1: take a snapshot of the test case file
    //step 2: take the hash of every test case
    //step 3: sort hashes
    //step 4: hash of sorted hashes
    //step 5: associate snapshot with hash of sorted hashes
    //diffs should be stored in diff folder and you should be able
    //to reverify the hash of sorted hashes from anypoint. 


}