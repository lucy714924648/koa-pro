//读取文件的工具方法
const fs=require('fs')
module.exports.getFileJsonData=(filePath)=>{
  return new Promise((resolve,reject)=>{
    // 读取文件
   fs.readFile(filePath,'utf-8',(error,data)=>{
    if(error){
      reject(error)
    }else{
      resolve(data)
    }

  })

 })
 
}