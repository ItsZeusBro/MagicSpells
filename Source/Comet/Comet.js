import * as fs from "node:fs";

export class Comet{
    constructor(cometsDir){
        this.verbose;
        this.flags()
        this.cometsDir=cometsDir
        if (!fs.existsSync(this.cometsDir)){
            fs.mkdirSync(this.cometsDir)
        }
        this.instance = process.pid
        this.cometFile = this.cometsDir+"comet_"+this.instance+'.comet'

        process.on('uncaughtException', (err, origin) => {
            this.comet('There was an uncaught error', err.stack);
            //this.comet('Origin of Error\n'+'\n',JSON.stringify(origin));
            
            process.exit(1); // mandatory (as per the Node.js docs)
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
        fs.writeFileSync(this.cometFile, data.join(' ')+'\n', {flag:'a'})
        if (this.verbose){
            console.log(data.join(' '))
        }
    }
}
