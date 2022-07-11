import * as fs from "node:fs";
import { Registry } from "./Source/Registry/Registry.js";

export class Comet{
   constructor(root){
        //Comet only needs to be initilized once for an entire project
        //so long as the project name is provided
        this.root=root
        this.Registry = new Registry(this.root)
        this.index=process.cwd().split(this.root)[0]+this.root+"/Comet/index/";
        
   }

   comet(...data){
    //this should know the absolute path to the file from where comet() its called
    var abs = this.getCaller(new Error().stack.split('\n'))
    var indexP=abs.split(this.root)[0]+this.root+"/Comet/index"+abs.split(this.root)[1]
    console.log(indexP)
   }
   getCaller(stack) {
        return stack[2].slice(
            stack[2].lastIndexOf('(')+1, 
            stack[2].lastIndexOf('.js')+3
        )
    }
}

var comet = new Comet("MatchicSpells")
comet.comet("some log")