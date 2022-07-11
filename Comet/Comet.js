import * as fs from "node:fs";

export class Comet{
    constructor(root, module){
        this.verbose;
        this.flags()
        console.log(process.cwd())
        this.logDir=process.cwd().split(root)[0]+"/Comet/comets/"
        this.moduleDir=this.logDir+module+"/"
        this.cometDir = this.moduleDir+"comets/"
        this.paths()
        this.instance = process.pid
        this.cometFile = this.cometDir+"comet_"+this.instance+'.comet'

        process.on('uncaughtException', (err, origin) => {
            this.comet('There was an uncaught error', err.stack);
            //this.comet('Origin of Error\n'+'\n',JSON.stringify(origin));
            process.exit(1); // mandatory (as per the Node.js docs)
        });
    }
    paths(){
        if (!fs.existsSync(this.logDir)){
            fs.mkdirSync(this.logDir)
            fs.mkdirSync(this.moduleDir)
            fs.mkdirSync(this.cometDir)
        }else if(!fs.existsSync(this.moduleDir)){
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
        if(data[0]=="error"||data[0]=="Error"||data[0]=="ERROR"){
            var error = new Error(data.pop(0))
            fs.writeFileSync(this.cometFile, data.join(' ')+'\n', {flag:'a'})
            if (this.verbose){
                console.log(data.join(' '))
            }
            throw error;
        }else{
            fs.writeFileSync(this.cometFile, data.join(' ')+'\n', {flag:'a'})
            if (this.verbose){
                console.log(data.join(' '))
            }
        }

    }
}
