import * as fs from "node:fs";
import * as path from "node:path";
export class RegFile{
    constructor(index){
        this.index=index;
    }

    _walkwAppend(data, origin){
        //pop(0) was not working properly
        var tokens = origin.split(this.index)[1].split('/')
        var path = this.index;
        var i = 0;
        while(i!=tokens.length-1){
            path = path+tokens[i]+'/'
            if(!fs.existsSync(path)){
                fs.mkdirSync(path)
            }
            i++;
        }
        path=path+tokens[tokens.length-1];
        this.wAppend(data, path);
    }

    _wAppend(data, path){
        fs.writeFileSync(path, data, {flag:'a'});
    }

    log(data, origin){
        this._walkwAppend(data.join(" ")+'\n', this.resolve(origin));
    }
    
    exists(origin){
        if(fs.existsSync(this.resolve(origin))){
            return true;
        }else{
            return false;
        }
    }

    resolve(origin){
        return this.index+origin;
    }
}

export class Registry{
    constructor(config){
        this.index = this.create_index(config['root'])
        this.Reg = new RegFile(this.index)
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
    exists(origin){
        return this.RegFile.exists(origin)
    }

    log(data, origin){
        this.RegFile.log(data, origin)
    }

}