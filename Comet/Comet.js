import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
    constructor(root){
        this.root=root
        this.Registry = new Registry(root)
        this.verbose;
        this.flags()
        process.on('uncaughtException', (err, origin) => {
            var indexP = this.getOriginP(err.stack.split('\n'))
            this.comet(['There was an uncaught error '+ err.stack], indexP)            
            process.exit(1);
        });
        
    }
    
    flags(){
        var flags = process.argv
        flags.forEach(element => {
            if (element=='--verbose'){
                this.verbose=true
            }
        });
    }

    comet(...data){

        this.Registry.log(data, this.getOriginP(new Error().stack.split('\n')))
        //this stays here regardless 
        if (this.verbose){
            console.log(data.join(' '))
        }
    }

    getOriginP(stack) {
        var abs = stack[2].slice(
            stack[2].lastIndexOf('(')+1, 
            stack[2].lastIndexOf('.js')+3
        )
        return abs.split(this.root)[0]+this.root+"/Comet/index"+abs.split(this.root)[1]
    }

    register(path, type){
        this.Registry.register(path, type)
    }
}

var comet = new Comet("MatchicSpells")
comet.comet("some log")
