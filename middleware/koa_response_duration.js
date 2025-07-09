// 请求耗时中间件

module.exports=async(ctx,next)=>{
  //开始时间
  const start=Date.now()
  await next()
  //结束时间
  const end=Date.now()
  const duration=end-start
  //ctx.set设置响应头
  ctx.set('X-Response-Time',duration+'ms')
  
}