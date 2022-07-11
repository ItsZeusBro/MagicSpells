export class Verification{
    constructor(...casess){
        this.verify(casess)
    }
    verify(casess){
        casess.forEach((cases)=>{
            this.key_val_match(cases)
        });
        console.log("verified")
    }

    key_val_match(cases){
        for (const [key, value] of Object.entries(cases)) {
            if(key!=value){
                throw Error(key, value, "do not match during verification!")
            }
        }
    }
}