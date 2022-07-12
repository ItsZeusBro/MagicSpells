import * as fs from "node:fs";

export class Reg{
    constructor(config){
        
    }
    
    get_reg(origin, type){
        //return this if registration exists
        //else return nothing
        console.log("get_reg(origin, type)", origin, type)
    }

    log(data, origin){
        this.append(data.join(" ")+'\n', this.logFile(origin));
    }

    logFile(orign){
        //this should look in the registry index for the file associated

        //with origin. if it doesnt exist, create it and return the file
        //path
    }

    append(data, path){
        fs.writeFileSync(path, data, {flag:'a'})
    }

    register(indexP, rType){
        //creates registration and
        //return this
        console.log("register(indexP, rType)", indexP, rType)
    }

    exists(indexP, rType){
        //returns true or false depending on existence
        console.log("exists(indexP, rType)", indexP, rType);
    }

}

export class Registry{
    constructor(config){
        this.index=process.cwd()+'/comet/';
        this.create_index();
    }
    create_index(){
        if(!fs.existsSync(this.index)){
            fs.mkdirSync(this.index)
        }
    }
    //returns true or false if registration path and type exists
    exists(indexP, rType){
        return new Reg().exists(indexP, rType)
    }

    log(data, origin){
        console.log("Registry().log(data, origin)", data, origin)
        new Reg().log(data, new Reg().get_reg(origin, 'log'))
    }

    //register if not registered
    register(indexP, rType){
        if((!indexP) && (!rType)){
            throw Error("Registration path and type are needed for registration with comet")
        }else if(!new Reg().get_reg(indexP, rType)){
            new Reg().register(indexP, rType);
        }
    }
}