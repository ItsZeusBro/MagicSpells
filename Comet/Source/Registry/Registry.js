import * as fs from "node:fs";

export class Reg{
    constructor(root){
        this.index=process.cwd().split(root)[0]+this.root+"/Comet/index/";

    }
    get_reg(origin, type){
        //return this if registration exists
        //else return nothing
    }

    log(data){
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
    constructor(root){
        this.Reg = new Reg(root)
    }
    
    //returns true or false if registration path and type exists
    exists(indexP, rType){
        return this.Reg.exists(indexP, rType)
    }

    log(data, origin){
        this.Reg.log(data, this.Reg.get_reg(origin, 'log'))
    }

    //register if not registered
    register(indexP, rType){
        if((!indexP) && (!rType)){
            throw Error("Registration path and type are needed for registration with comet")
        }else if(!this.Reg.get_reg(indexP, rType)){
            this.Reg.register(indexP, rType);
        }
    }
}