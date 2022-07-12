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

    //returns true or false if registration path and type exists
    exists(indexP, rType){
        return new Registration().exists(indexP, rType)
    }

    log(data, origin){
        new Registration()._log(data, this.registration(origin, 'log'))
    }

    //register if not registered
    register(indexP, rType){
        if((!indexP) && (!rType)){
            throw Error("Registration path and type are needed for registration with comet")
        }else if(!new Registration().get_registration(indexP, rType)){
            new Registration().register(indexP, rType);
        }
    }
    registration(origin, type){
        //this gets the registration associated with 
        //the file with the origin path

    }
}

