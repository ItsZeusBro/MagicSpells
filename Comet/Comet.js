import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
    constructor(root){
            //Comet only needs to be initilized once for an entire project
            //so long as the project name is provided
            this.root=root
            this.Registry = new Registry(this.root)
            this.index=process.cwd().split(this.root)[0]+this.root+"/Comet/index/";
            process.on('uncaughtException', (err, origin) => {
                var indexP = this.getCaller(err.stack.split('\n'))
                this._comet(['There was an uncaught error '+ err.stack], indexP)            
                process.exit(1);
            });
            
    }

    comet(...data){
        //this should know the absolute path to the file from where comet() its called
        var indexP = this.getCaller(new Error().stack.split('\n'))
        this._comet(data, indexP)
    }
    _comet(data, indexP){
        //check if indexP exists, if not, create it and register it without diff behavior
        //we only want to register things according to what functionality is required
    }
    getCaller(stack) {
        var abs = stack[2].slice(
            stack[2].lastIndexOf('(')+1, 
            stack[2].lastIndexOf('.js')+3
        )
        return abs.split(this.root)[0]+this.root+"/Comet/index"+abs.split(this.root)[1]

    }
}

var comet = new Comet("MatchicSpells")
comet.comet("some log")