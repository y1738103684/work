const Router = require('@koa/router')
const Koa = require('koa')
const hello = require('./test')
const { route } = require('./test')
const bodyParser = require('koa-bodyparser')

const router = new Router()
const app = new Koa()



app.use(bodyParser())

router.post("/test", async (ctx, next) => {
  console.log(ctx.request.body)
  const name = ctx.request.body.name
  console.log(name)
  if (!name) {
    throw new Error('i am wrong')
  }
  console.log('zs')
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8888)