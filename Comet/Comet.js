import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
    constructor(){
        this.Registry = new Registry()
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
        this.Registry.log(data, this.getOriginP(new Error().stack))
        //this stays here regardless 
        if (this.verbose){
            console.log(data.join(' '))
        }
    }

    getOriginP(stack) {
        return stack.split('\n')[2].split('file://')[1].split(":")[0]
    }

    register(path, type){
        this.Registry.register(path, type)
    }
}

