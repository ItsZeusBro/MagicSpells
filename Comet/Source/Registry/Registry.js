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

import {LOG, TRACK} from "./rTypes.js";
import * as fs from "node:fs";

export class Registration{
    constructor(path){
        this.logP = this.create_log(path)
    }
    get_Registration(logP){

        //return this
    }
    _log(data){
        fs.writeFileSync(this.logP, data.join(' ')+'\n', {flag:'a'})
    }
    _create_log(path){

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
    constructor(){
    }
    //TODO
    get_registration(indexP, rType){
        return new Registration().get_Registration(indexP, rType)
        
    }
    exists(indexP, rType){
        return new Registration().exists(indexP, rType)
    }
    
    register(indexP, rType){
        if((!indexP) && (!rType)){
            throw Error("Registration path and type are needed for registration with comet")
        }else if(this.get_registration(indexP, rType)){
            //return existing registration object
            return new Registration.register(indexP, rType)
        }else{
            //register
            return new Registration().register(indexP, rType);
        }
    }
    getLog(logP){
        return new Registration().get_Registration(logP)
    }
}

