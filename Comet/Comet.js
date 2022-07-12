import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
    constructor(config){
        this.config = this.set_config(config)
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

    async comet(...data){
        this.Registry.log(data, this.getOriginFilePath(await this.getStack()))
        if (this.config.verbose){
            console.log(data.join(' '))
        }
    }
    async getStack(){
        return new Error().stack
    }

    getOriginFilePath(stack) {
        if (typeof stack === 'string' || stack instanceof String){
            return stack.split('\n')[3]
                    .split('file://')[1]
                    .split(":")[0]
                    .split(this.config.root+'/')[1];

        }else{
            return stack[3]
                    .split('file://')[1]
                    .split(":")[0]
                    .split(this.config.root+'/')[1];
        }
    }

}