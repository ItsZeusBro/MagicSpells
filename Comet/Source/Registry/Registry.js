//A Registry instance registers paths to the comet registry index
//either way the path to the file must be created in the diff folder from
//the project root

//registry is just the existence of a file in this pattern
//registry of a dir is the existence of a meta-file belonging to the dir
//dirName.comet is how we will keep track of dir meta data
//all diffs inside a file are kept in the diff file corresponding to
//the actual registered file.


//A diff hash chain is created in the dir meta file and dirs
//higher in the tree hash these as well. 

//This is not really intended to replace version control.
//its designed to bring sanity to things you want to keep
//an eye on. Like test cases. (things that shouldn't be removed unless its wholesale)

import * as fs from "node:fs";

export class Registration{

    get_Registration(logP){
        //return this if registration exists
        //else return nothing
    }

    _log(data){
        fs.writeFileSync(this.logP, data.join(' ')+'\n', {flag:'a'})
    }

    register(indexP, rType){
        //creates registration and
        //return this
    }
    exists(indexP, rType){
        //returns true or false depending on existence
    }
}

export class Registry{
    //TODO
    exists(indexP, rType){
        return new Registration().exists(indexP, rType)
    }
    log(data, indexP){
        new Registration()._log(data, indexP)
        return
    }
    
    register(indexP, rType){
        if((!indexP) && (!rType)){
            throw Error("Registration path and type are needed for registration with comet")
        }else if(!new Registration().get_registration(indexP, rType)){
            new Registration().register(indexP, rType);
        }
    }
}

