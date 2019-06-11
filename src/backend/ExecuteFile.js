var exec = require('child_process').exec;


module.exports.executeFile = function(res,code){
    console.log(code);
    
    child = exec("javac Test.java", function (error, stdout, stderr) {
    console.log(error!=null);
    if(error==null){
        console.log("Right");
        exec("java Test",function(error, stdouti, stderri) {
            if(error==null){
                console.log("stdouti : "+stdouti);
                res.send(stdouti);
            }else{
                console.log("stderri : "+stderri);
                res.send(stderri);
            }
        });
    }else{
        console.log("Wrong");
        res.send("Something went wrong try agian later.");
    }
    });
}