//处理响应数据中间件
const path=require('path')
const fileUtils=require("../utils/file_utils")
module.exports=async(ctx,next)=>{
  //根据url,拼接请求文件路径
  const url=ctx.request.url
  // /api/sellor   ../data/sellor.json
  let fulPath=url.replace('/api','')
  fulPath='../data'+fulPath+'.json'
  //文件绝对路径
  fulPath=path.join(__dirname,fulPath)
  // 读取文件的方法
  const res=await fileUtils.getFileJsonData(fulPath)
  ctx.response.body=res
  await next()
  
}