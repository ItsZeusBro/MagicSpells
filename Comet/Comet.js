import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
    constructor(config){
        this.config = this.set_config(config)
        //console.log(this.config)
        this.Registry = new Registry(this.config)
        process.on('uncaughtException', (err, origin) => {
            var indexP = this.getOriginFilePath(err.stack.split('\n'))
            this.comet(['There was an uncaught error '+ err.stack], indexP)            
            process.exit(1);
        });
        
    }
    set_config(config){
        if(!fs.existsSync(config)){
            throw Error("JSON config file does not exist at this location")
        }else{
            
            return JSON.parse(fs.readFileSync(config))
        }
    }
    

    comet(...data){
        this.Registry.log(data, this.getOriginFilePath(new Error().stack))
        //this stays here regardless 
        if (this.config.verbose){
            console.log(data.join(' '))
        }
    }

    getOriginFilePath(stack) {
        return stack.split('\n')[2]
        .split('file://')[1]
        .split(":")[0]
        .split(this.config.root+'/')[1];
    }

    register(path, type){
        this.Registry.register(path, type)
    }
}

