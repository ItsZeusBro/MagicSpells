import * as fs from "node:fs";
import * as path from "node:path";
export class Reg{
    constructor(index){
        this.index=index
    }
    
    get_reg(rType, origin){
        //return this if registration exists
        //else return nothing
        //console.log("get_reg(origin, type)", origin, type)
    }

    log(data, origin){
        this.wAppend(data.join(" ")+'\n', this.resolve(origin));
    }



    wAppend(data, origin){
        var tokens = origin.split('/')
        while(tokens.length>1){
            if(!fs.existsSync(tokens[0])){
                fs.mkdirSync(tokens.pop(0))
            }
        }
        if(!fs.existsSync(tokens[0])){
            fs.writeFileSync(tokens[0], data, {flag:'a'})
        }
    }

    register(rType, origin){
        //creates registration and
        //return this
        // console.log("register(indexP, rType)", indexP, rType)
    }

    exists(rType, origin){
        //returns true or false depending on existence
        //console.log("exists(indexP, rType)", indexP, rType);
    }

    resolve(origin){
        //this just resolves the origin to its proper index path
        //and returns the path that may or may not exist
        return this.index+origin;
    }

}

export class Registry{
    constructor(config){
        this.index = this.create_index(config['root'])
        this.Reg = new Reg(this.index)
    }

    create_index(root){
        var index = process.cwd().split(root)[0]+root+'/comet/'
        if(!fs.existsSync(index)){
            fs.mkdirSync(index)
            return index;
        }else{
            return index;
        }
    }


    //returns true or false if registration path and type exists
    exists(indexP, rType){
        return this.Reg.exists(indexP, rType)
    }

    log(data, origin){
        this.Reg.log(data, origin)
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