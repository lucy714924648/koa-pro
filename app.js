const Koa=require('koa')
const app=new Koa()
// 请求耗时中间件
const resDurationMiddleware=require('./middleware/koa_response_duration')
app.use(resDurationMiddleware)

// // 设置响应头中间件
const resHeaderMiddleware=require('./middleware/koa_response_header')
app.use(resHeaderMiddleware)

//处理响应数据中间件
const resDataMiddleware=require('./middleware/koa_response_data')
app.use(resDataMiddleware)

//监听端口
app.listen(8888)
