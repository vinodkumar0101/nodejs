const {readFile,writeFile } = require('fs')

readFile('./content/first.txt','utf-8', (err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/sec.txt', 'utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        const sec =result
        writeFile(
        './content/result-async.txt',
        `here is the result:  ${first} ,${sec}`
        ,(err,result)=>{
            if(err){
                return
            }
            console.log(result)
        })
})})
