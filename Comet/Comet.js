import * as fs from "node:fs";

export class Comet{
    constructor(root, module){
        this.verbose;
        this.flags()
        this.moduleDir=process.cwd().split(root)[0]+root+"Comet/"+module+"/"
        this.cometDir = this.moduleDir+"comets/"
        this.paths()
        this.instance = process.pid
        this.cometFile = this.cometsDir+"comet_"+this.instance+'.comet'

        process.on('uncaughtException', (err, origin) => {
            this.comet('There was an uncaught error', err.stack);
            //this.comet('Origin of Error\n'+'\n',JSON.stringify(origin));
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
    paths(){
        if (!fs.existsSync(this.moduleDir)){
            fs.mkdirSync(this.moduleDir)
            fs.mkdirSync(this.cometDir)
        }else if(!fs.existsSync(this.cometDir)){
            fs.mkdirSync(this.cometDir)
        }
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
        console.log(this.cometFile)
        fs.writeFileSync(this.cometFile, data.join(' ')+'\n', {flag:'a'})
        if (this.verbose){
            console.log(data.join(' '))
        }
    }
}
