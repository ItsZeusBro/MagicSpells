import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
    constructor(root){
        //Comet only needs to be initilized once for an entire project
        //so long as the project name is provided
        this.root=root
        this.Registry = new Registry(this.root)
        this.index=process.cwd().split(this.root)[0]+this.root+"/Comet/index/";
        this.verbose;
        this.flags()
        process.on('uncaughtException', (err, origin) => {
            var indexP = this.getCaller(err.stack.split('\n'))
            this._comet(['There was an uncaught error '+ err.stack], indexP)            
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

    // comet(...data){
    //     //this should know the absolute path to the file from where comet() its called
    //     var indexP = this.getCaller(new Error().stack.split('\n'))
    //     this._comet(data, indexP)
    // }
    // _comet(data, indexP){
    //     fs.writeFileSync(comLog, data.join(' ')+'\n', {flag:'a'})
    //     if (this.verbose){
    //         console.log(data.join(' '))
    //     }
    // }
    getCaller(stack) {
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

//Functions
//register(path, type)  //registers a file with the registry and type
//comet(...data)    //gets the registered log file Registration if it exists, and log to it
//  if it doesn't exist, register the log file and log to it

//getCaller takes the creates a new Error and gets the stack then returns the file from where 
//comet() was called back to comet() to properly find the Registration and log to it