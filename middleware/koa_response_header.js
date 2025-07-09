module.exports=async(ctx,next)=>{
  const responseType='application/json;charset=utf-8'
  ctx.set('Content-Type',responseType)
  ctx.response.body='{"success":true}'
  await next()
}