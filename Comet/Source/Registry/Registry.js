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

export class Registry{
    constructor(root){
        this.registry={}
        this.index=process.cwd().split(root)[0]+root+"/Comet/index/";

    }
    get_reg(indexP, rType){
        //get the file registration object
        //find registration file and create registration object with file and return it
    }
    reg(indexP, rType){
        if(this.reg_exist(indexP, rType)){
            return this.get_reg(indexP, rType)
        }else{

            this.registry[rType][indexP.split('/').pop(indexP.split('/').length)+hash]

            return this.get_reg(indexP, rType)
        }
    }
    register(indexP, rType){
        if((!indexP) && (!rType)){
            throw Error("Registration path and type are needed for registration with comet")
        }else if(this.get_reg(indexP, rType)){
            //return existing registration object
            return this.get_reg(indexP, rType)
        }else{
            //register
            return this.reg(indexP, rType)
        }


    }
}

export class Registration{
    constructor(path){
        
    }
}