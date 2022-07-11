//A Registry instance registers paths to the comet registry index
//either way the path to the file must be created in the diff folder from
//the project root

//registry is just the existence of a file in this pattern
//registry of a dir is the existence of a meta-file belonging to the dir
//dirName.comet is how we will keep track of dir meta data
//all diffs inside a file are kept in the diff file corresponding to
//the actual registered file.


//A diff hash chain is created in the dir meta file and dirs
//higher in the tree hash these as well. 

//This is not really intended to replace version control.
//its designed to bring sanity to things you want to keep
//an eye on. Like test cases. (things that shouldn't be removed unless its wholesale)
        
export class Registry{
    constructor(root){
        this.index=process.cwd().split(root)[0]+root+"/Comet/index/";

    }
    register(){


    }
}